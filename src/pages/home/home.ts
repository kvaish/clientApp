import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,IonicPage,MenuController, ViewController, Platform, Nav, AlertController, ToastController,ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker, GoogleMapsAnimation,CameraPosition } from '@ionic-native/google-maps';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AccountsPage } from '../accounts/accounts';
import { SettingsPage } from '../settings/settings';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { Storage } from '@ionic/Storage';
import {Diagnostic} from '@ionic-native/diagnostic'
import { NativeGeocoder, NativeGeocoderReverseResult,NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { LocationAccuracy } from '@ionic-native/location-accuracy';



@IonicPage() 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [
    AutocompletePage,
    
  ]
})
export class HomePage {

  @ViewChild(Nav) navMenu: Nav;
  @ViewChild('map') mapElement: ElementRef;
  onGoingRequestsRoot = 'OnGoingRequestsPage'
  map: GoogleMap;
  
  address: any;
  // addressString: any;
  pages: Array<{title: string, component: any}>
  places = {
      place: ''
    };
  marker: Marker;
  constructor( private viewCtrl: ViewController, private diagnostic: Diagnostic,
               private locationAccuracy: LocationAccuracy, private storage:Storage, 
               private modalCtrl:ModalController, private toaster: ToastController,
               private geocoder: NativeGeocoder, private geolocation: Geolocation, 
               private alertCtrl: AlertController, private splashScreen: SplashScreen,
               private statusBar: StatusBar, private nav: NavController, private auth: AuthServiceProvider,
               private menu: MenuController, private platform: Platform) {}


  ngOnInit() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if(canRequest){
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
             () => {
               //alert('Request successful');
               
            },
        error =>{
            console.error("Request failed");
            if(error){
                // Android only
                console.error("error code="+error.code+"; error message="+error.message);
                if(error.code !== this.locationAccuracy.ERROR_USER_DISAGREED){
                    if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
                        this.diagnostic.switchToLocationSettings();
                    }
                }
            }
        });
      }
    });
    this.loadMap();
    this.pages = [
        { title: 'Update Profile', component: UpdateProfilePage },
        { title: 'Settings', component: SettingsPage },
        { title: 'Account', component: AccountsPage }
      ];
    
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
 
  
  loadMap(){
 
    this.geolocation.getCurrentPosition({enableHighAccuracy:true, timeout: 5000}).then((position) => {
 
      let location = new LatLng(position.coords.latitude, position.coords.longitude);
         //location = new LatLng(-34.9290,138.6010);
        this.address = location;
        this.map = new GoogleMap('map', {
          'center': location,
          'backgroundColor': 'white',
          'disableDefaultUI': true,
          'controls': {
            'compass': true,
            'myLocationButton': true,
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 17,
            'bearing': 50
          }
        });
        //this.map.setClickable(false);
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          /*let markerOptions: MarkerOptions = {
              position: location,
              draggable: true,
              animation: GoogleMapsAnimation.DROP,
              icon: 'file:///android_asset/www/assets/images/icon-green.png',
          };
          
          //this.marker.setVisible(true);
          this.map.addMarker(markerOptions).then((marker: Marker) => {
            this.marker = marker;
            this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((res: NativeGeocoderReverseResult) => {
               
              let msg = [
                res.houseNumber+", " || "",
                res.street+", " || "",
                res.city+", " || "",
                res.district+", " || "",
                res.postalCode+", " || "",
                res.countryName+", " || ""];
              //msg = res.houseNumber+', '+ res.street+', '+ res.city+', '+ res.district+', '+ res.countryName;
              this.places.place = msg;
              //this.addressString = msg;
            });
            marker.addEventListener(GoogleMapsEvent.MARKER_DRAG_END).subscribe(
              data => {
                marker.getPosition().then((LatLng) => {
                  //alert(JSON.stringify(LatLng));
                  this.address = LatLng;
                  this.geocoder.reverseGeocode(LatLng.lat, LatLng.lng).then((res: NativeGeocoderReverseResult) => {
                  let msg = [
                    res.houseNumber+", " || "",
                    res.street+", " || "",
                    res.city+", " || "",
                    res.district+", " || "",
                    res.postalCode+", " || "",
                    res.countryName+", " || ""];
                  alert(msg);
                  this.places.place = msg;
                  //alert(msg);
                });
              });
            });
          });*/

          this.map.addEventListener(GoogleMapsEvent.CAMERA_CHANGE).subscribe(data => {
            this.map.getCameraPosition().then((camera : CameraPosition) => {
              //let x = camera.keys()
              let y = JSON.parse( JSON.stringify( camera.target) );
              
              this.geocoder.reverseGeocode(y.lat, y.lng).then((res: NativeGeocoderReverseResult) => { 
                //alert(JSON.stringify(res));
                let msg = '';
                let arr = [ 'houseNumber', 'street', 'city', 'district', 'postalCode', 'countryName' ];
                for (var v in arr){ 
                  if(res[arr[v]]){
                    msg += res[arr[v]]+', ';
                  }
                }
                msg = msg.slice(0, -2);
                //alert(msg)
                this.places.place = msg;
              });
            })
          })
        });
    }, (err) => {
      console.log('Error '+ err.message);
    });
  }

  
  menuOpened() {
    if(this.map) {
      this.map.setClickable(false);
    }
  }

  menuClosed() {
    if(this.map) {
      this.map.setClickable(true);
    }
  }

  logout(){
    this.storage.clear().then(() => {
      console.log('Keys have been cleared');
    });
    this.nav.parent.parent.setRoot('LoginPage');
    
  }

  createRequest(){
    //console.log(this.address);
    if(this.map) {
      //this.map.setClickable(false);
      this.nav.push('CreateRequestPage',{'coordinates': this.address, 'address': this.places.place})
    }
    
  }

  showAddressModal () {
    //alert('called');
    this.map.setClickable(false);
    let modal = this.modalCtrl.create(AutocompletePage,{search: this.places.place});
    //let me = this;
    modal.onDidDismiss(data => {
      //alert(typeof(data));
      this.places.place = data;
      if(data){
        //alert('if called');
        this.getGeocode(this.places.place);
        this.map.setClickable(true);
      }
    });
    
    modal.present();
    
  }

  getGeocode(data){
    this.geocoder.forwardGeocode(data).then((res: NativeGeocoderForwardResult) => {
      //alert(res);
      this.address = new LatLng(parseFloat(res.latitude), parseFloat(res.longitude));
      
      let position: CameraPosition = {
        target: this.address,
        zoom: 17,
        tilt: 30,
        bearing: 50
      };

      this.map.moveCamera(position);
      //this.map.setClickable(true);
    });
  }
}
