import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  ionViewWillLoad(){
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'block';
        });
    }
  }

}
