import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserAuth } from "./app-user-auth";
import { SecurityService } from "./security.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(private securityService: SecurityService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const claimType: string = route.data["claimType"];
        const auth = this.securityService.auth;
        const isAuthorized: boolean = auth[claimType as keyof UserAuth] as boolean;

        if (claimType === "isAuthenticated") {
            if (!auth.isAuthenticated) {
                return true;
            }
            return false;
        }
        if (auth.isAuthenticated && isAuthorized) {
            return true;
        }
        else {
            this.router.navigate([""])
            return false;
        }
    }
}