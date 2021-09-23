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
  const; // @ts-ignore
  hapticsVibrate = async () => {
    if(!this.hapticsOn){
      await Haptics.vibrate();
    }
    localStorage.setItem('hapticsOn', this.hapticsOn.toString());
  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private router: Router) {
    try{
      const haptics = localStorage.getItem('hapticsOn');
      this.hapticsOn = ('true' == haptics);
    } catch (e){
      this.hapticsOn = false;
    }
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


