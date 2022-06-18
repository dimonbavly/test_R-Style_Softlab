import { Ihotel } from './../hotels/models/hotels.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailedHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detailed-hotel',
  templateUrl: 'detailed-hotel.html',
})
export class DetailedHotelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let hotel: Ihotel = navParams.get('hotel');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedHotelPage');
  }

}
