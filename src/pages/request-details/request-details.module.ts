import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDetailsPage } from './request-details';

@NgModule({
  declarations: [
    RequestDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestDetailsPage),
  ],
  exports: [
    RequestDetailsPage
  ],
  providers:[
    RequestDetailsPage
  ],
  entryComponents:[
    RequestDetailsPage
  ]
})
export class RequestDetailsPageModule {}
