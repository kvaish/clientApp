import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { AlertController } from 'ionic-angular';
import {Storage} from '@ionic/Storage';
/**
 * Generated class for the RequestHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-request-history',
  templateUrl: 'request-history.html',
})
export class RequestHistoryPage {
  storage:Storage;
  clientid:string;
  state = 'Completed';
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
      subTitle: '<b>' + 'Type: ' + '<b>' + request.reqtype  + '<br><br>' +
                '<b>' + 'Description: ' +'</b>' + request.reqdesc + '<br><br>' + 
                '<b>' + 'Create Date: ' + '</b>' + request.createdate + '<br><br>' +
                '<b>' + 'Status: ' + '</b>' + request.status,
      buttons:[
        {
          text:'OK',
          role: 'cancel'
        },
        {
          text:'Delete',
          handler:()=>{
            let alert2 = this.alrtCtrl.create({
              title: 'Delete Request!!',
              subTitle: 'Are you sure you want to delete this request ?',
              buttons:[
                {
                  text: 'No',
                  role: 'cancel'
                },
                {
                  text: 'Yes',
                  handler:()=>{
                    this.requestProvider.deleteRequest(request._id).subscribe(success=>{
                      var index = this.requests.indexOf(request,0);
                      if(index > -1){
                        this.requests.splice(index,-1);
                        this.ionViewDidLoad();
                      }
                    });
                  }
                }
              ]
            });
            alert2.present();
          }
        }
      ]
    });
    alert.present();
    
  }

 /*editRequest(request){
   this.navCtrl.push(ActiveRequestsPage,{
     request:request
   });
 }*/
 
}
