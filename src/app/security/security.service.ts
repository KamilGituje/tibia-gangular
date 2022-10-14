import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { UserAuth } from "./app-user-auth";
import { UserForLoginAndRegister } from "./user-for-login-and-register";


@Injectable({
    providedIn: "root"
})
export class SecurityService {
    constructor(private http: HttpClient) { }

    auth: UserAuth = new UserAuth();

    securityUrl = "https://localhost:7107/api/security";

    login(user: UserForLoginAndRegister): Observable<string> {
        return this.http.put(`${this.securityUrl}/login`, user, { responseType: "text" })
    }
    createUser(user: UserForLoginAndRegister): Observable<string> {
        return this.http.post(`${this.securityUrl}/register`, user, { responseType: "text" })
    }
    logout() {
        this.auth = new UserAuth();
        localStorage.removeItem("AuthObject");
    }
}