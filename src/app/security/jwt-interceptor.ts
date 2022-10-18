import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserAuth } from "./app-user-auth";
import { SecurityService } from "./security.service";

@Injectable({
    providedIn: "root"
})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private securityService: SecurityService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth: UserAuth = this.securityService.auth;

        if (auth.isAuthenticated) {
            req = req.clone({
                setHeaders: { Authorization: "Bearer " + auth.bearerToken }
            })
        }
        return next.handle(req);
    }
}