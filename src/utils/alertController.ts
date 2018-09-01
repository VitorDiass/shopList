import { AlertController } from "ionic-angular";
import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication/authentication.service";

@Component({
    
})

export class AlertsComponent {

    constructor(public alertController : AlertController){

    }

    alertControllerCreate(title : string,buttons : Array<any>, subtitle ? : string, message ? : string){
        let alert  = this.alertController.create({
            title : title,
            subTitle : subtitle,
            message : message,
            buttons : buttons
        });
        alert.present();
    }


}