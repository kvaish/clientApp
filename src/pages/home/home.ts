import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,IonicPage,MenuController, Platform, Nav, AlertController, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker, GoogleMapsAnimation } from '@ionic-native/google-maps';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AccountsPage } from '../accounts/accounts';
import { SettingsPage } from '../settings/settings';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Storage } from '@ionic/Storage';

declare var google;

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) navMenu: Nav;
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  username = '';
  email = '';
  address: any;
  addressString: any;
  pages: Array<{title: string, component: any}>
  private storage:Storage;

  constructor(private toaster: ToastController, private geocoder: NativeGeocoder, private geolocation: Geolocation,
              private alertCtrl: AlertController, private splashScreen: SplashScreen, private statusBar: StatusBar,
              private nav: NavController, private auth: AuthServiceProvider, private menu: MenuController,
              private platform: Platform,storage:Storage) {
                this.storage  = storage;
              }

  ngOnInit() {
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
        //let location = new LatLng(-34.9290,138.6010);
        this.address = location;
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
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
        this.map.setClickable(false);
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');           
            let markerOptions: MarkerOptions = {
              position: location,
              draggable: true,
              animation: GoogleMapsAnimation.DROP,
              icon: 'assets/icon/marker.png'
            };
            this.map.addMarker(markerOptions).then(
              (marker: Marker) => {
                marker.showInfoWindow();
                  this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((res: NativeGeocoderReverseResult) => {
                      let input= document.getElementById("address") as HTMLInputElement;
                      let msg = res.houseNumber+', '+ res.street+', '+ res.city+', '+ res.district+', '+ res.countryName;
                      input.value = msg;
                      this.addressString = msg;
                  });
                
                marker.addEventListener(GoogleMapsEvent.MARKER_DRAG_END).subscribe(
                  data => {
                    marker.getPosition().then((LatLng) => {
                    //alert(JSON.stringify(LatLng));
                    this.address = LatLng;
                    this.geocoder.reverseGeocode(LatLng.lat, LatLng.lng).then((res: NativeGeocoderReverseResult) => {
                      let input= document.getElementById("displayAddress") as HTMLInputElement;
                      let msg = res.houseNumber+', '+ res.street+', '+ res.city+', '+ res.district+', '+ res.countryName;
                      input.value = msg;
                      this.addressString = msg;
                      alert(msg);
                    });
                  });
              });
            });
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
    this.nav.setRoot('LoginPage');
    
  }

  createRequest(){
    //console.log(this.address);
    this.nav.push('CreateRequestPage',{'coordinates': this.address, 'address': this.addressString});
  }
}
