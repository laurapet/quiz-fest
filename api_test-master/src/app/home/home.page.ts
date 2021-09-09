import {Component} from '@angular/core';
import {OidcService} from '../services/oidc.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authenticated: boolean;
  email: string;
  name: string;

  constructor(private oidcService: OidcService) {
    oidcService.onAuthSuccess.subscribe({
      next: () => {
        this.authenticated = true;
        this.updateUserinfo();
      }
    });
  }

  openLogin() {
    this.oidcService.openLogin();
  }

  openRegister() {
    this.oidcService.openRegister();
  }

  openUserManagement() {
    this.oidcService.openUserManagement();
  }

  openLogout() {
    this.oidcService.openLogout();
  }

  updateUserinfo() {
    this.email = this.oidcService.getEmail();
    this.name = this.oidcService.getUsername();
  }

  logInfo() {
    this.oidcService.logToken();
  }

  logClaims() {
    this.oidcService.logClaims();
  }
}
