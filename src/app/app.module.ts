import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps} from '@ionic-native/google-maps';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';
//import { OnGoingRequestsPageModule } from '../pages/on-going-requests/on-going-requests.module';
//import { RequestHistoryPageModule } from '../pages/request-history/request-history.module';
import { SettingsPage } from '../pages/settings/settings';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { AccountsPage } from '../pages/accounts/accounts';
import { HttpModule} from '@angular/http';
import { RequestProvider } from '../providers/request/request'; 
import {IonicStorageModule} from '@ionic/Storage';
import {Storage} from '@ionic/Storage';
import { HomePageModule } from '../pages/home/home.module';


//import { RequestsPipe } from '../pipes/requests/requests';

@NgModule({
  declarations: [
    MyApp, 
    AccountsPage,
    UpdateProfilePage,
    SettingsPage,

    //AutocompletePage

    //RequestsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HomePageModule
    //OnGoingRequestsPageModule,
    //RequestHistoryPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountsPage,
    UpdateProfilePage,
    SettingsPage,
    //AutocompletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Geolocation,
    GoogleMaps,
    NativeGeocoder,
    LocalNotifications,
    RequestProvider,
    DatePicker,
    LocationAccuracy,   
    IonicStorageModule,
    Diagnostic

    //RequestsPipe
  ],
  exports:[
    //RequestsPipe
  ]
})
export class AppModule {}
