import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,IonicPage,MenuController, Platform, Nav, AlertController, ToastController,ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker, GoogleMapsAnimation,CameraPosition } from '@ionic-native/google-maps';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AccountsPage } from '../accounts/accounts';
import { SettingsPage } from '../settings/settings';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { Storage } from '@ionic/Storage';
import { NativeGeocoder, NativeGeocoderReverseResult,NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { AutocompletePage } from '../autocomplete/autocomplete';


@IonicPage() 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [
    AutocompletePage
  ]
})
export class HomePage {

  @ViewChild(Nav) navMenu: Nav;
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  username = '';
  email = '';
  address: any;
  // addressString: any;
  pages: Array<{title: string, component: any}>

  private storage:Storage;

  constructor(private toaster: ToastController, private geocoder: NativeGeocoder, private geolocation: Geolocation,
              private alertCtrl: AlertController, private splashScreen: SplashScreen, private statusBar: StatusBar,
              private nav: NavController, private auth: AuthServiceProvider, private menu: MenuController,
              private platform: Platform,storage:Storage,private modalCtrl:ModalController,) {
                this.storage  = storage;
              }

  places = {
      place: ''
    };
  marker: Marker;
  


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
          'center': location,
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
        //this.map.setClickable(false);
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          // let markerOptions: MarkerOptions = {
          //     position: location,
          //     draggable: true,
          //     animation: GoogleMapsAnimation.DROP,
          //     icon: 'assets/icon/marker.png'
          // };
          this.marker = new Marker({
            map : this.map,
            position: location,
            icon: '../../assets/images/icon-green.png',
            animation: GoogleMapsAnimation.DROP,
            draggable: true
          });
          
          this.marker.setVisible(true);
          this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((res: NativeGeocoderReverseResult) => {
            //let input= document.getElementById("address") as HTMLInputElement;
            let msg = res.houseNumber+', '+ res.street+', '+ res.city+', '+ res.district+', '+ res.countryName;
            this.places.place = msg;
            //this.addressString = msg;
          });
          this.marker.addEventListener(GoogleMapsEvent.MARKER_DRAG_END).subscribe(
            data => {
              this.marker.getPosition().then((LatLng) => {
                //alert(JSON.stringify(LatLng));
                this.address = LatLng;
                this.geocoder.reverseGeocode(LatLng.lat, LatLng.lng).then((res: NativeGeocoderReverseResult) => {
                //let input= document.getElementById("displayAddress") as HTMLInputElement;
                let msg = res.houseNumber+', '+ res.street+', '+ res.city+', '+ res.district+', '+ res.countryName;
                //input.value = msg;
                this.places.place = msg;
                alert(msg);
              });
             });
          });
        });
    }, (err) => {
      console.log('Error '+ err.message);
    });
  }
  menuOpened(){
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
      this.map.setClickable(false);
      this.nav.push('CreateRequestPage',{'coordinates': this.address, 'address': this.places.place});
    }
    
  }

  showAddressModal () {
    //alert('called');
    //this.map.setClickable(false);
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.places.place = data;
      this.getGeocode(this.places.place);
    });
    
    modal.present();
    
  }

  getGeocode(data){
    this.geocoder.forwardGeocode(data).then((res: NativeGeocoderForwardResult) => {
      //alert(res);
      let point = new LatLng(parseFloat(res.latitude), parseFloat(res.longitude));
      // let markerOptions: any = {
      //         position: point,
      //         draggable: true,
      //         animation: GoogleMapsAnimation.DROP,
      //         icon: 'assets/icon/marker.png'
      //       };
      let position: CameraPosition = {
        target: point,
        zoom: 17,
        tilt: 30,
        bearing: 50
      };

      //this.map.addMarker(markerOptions).then((marker: Marker) => alert('success'));
      this.marker.setPosition(point);
      this.map.moveCamera(position);
      //this.map.setClickable(true);
    });
  }
}
