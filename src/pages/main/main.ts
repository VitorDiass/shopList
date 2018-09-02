import { Component } from "@angular/core";
import { ListPage } from "../list/list";
import { ProductPage } from "../product/product";
import { NavController } from "ionic-angular";


@Component({
    templateUrl : 'main.html',
    selector : "page-main",

})

export class MainPage {

    private List : ListPage;
    private Products : ProductPage;

    constructor(public navController : NavController){

    }
}