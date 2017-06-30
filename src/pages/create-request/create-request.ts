import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { DatePicker } from '@ionic-native/date-picker';
import {Storage} from '@ionic/Storage';

/**
 * Generated class for the CreateRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-request',
  templateUrl: 'create-request.html',
})
export class CreateRequestPage {
  storage:Storage;
  request:{
    reqtype:string,
    actype:string,
    reqdesc:string,
    capacity:string,
    date:string,
    clientid:string
  }

    reqtype:string;
    actype:string;
    reqdesc:string;
    capacity:string;
    date:string;
    clientid:string;

  constructor(private datePicker: DatePicker, public navCtrl: NavController, public alertCtrl: AlertController,
              public navParams: NavParams,private requestProvider:RequestProvider,storage:Storage) {
                this.storage = storage;
                this.storage.get('name').then(name=>{
                  this.clientid = name;
                });

    console.log(this.navParams.get('coordinates'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  logRequest(){
    const newRequest={
      reqtype:this.reqtype,
      actype:this.actype,
      reqdesc:this.reqdesc,
      capacity:this.capacity,
      date:this.date,
      location: this.navParams.get('coordinates'),
      address: this.navParams.get('address'),

      clientid:this.clientid

      date: this.date

    }
    console.log(newRequest);
      this.requestProvider.logRequest(newRequest).subscribe((request)=>{
      if(request == 'done'){
        this.requestProvider.showPopup('Success', 'Request Logged Successfully!');
        this.navCtrl.setRoot('OnGoingRequestsPage');
      }
      else{
        this.requestProvider.showPopup('Error', 'Could not Log Request, Please try again!');
      }
      console.log(request);
    });
  }

  datepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => { 
        //let input:any = document.getElementById("date") as HTMLInputElement;
        //input.value = date;
        this.date = date;
        alert(this.date);
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  
}
