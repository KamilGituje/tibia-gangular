import { Component } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Subscription } from "rxjs";
import { UserAuth } from "../security/app-user-auth";
import { SecurityService } from "../security/security.service";
import { UserForLoginAndRegister } from "../security/user-for-login-and-register";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    constructor(private securityService: SecurityService, private router: Router) { }

    userForLogin: UserForLoginAndRegister = new UserForLoginAndRegister();
    auth: UserAuth = new UserAuth();
    decodedAuthObject: any;

    onSubmit() {
        this.securityService.auth = new UserAuth();
        this.securityService.login(this.userForLogin).subscribe({
            next: r => {
                this.decodedAuthObject = jwtDecode<any>(r);
                this.auth = this.decodedAuthObject;
                this.auth.isAuthenticated = true;
                this.auth.bearerToken = r;
                this.auth.userId = this.decodedAuthObject.sub;
                this.securityService.auth = this.auth;
                localStorage.setItem("AuthObject", JSON.stringify(this.auth));
                this.router.navigate([""]);
            }
        });
    }
}