import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
    template : './product.html',
    selector : "page-product"

})

export class ProductPage {

    constructor(public navController : NavController){
        
    }
}