import { Component } from '@angular/core';
import { UserAuth } from './security/app-user-auth';
import { SecurityService } from './security/security.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public securityService: SecurityService) { }

  pageTitle: string = "Tibijka boża";

  logout() {
    this.securityService.logout();
  }
  isAuthenticated(): boolean {
    return this.securityService.auth.isAuthenticated;
  }
  getUserName(): string {
    return this.securityService.auth.userName;
  }
  ngOnInit() {
    if (!this.isAuthenticated()) {
      let authStorage = localStorage.getItem("AuthObject");
      if (authStorage) {
        this.securityService.auth = JSON.parse(authStorage);
      }
    }
  }
}