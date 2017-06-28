import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnGoingRequestsPage } from './on-going-requests';
import { RequestsPipe } from '../../pipes/requests/requests';

@NgModule({
  declarations: [
    OnGoingRequestsPage,
    RequestsPipe
  ],
  imports: [
    IonicPageModule.forChild(OnGoingRequestsPage),
  ],
  exports: [
    OnGoingRequestsPage,
    RequestsPipe
  ]
})
export class OnGoingRequestsPageModule {}
