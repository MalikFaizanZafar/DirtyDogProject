import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogPoundPage } from './dog-pound';

@NgModule({
  declarations: [
    DogPoundPage,
  ],
  imports: [
    IonicPageModule.forChild(DogPoundPage),
  ],
})
export class DogPoundPageModule {}
