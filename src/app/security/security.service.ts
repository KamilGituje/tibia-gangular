import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiPaths } from "src/environments/ApiPaths";
import { environment } from "src/environments/environment";
import { UserAuth } from "./app-user-auth";
import { UserForLoginAndRegister } from "./user-for-login-and-register";


@Injectable({
    providedIn: "root"
})
export class SecurityService {
    constructor(private http: HttpClient) { }

    auth: UserAuth = new UserAuth();

    baseUrl = environment.baseUrl;

    login(user: UserForLoginAndRegister): Observable<string> {
        return this.http.put(`${this.baseUrl}/${ApiPaths.security}/login`, user, { responseType: "text" })
    }
    createUser(user: UserForLoginAndRegister): Observable<string> {
        return this.http.post(`${this.baseUrl}/${ApiPaths.security}/register`, user, { responseType: "text" })
    }
    logout() {
        this.auth = new UserAuth();
        localStorage.clear();
    }
}