webpackJsonp([4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accounts_accounts__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__update_profile_update_profile__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_Storage__ = __webpack_require__(292);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(toaster, geocoder, geolocation, alertCtrl, splashScreen, statusBar, nav, auth, menu, platform, storage) {
        this.toaster = toaster;
        this.geocoder = geocoder;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.nav = nav;
        this.auth = auth;
        this.menu = menu;
        this.platform = platform;
        this.username = '';
        this.email = '';
        this.storage = storage;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadMap();
        this.pages = [
            { title: 'Update Profile', component: __WEBPACK_IMPORTED_MODULE_9__update_profile_update_profile__["a" /* UpdateProfilePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */] },
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_7__accounts_accounts__["a" /* AccountsPage */] }
        ];
    };
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 5000 }).then(function (position) {
            var location = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* LatLng */](position.coords.latitude, position.coords.longitude);
            //let location = new LatLng(-34.9290,138.6010);
            _this.address = location;
            _this.map = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* GoogleMap */]('map', {
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
            _this.map.setClickable(false);
            _this.map.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY).subscribe(function () {
                console.log('Map is ready!');
                var markerOptions = {
                    position: location,
                    draggable: true,
                    animation: __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["e" /* GoogleMapsAnimation */].DROP,
                    icon: 'assets/icon/marker.png'
                };
                _this.map.addMarker(markerOptions).then(function (marker) {
                    marker.showInfoWindow();
                    _this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then(function (res) {
                        var input = document.getElementById("address");
                        var msg = res.houseNumber + ', ' + res.street + ', ' + res.city + ', ' + res.district + ', ' + res.countryName;
                        input.value = msg;
                        _this.addressString = msg;
                    });
                    marker.addEventListener(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MARKER_DRAG_END).subscribe(function (data) {
                        marker.getPosition().then(function (LatLng) {
                            //alert(JSON.stringify(LatLng));
                            _this.address = LatLng;
                            _this.geocoder.reverseGeocode(LatLng.lat, LatLng.lng).then(function (res) {
                                var input = document.getElementById("displayAddress");
                                var msg = res.houseNumber + ', ' + res.street + ', ' + res.city + ', ' + res.district + ', ' + res.countryName;
                                input.value = msg;
                                _this.addressString = msg;
                                alert(msg);
                            });
                        });
                    });
                });
            });
        }, function (err) {
            console.log('Error ' + err.message);
        });
    };
    HomePage.prototype.menuOpened = function () {
        if (this.map) {
            this.map.setClickable(false);
        }
    };
    HomePage.prototype.menuClosed = function () {
        if (this.map) {
            this.map.setClickable(true);
        }
    };
    HomePage.prototype.logout = function () {
        this.storage.clear().then(function () {
            console.log('Keys have been cleared');
        });
        this.nav.setRoot('LoginPage');
    };
    HomePage.prototype.createRequest = function () {
        //console.log(this.address);
        this.nav.push('CreateRequestPage', { 'coordinates': this.address, 'address': this.addressString });
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
], HomePage.prototype, "navMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]) === "function" && _b || Object)
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\svohra\Desktop\clientApp\src\pages\home\home.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n\n \n\n<!-- The side menu title -->\n\n  <ion-header>\n\n    <ion-toolbar color="dark">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <!-- remember the `this.pages` object we created in `app.js`?\n\n      // Iterate through, then when clicked, run the associated function\n\n      // passing in the #p item.\n\n      // changed #p to let p instead -->\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n \n\n</ion-menu>\n\n<!-- What\'s my root? remember the this.rootPage?-->\n\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Home Page\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content class="home">\n\n  <ion-item>\n\n    <ion-input [(ngModel)]="displayAddress" id="displayAdress" type="text" value="" placeholder="Enter Address"></ion-input>\n\n  </ion-item>\n\n \n\n    \n\n    <ion-fab right middle>\n\n      <button ion-fab (click)="createRequest()"><ion-icon name="md-add"></ion-icon></button>\n\n    </ion-fab>\n\n  \n\n  <div #map id="map"></div>  \n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\svohra\Desktop\clientApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_Storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_Storage__["b" /* Storage */]) === "function" && _o || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map