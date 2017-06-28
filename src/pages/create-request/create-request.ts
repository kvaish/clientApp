import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private requestProvider:RequestProvider) {
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
      address: this.navParams.get('address')
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
}
