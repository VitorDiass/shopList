import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import authProvider = firebase.auth.AuthProvider;
import { UserData } from '../pages/data';
 

@Injectable()
export class AuthenticationService {
    private user : firebase.User;

    constructor(public afAuth : AngularFireAuth){
        afAuth.authState.subscribe(
                        user => {
                            this.user = user;
                        }
        )
    }

    signEmail(data : UserData){
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
    }

    signUp(data : UserData){
        return this.afAuth.auth.createUserWithEmailAndPassword(data.email,data.password);
    }

    

}

