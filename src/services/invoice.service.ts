import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class invoiceService {

    constructor(private http: HttpClient) { }

    apiURL = '/api';

    getInvoiceByCustomerNo(customer_no: string): Observable<any> {

        var Query =
        {
            "query": [
                {
                    "CustomerNo": customer_no,

                }
            ]
        };

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var value = this.http.post<any>('https://www.sacpvpnode.online/getInvoicesByCustomerNo',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    getInvoiceByInvoiceID(invoiceID: string): Observable<any> {

        var Query =

        {
            "query": [
                {
                    "invoiceID": invoiceID,
                }
            ]
        };

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var value = this.http.post<any>('https://www.sacpvpnode.online/getInvoiceByInvoiceID',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    getInvoiceLineItemsByInvoiceID(InvoiceID: number): Observable<any> {

        var Query =

        {
            "query": [
                {
                    "InvoiceID": InvoiceID,

                }
            ]
        };

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var value = this.http.post<any>('https://www.sacpvpnode.online/getInvoiceLineItemsByInvoiceID',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }


    handleError(error: HttpErrorResponse) {
        return throwError(error)
    }
}
