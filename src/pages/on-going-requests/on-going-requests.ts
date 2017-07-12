import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { RequestDetailsPage } from '../request-details/request-details';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';


//import { ActiveRequestsPage } from '../active-requests/active-requests';
//import { RequestsPipe } from '../../pipes/requests/requests';

/**
 * Generated class for the OnGoingRequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-on-going-requests',
  templateUrl: 'on-going-requests.html',
  entryComponents:[
    RequestDetailsPage
  ]
})
export class OnGoingRequestsPage {
  storage:Storage;
  clientid:string;
  state = 'Active';
  createdate:string;
  requests:[{
    reqtype:string,
    phone:number,
    reqdesc:string,
    status:string,
    addressString:string
  }];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private requestProvider:RequestProvider,
              public alrtCtrl:AlertController,storage:Storage,public modalCtrl:ModalController, public geocoder:NativeGeocoder) {

                this.storage = storage;  
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRequestPage');
    
  }

  ionViewWillEnter(){
    this.storage.get('name').then(name=>{
      this.requestProvider.getRequests(this.state,name).subscribe(requests=>{
        this.requests=requests;
        for(var request in this.requests) { 
          this.getLocation(this.requests[request]) 
        }  
      });       
       
    });
    
  }
  showRequestDetails(request){

    let modal = this.modalCtrl.create(RequestDetailsPage,{'request':request});
    modal.present();

    /*let alert = this.alrtCtrl.create({
      title:'<div class ="request-title">' + "Request Details" + '</div>',
      subTitle: '<b>' + 'Type: ' + '</b>' + request.reqtype  + '<br><br>' +
                '<b>' + 'Description: ' +'</b>' + request.reqdesc + '<br><br>' + 
                '<b>' + 'Create Date: ' + '</b>' + request.createdate + '<br><br>' +
                '<b>' + 'Status: ' + '</b>' + request.status + '<br><br>'+
                '<b>' + 'Service Date: ' + '</b>' + request.date  ,
      buttons:[
        {
          text:'Cancel Job',
          handler:()=>{
            let alert2 = this.alrtCtrl.create({
              title: 'Delete Request!!',
              subTitle: 'Are you sure you want to Cancel this Service ?',
              buttons:[
                {
                  text: 'No',
                  role: 'cancel'
                },
                {
                  text: 'Yes',
                  handler:()=>{
                    this.requestProvider.updateRequest(request._id).subscribe(success=>{
                      var index = this.requests.indexOf(request,0);
                      if(index > -1){
                        this.requests.splice(index,-1);
                        this.navCtrl.setRoot(this.navCtrl.getActive().component);
                      }
                    });
                  }
                }
              ]
            });
            alert2.present();
          }
        },
        {
          text:'OK',
          role: 'cancel'
        }
      ]
    });
    alert.present();*/
    
  }

 

  refresh(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
 /*editRequest(request){
   this.navCtrl.push(ActiveRequestsPage,{
     request:request
   });
 }*/

 logout(){
    this.storage.clear().then(() => {
      console.log('Keys have been cleared');
    });
    this.navCtrl.parent.parent.setRoot('LoginPage');
    
  }

  editRequest(request){
    this.requestProvider.updateRequest(request._id, request.state , 'Cancelled').subscribe(success=>{
      var index = this.requests.indexOf(request,0);
      if(index > -1){
        this.requests.splice(index,-1);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }
    });
  }
  getLocation(request){
    
    this.geocoder.reverseGeocode(request.address.geometry.coordinates.lat,request.address.geometry.coordinates.lng).then((res: NativeGeocoderReverseResult) => {
      let msg ='';
      let arr = [ 'houseNumber', 'street', 'city', 'district', 'postalCode', 'countryName' ];
      for (var v in arr){ 
        if(res[arr[v]]){
           msg += res[arr[v]]+', ';
        }
      }
      msg = msg.slice(0, -2);
      if(msg.length > 25)
        msg = msg.substring(0, 25)+'...';
      //alert(msg)
      request.addressString= msg;
    });

  }
 
}
