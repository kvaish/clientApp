import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult,NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

/**
 * Generated class for the RequestDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-request-details',
  templateUrl: 'request-details.html',
})
export class RequestDetailsPage {
  request:{
    'actype':string,
    'capacity':string,
    'createdate':string,
    'date':string,
    'reqdesc':string,
    'reqtype':string,
    'status':string
    'address':{
      'geometry':{
        'coordinates':{
          lat:number,
          lng:number
        }
      }
    }
  }

  
  address:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geocoder:NativeGeocoder) {
     
     
  }

  ngOnInit(){
    this.request = this.navParams.get('request');
     //console.log(this.request.address.geometry.coordinates.lat);
     this.getLocation();
  }

  getLocation(){
    //alert(JSON.stringify(this.request));
    this.geocoder.reverseGeocode(this.request.address.geometry.coordinates.lat,this.request.address.geometry.coordinates.lng).then((res: NativeGeocoderReverseResult) => {
      let msg ='';
      let arr = [ 'houseNumber', 'street', 'city', 'district', 'postalCode', 'countryName' ];
      for (var v in arr){ 
        if(res[arr[v]]){
           msg += res[arr[v]]+', ';
        }
      }
      msg = msg.slice(0, -2);
      //alert(msg)
      this.address= msg;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailsPage');
  }

}
