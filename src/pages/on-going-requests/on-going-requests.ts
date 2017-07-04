import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { AlertController } from 'ionic-angular';
import {Storage} from '@ionic/Storage';
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
    status:string
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams,private requestProvider:RequestProvider,
              public alrtCtrl:AlertController,storage:Storage) {
                this.storage = storage;
                this.storage.get('name').then(name=>{
                  
                  console.log(this.clientid);
                  this.requestProvider.getRequests(this.state,name).subscribe(requests=>{
                      this.requests=requests;
      
                  });
                  
      });
                
                
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRequestPage');
    
  }

  showRequestDetails(request){

    let alert = this.alrtCtrl.create({
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
    alert.present();
    
  }

  menuOpened(){

  }

  menuClosed(){

  }

  refresh(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
 /*editRequest(request){
   this.navCtrl.push(ActiveRequestsPage,{
     request:request
   });
 }*/
 
}
