import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthenticationService } from '../../authentication/authentication.service';
import { RegisterPage } from '../register/register';
import { UserData } from '../data'; 
import { AlertsComponent } from '../../utils/alertController';

 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : [AuthenticationService]
  
})
export class LoginPage{

  private userData : UserData = new UserData("","");


  constructor(public navCtrl: NavController, public afAuth : AuthenticationService, public alert : AlertsComponent) {
    
   
  }


  login(){

    this.afAuth.signEmail(this.userData).then(
      () =>{
      let buttons = [{text : 'OK', handler : () => {  this.navCtrl.push(RegisterPage)}}]
      this.alert.alertControllerCreate("Login",buttons,"","Login com sucesso")
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