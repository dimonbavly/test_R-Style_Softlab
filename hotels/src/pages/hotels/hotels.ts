import { Ihotel } from './models/hotels.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailedHotelPage } from '../detailed-hotel/detailed-hotel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  hotels: Ihotel[];
  hotelsForm?: FormGroup;

  constructor(public navCtrl: NavController, private _fb: FormBuilder) {
    this.initForm();
    this.hotels = [
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/i?id=18580a9c4b7f6aefd75b6329158406ec-5234362-images-thumbs&n=13&exp=1',
        title: 'А',
        description: 'Гостиница А',
        roomCost: 1000,
        hasParking: false,
        address: 'Moscow',
        phone: '8 (495) 123-45-678'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/i?id=de78248eab75bc86958fcdfc01747224-5480389-images-thumbs&n=13&exp=1',
        title: 'Б',
        description: 'Гостиница Б',
        roomCost: 10000,
        hasParking: true,
        address: 'Moscow',
        phone: '8 (495) 123-45-678'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/i?id=2c4f96a460697d4b0d9174c468c997bb-5480282-images-thumbs&n=13&exp=1',
        title: 'С',
        description: 'Гостиница С',
        roomCost: 4999,
        hasParking: false,
        address: 'Moscow',
        phone: '8 (495) 123-45-678'
      },
            {
        imageUrl: 'https://avatars.mds.yandex.net/i?id=9f21a2a3f471c26b1a78ed11519a9817-5228318-images-thumbs&n=13&exp=1',
        title: 'D',
        description: 'Гостиница D',
        roomCost: 5001,
        hasParking: true,
        address: 'Moscow',
        phone: '8 (495) 123-45-678'
      }
    ]
  }

  openDetailedHotel(hotel: Ihotel): void {
    this.navCtrl.push(DetailedHotelPage, {hotel});
  }

  private initForm(): void {
    this.hotelsForm = this._fb.group({
      priceFrom: [''],
      priceTo: [''],
      parkingAvailable: [false],
    });
  }
}
