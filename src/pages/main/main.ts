import { Component } from "@angular/core";
import { ListPage } from "../list/list";
import { ProductPage } from "../product/product";
import { NavController } from "ionic-angular";


@Component({
    templateUrl : 'main.html',
    selector : "page-main",

})

export class MainPage {

    List : ListPage;
    private Products : ProductPage;
    private value : any;

    constructor(public navController : NavController){

    }
}