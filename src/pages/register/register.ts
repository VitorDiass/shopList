import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserData } from '../data';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
    providers: [AuthenticationService]

})
export class RegisterPage{

    private userData : UserData = new UserData("","");

    constructor(public navCtrl: NavController, public afAuth: AuthenticationService) {

    }

    register() {
        this.afAuth.signUp(this.userData)
                   .then( x => {
                       alert(x);
                   },
                   error => {
                      alert(error);
                   }
                   
                   )
    }


}