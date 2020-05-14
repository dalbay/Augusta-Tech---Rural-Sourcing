
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Observable } from "rxjs";




@Injectable()
export class Repository {


    constructor(private http: HttpClient) {

    }



    login(name: string, password: string): Observable<boolean> {
        return this.http.post<boolean>("/api/account/login",
            { name: name, password: password });
    }

    logout() {
        this.http.post("/api/account/logout", null).subscribe(response => { });
    }
}