import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTabPage } from './home-tab';
//import { CreateRequestPage } from '../create-request/create-request';

@NgModule({
  declarations: [
    HomeTabPage,
    //CreateRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTabPage),
  ]
})
export class HomeTabPageModule {}
