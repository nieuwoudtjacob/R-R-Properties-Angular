import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class documentService {

    constructor(private http: HttpClient) { }
    apiURL = '/api';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic RHJpZXM6RHJpZXMxMjM=',
        }),
    };


    postDocumentJson(bearer: string, id_Property: string, Filename: string): Observable<any> {

        var Query = {
            "fieldData":
            {
                "id_Property": id_Property,
                //"Filename": Filename
            }
        };
        console.log(Query)
        console.log(bearer)
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + bearer
            }),
        };
        var value = this.http.post<any>('https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/layouts/Website_Gallery/records',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));
        console.log("work1")
        return value;
    }

    postDocument(token: string, document: FormData, record: any): Observable<any> {

        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + token
            }),
        };
        var value = this.http.post<any>('https://www.w5spooltracker.net/fmi/data/v1/databases/R and R Property/layouts/Website_Gallery/records/' + record + '/containers/File',
            document,
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error)
    }


    getDocumentsByUser(customer_no: string): Observable<any> {

        var Query =

        {
            "query": [
                {
                    "Customer_Number": customer_no,
                }
            ]
        };

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var value = this.http.post<any>('https://www.sacpvpnode.online/getDocumentsByUser',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }



    getDocumentsByUserCategory(customer_no: string, category: string): Observable<any> {

        var Query =

        {
            "query": [
                {
                    "Customer_Number": customer_no,
                    "Category": category
                }
            ]
        };

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var value = this.http.post<any>('https://www.sacpvpnode.online/getDocumentsByUserCategory',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }



}



