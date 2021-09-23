import { Component } from '@angular/core';
import {Haptics} from '@capacitor/haptics';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {
  hapticsOn: boolean;

  constructor(private router: Router) {
    try{
      const haptics = localStorage.getItem('hapticsOn');
      this.hapticsOn = ('true' == haptics);
    } catch (e){
      this.hapticsOn = false;
    }
  }

  async hapticsVibrate() {
    if(!this.hapticsOn){
      await Haptics.vibrate();
    }
    localStorage.setItem('hapticsOn', this.hapticsOn.toString());
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate([`../login`]);
  }

  points(): string{
    return localStorage.getItem('points');
  }

  name(): string{
    return localStorage.getItem('username');
  }
}


