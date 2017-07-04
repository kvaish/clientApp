import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomeTabPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-home-tab',
  templateUrl: 'home-tab.html'
})
@IonicPage()
export class HomeTabPage {

  homeRoot = 'HomePage'
  onGoingRequestsRoot = 'OnGoingRequestsPage'
  requestHistoryRoot = 'RequestHistoryPage'


  constructor(public navCtrl: NavController) {}


}
