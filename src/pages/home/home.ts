import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	picture: any;
  constructor(public navCtrl: NavController) {

  }
  recog() {
  	this.picture = "assets/imgs/1.png";
    Tesseract.recognize(this.picture)
    .progress(message => {
      console.log(message);
    })
    .catch(err => console.error(err))
    .then(result => {
      alert(result.text);
    })
    .finally(resultOrError => {
    });
}
}
