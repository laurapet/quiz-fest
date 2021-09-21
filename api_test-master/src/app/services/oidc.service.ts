import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OidcService {
  /**
   * Observable called on successful authentication after login or registration
   */
  public onAuthSuccess = new Subject();

  /**
   * The keycloak instance from the keycloak js library
   */
  private keycloak: Keycloak.KeycloakInstance;

  constructor() {
    this.keycloak = Keycloak({
      url: 'http://localhost:8180/auth/',
      realm: 'quiz-fest',
      clientId: 'quiz-fest'
    });

    this.initCallbacks();

    const token = localStorage.getItem('token') || null;
    if (token){
      this.keycloak.init(JSON.parse(token));
    } else {
      this.keycloak.init({});
    }
  }

  initCallbacks(): void {
    this.keycloak.onAuthSuccess = () => {
      // trigger observable
      this.onAuthSuccess.next();

      // store tokens
      this.storeTokens();
    };

    this.keycloak.onTokenExpired = () => {
      this.keycloak.updateToken(0);
    };
  }

  storeTokens(): void {
    const token = {
      token: this.keycloak.token,
      refreshToken: this.keycloak.refreshToken,
      idToken: this.keycloak.idToken
    };

    localStorage.setItem('token', JSON.stringify(token));
  }

  openLogin(): void {
    this.keycloak.login();
  }

  openRegister(): void {
    this.keycloak.register();
  }

  openUserManagement(): void {
    this.keycloak.accountManagement();
  }

  openLogout() {
    this.keycloak.logout();
  }

  getUsername(): string {
    return this.keycloak.tokenParsed['name'];
  }

  getEmail(): string {
    return this.keycloak.tokenParsed['email'];
  }

  logToken(){
    console.log(this.keycloak.token);
  }

  logClaims(){
    console.log(this.keycloak.tokenParsed);
  }

  isVendor() {
    console.log(this.keycloak.hasRealmRole('vendor'));
  }
}
