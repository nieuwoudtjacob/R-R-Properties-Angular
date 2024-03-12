import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { query } from '@angular/animations';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }
    ///http://localhost:8085/getUser
    ////https://sacpvp-backend-nodeapp.onrender.com

    apiURL = '/api';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('Dries:Dries123')
        }),
    };

    getBearerTokenDocumentsDB(): Observable<any> {
        var value = this.http.get<any>('http://localhost:8080/invoiceBearer',

        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    // getBearerToken(): Observable<any> {

    //     var value = this.http.get<any>('https://sacpvp-backend-nodeapp.onrender.com/invoiceBearer',

    //     )
    //         .pipe(retry(4), catchError(this.handleError));

    //     return value;
    // }



    getUser(username: string, password: string): Observable<any> {

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        //   var encodedpassword = btoa(password)
        var Query =
        {
            "query": [
                {
                    "Username": username,
                    "Password": password
                }
            ]
        };

        var value = this.http.post<any>('http://localhost:8080/getUser',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    getPropertyDocumentsByPropertyID(ID_Property: string): Observable<any> {

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var Query =
        {
            "query": [
                {
                    "id_Property": ID_Property
                }
            ]
        };

        var value = this.http.post<any>('http://localhost:8080/getPropertyDocumentsByPropertyID',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    getPropertyByID(ID_Property: string): Observable<any> {

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var Query =
        {
            "query": [
                {
                    "ID_Property": ID_Property
                }
            ]
        };

        var value = this.http.post<any>('http://localhost:8080/getPropertyByID',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    getProperties(): Observable<any> {

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        //   var encodedpassword = btoa(password)
        // var Query =
        // {
        //     "query": [
        //         {
        //             "Username": username,
        //             "Password": password
        //         }
        //     ]
        // };

        var value = this.http.get<any>('http://localhost:8080/getProperties',
            //JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }



    updateUserTempPassword(newPassword: any, recordId: any, user: any): Observable<any> {


        var Query =

        {
            "fieldData":
            {
                "Customer_No": user.Customer_No,
                "Email": user.Email,
                "Flag_Temp_Password": "1",
                "Password": newPassword.toString(),
                "Username": user.Username,
                "recordId": recordId
            }

        };

        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var value = this.http.patch<any>('http://localhost:8080/updateTempPassword',
            JSON.stringify(Query),
            httpOptions
        )
            .pipe(retry(4), catchError(this.handleError));

        return value;
    }

    // Error handling
    handleError(error: HttpErrorResponse) {
        return throwError(error)
    }
}
