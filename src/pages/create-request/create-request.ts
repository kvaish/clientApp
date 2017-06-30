import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { DatePicker } from '@ionic-native/date-picker';

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

  request:{
    reqtype:string,
    phone:number,
    reqdesc:string,
    status:string
  }
  reqtype:string;
  phone:number;
  reqdesc:string;
  status:string;
  date: any;
  constructor(private datePicker: DatePicker, public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,private requestProvider:RequestProvider) {
    console.log(this.navParams.get('coordinates'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  logRequest(){
    const newRequest={
      reqtype:this.reqtype,
      phone:this.phone,
      reqdesc:this.reqdesc,
      status:this.status,
      location: this.navParams.get('coordinates'),
      address: this.navParams.get('address'),
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
