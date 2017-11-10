import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LogInPage} from '../log-in/log-in';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logInPage = LogInPage
  registerPage = RegisterPage
  constructor(public navCtrl: NavController) {

  }

}
