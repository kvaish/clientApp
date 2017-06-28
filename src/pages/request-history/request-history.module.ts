import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestHistoryPage } from './request-history';
import { OnGoingRequestsPageModule } from '../on-going-requests/on-going-requests.module';
@NgModule({
  declarations: [
    RequestHistoryPage,
    //RequestsPipe
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
