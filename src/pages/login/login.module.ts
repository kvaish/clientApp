import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {IonicStorageModule} from '@ionic/Storage';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ],
  providers: [
    LoginPage,
    Storage
  ]
})
export class LoginPageModule {}
