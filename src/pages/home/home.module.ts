import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { AutocompletePage} from '../autocomplete/autocomplete';

@NgModule({
  declarations: [
    HomePage,
    AutocompletePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),   
  ],
  exports: [
    HomePage
  ],
  entryComponents:[
    AutocompletePage
  ]
})
export class HomePageModule {}
