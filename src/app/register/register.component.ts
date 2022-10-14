import { Component } from "@angular/core"
import { Subscription } from "rxjs";
import { SecurityService } from "../security/security.service";
import { UserForLoginAndRegister } from "../security/user-for-login-and-register"

@Component({
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent{
    constructor(private securityService: SecurityService){}
    userForRegister:UserForLoginAndRegister = new UserForLoginAndRegister();
    sub: Subscription;

    onSubmit(){
        this.sub = this.securityService.createUser(this.userForRegister).subscribe();
    }
}