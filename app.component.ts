import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage: any= 'LoginPage';
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'list'
    }
   ,
    {
      title: 'register',
      url: '/register',
      icon: 'list'
    },
    {
      title: 'Member',
      url: '/membership',
      icon: 'people'
    },
    {
      title: 'Werte eingeben',
      url: '/werte',
      icon: 'color-palette'
    },
    {
      title: 'Werte ansehen',
      url: '/statistic',
      icon: 'stat'
    },
    {
      title: 'Resultate',
      url: '/result',
      icon: 'color-palette'
    }
    

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
