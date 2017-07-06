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
     this.request = navParams.get('request');
     console.log(this.request);
     this.getLocation();
  }

  getLocation(){
    
    this.geocoder.reverseGeocode(this.request.address.geometry.coordinates.lat,this.request.address.geometry.coordinates.lng).then((res: NativeGeocoderReverseResult) => {
              //let input= document.getElementById("address") as HTMLInputElement;
              let msg = res.houseNumber+', '+ res.street+', '+ res.city+', '+ res.district+', '+ res.countryName;
              this.address= msg;
            });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailsPage');
  }

}
