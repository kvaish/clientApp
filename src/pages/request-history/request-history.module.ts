import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestHistoryPage } from './request-history';
import { OnGoingRequestsPageModule } from '../on-going-requests/on-going-requests.module';
import { RequestsPipe } from '../../pipes/requests/requests';


@NgModule({
  declarations: [
    RequestHistoryPage,
    
  ],
  imports: [
    IonicPageModule.forChild(RequestHistoryPage),
    OnGoingRequestsPageModule
  ],
  exports: [
    RequestHistoryPage,
    //RequestsPipe
  ]
})
export class RequestHistoryPageModule {}
