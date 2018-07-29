import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
  
})
export class LoginPage {

  private email : string;
  private password : string; 

  constructor(public navCtrl: NavController) {
    
  }

  login(){
    
  }

}