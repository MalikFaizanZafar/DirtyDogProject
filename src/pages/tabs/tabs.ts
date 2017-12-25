import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MyDogPage } from '../my-dog/my-dog';
import { SearchPage } from '../search/search';
import { ReportDogPage } from '../report-dog/report-dog';
import { DogPoundPage } from '../dog-pound/dog-pound';
import { MapPage } from '../map/map';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  private Main = MainPage;
  private Home = HomePage;
  private MyDog = MyDogPage;
  private Search = SearchPage;
  private Report = ReportDogPage;
  private DogPound = DogPoundPage;
  private Map = MapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
