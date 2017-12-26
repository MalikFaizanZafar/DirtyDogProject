import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DogPoundPage } from '../pages/dog-pound/dog-pound';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { MapPage } from '../pages/map/map';
import { MyDogPage } from '../pages/my-dog/my-dog';
import { ReportDogPage } from '../pages/report-dog/report-dog';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsService } from '../pages/tabs.service';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DogPoundPage,
    LoginPage,
    MainPage,
    MapPage,
    MyDogPage,
    ReportDogPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRso-U5lKBIgImaDlU8ehe0KksfP9F1og'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DogPoundPage,
    LoginPage,
    MainPage,
    MapPage,
    MyDogPage,
    ReportDogPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,TabsService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
