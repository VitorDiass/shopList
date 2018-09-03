import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthenticationService } from '../../authentication/authentication.service';
import { RegisterPage } from '../register/register';
import { UserData } from '../data'; 
import { AlertsComponent } from '../../utils/alertController';
import { MainPage } from '../main/main';

 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : [AuthenticationService]
  
})
export class LoginPage{

  private userData : UserData = new UserData("v@gmail.com","123456");


  constructor(public navCtrl: NavController, public afAuth : AuthenticationService, public alert : AlertsComponent) {
    
   
  }


  login(){

    this.afAuth.signEmail(this.userData).then(
      () =>{
      // let buttons = [{text : 'OK', handler : () => {  this.navCtrl.push(MainPage)}}]
      // this.alert.alertControllerCreate("Login",buttons,"","Login com sucesso")

      this.navCtrl.push(MainPage);
      }
    ),
    error => {
      console.log(error.message);
    }

  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}