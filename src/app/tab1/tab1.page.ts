import { Component } from '@angular/core';
import {Haptics} from '@capacitor/haptics';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  const // @ts-ignore
  hapticsVibrate = async () => {
    await Haptics.vibrate();
  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}

  logout() {
    localStorage.removeItem('token');
  }

  points(): string{
    return localStorage.getItem('points');
  }

  name(): string{
    return localStorage.getItem('username');
  }
}


