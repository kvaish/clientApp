import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { AccountsPage } from '../accounts/accounts';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/Storage';
import { GoogleMap} from '@ionic-native/google-maps';
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
  pages: Array<{title: string, component: any}>;
   map: GoogleMap;


  constructor(public navCtrl: NavController,private storage:Storage) {
     this.pages = [
        { title: 'Update Profile', component: UpdateProfilePage },
        { title: 'Settings', component: SettingsPage },
        { title: 'Account', component: AccountsPage }
      ];
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

  menuOpened(){
    if(this.map) {
      this.map.setClickable(false);
    }
  }

  menuClosed(){
    if(this.map) {
      this.map.setClickable(true);
    }
  }

  logout(){
    this.storage.clear().then(() => {
      console.log('Keys have been cleared');
    });
    this.navCtrl.setRoot('LoginPage');
    
  }

}
