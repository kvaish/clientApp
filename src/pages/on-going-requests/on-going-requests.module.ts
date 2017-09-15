import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnGoingRequestsPage } from './on-going-requests';
import { RequestsPipe } from '../../pipes/requests/requests';
import {RequestDetailsPage} from '../request-details/request-details';

@NgModule({
  declarations: [
    OnGoingRequestsPage,
    RequestsPipe,
    RequestDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(OnGoingRequestsPage),
  ],
  exports: [
    OnGoingRequestsPage
  ],
  entryComponents:[
    RequestDetailsPage
  ]
})
export class OnGoingRequestsPageModule {}
