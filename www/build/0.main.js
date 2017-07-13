webpackJsonp([0],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_history__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__on_going_requests_on_going_requests_module__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHistoryPageModule", function() { return RequestHistoryPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RequestHistoryPageModule = (function () {
    function RequestHistoryPageModule() {
    }
    return RequestHistoryPageModule;
}());
RequestHistoryPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__request_history__["a" /* RequestHistoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_history__["a" /* RequestHistoryPage */]),
            __WEBPACK_IMPORTED_MODULE_3__on_going_requests_on_going_requests_module__["OnGoingRequestsPageModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__request_history__["a" /* RequestHistoryPage */],
        ]
    })
], RequestHistoryPageModule);

//# sourceMappingURL=request-history.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_details_request_details__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestHistoryPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RequestHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequestHistoryPage = (function () {
    function RequestHistoryPage(navCtrl, navParams, requestProvider, alrtCtrl, storage, modalCtrl, geocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestProvider = requestProvider;
        this.alrtCtrl = alrtCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.geocoder = geocoder;
        this.state = 'Inactive';
    }
    RequestHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('name').then(function (name) {
            _this.requestProvider.getRequests(_this.state, name).subscribe(function (requests) {
                _this.requests = requests;
                for (var request in _this.requests) {
                    _this.getLocation(_this.requests[request]);
                }
            });
        });
    };
    RequestHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllRequestPage');
    };
    RequestHistoryPage.prototype.showRequestDetails = function (request) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__request_details_request_details__["a" /* RequestDetailsPage */], { 'request': request });
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
    };
    RequestHistoryPage.prototype.menuOpened = function () {
    };
    RequestHistoryPage.prototype.menuClosed = function () {
    };
    RequestHistoryPage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    /*editRequest(request){
      this.navCtrl.push(ActiveRequestsPage,{
        request:request
      });
    }*/
    RequestHistoryPage.prototype.logout = function () {
        this.storage.clear().then(function () {
            console.log('Keys have been cleared');
        });
        this.navCtrl.parent.parent.setRoot('LoginPage');
    };
    RequestHistoryPage.prototype.getLocation = function (request) {
        this.geocoder.reverseGeocode(request.address.geometry.coordinates.lat, request.address.geometry.coordinates.lng).then(function (res) {
            var msg = '';
            var arr = ['houseNumber', 'street', 'city', 'district', 'postalCode', 'countryName'];
            for (var v in arr) {
                if (res[arr[v]]) {
                    msg += res[arr[v]] + ', ';
                }
            }
            msg = msg.slice(0, -2);
            if (msg.length > 25)
                msg = msg.substring(0, 25) + '...';
            //alert(msg)
            request.addressString = msg;
        });
    };
    return RequestHistoryPage;
}());
RequestHistoryPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-request-history',template:/*ion-inline-start:"D:\clientApp\src\pages\request-history\request-history.html"*/'<!--\n\n  Generated template for the OnGoingRequestsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding>\n\n  <h1>List of All the requests</h1> \n\n  <h4>Filter According to:- {{type}}</h4> <button *ngIf="type != \' \' " ion-button style="float: right;" (click)="refresh()">Clear Filters</button> \n\n  <ion-item>\n\n    <ion-label>Type Of Request</ion-label>\n\n    <ion-select [(ngModel)]="type" name="type" >\n\n      <ion-option>Dry</ion-option>\n\n      <ion-option>Wet</ion-option>\n\n      <button ion-button>Clear Filters</button>\n\n    </ion-select>\n\n  </ion-item><br>\n\n  \n\n    \n\n\n\n<!--<ion-list inset>\n\n<ion-grid>\n\n  <ion-list-header>\n\n  <ion-row >\n\n          <ion-col col-5><ion-title>Request Type</ion-title></ion-col>\n\n          <ion-col><ion-title>Creation Date</div>\n\n          <ion-col col-4><ion-title>Status</ion-title></ion-col>\n\n          <ion-col col-3><ion-title>Details</ion-title></ion-col>\n\n  </ion-row>\n\n  </ion-list-header>\n\n    <ion-row *ngFor="let request of requests | requests : type " text-center>\n\n    \n\n      <ion-col col-5 text-center>{{request.reqtype }}</ion-col>\n\n      <!--<ion-col>{{request.createdate}}</div>\n\n      <ion-col col-4 text-center>{{request.status}}</ion-col>\n\n      <ion-col col-3 text-center>\n\n        <button ion-button icon-only clear (click)="showRequestDetails(request)">\n\n          <ion-icon name="md-more"></ion-icon>\n\n        </button>\n\n        <!--<button ion-button (click)="editRequest(request)">Edit</button>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n</ion-grid>\n\n</ion-list>-->\n\n<!--<ion-card *ngFor="let request of requests  " class="card">\n\n  <header class="card-header">\n\n    <p class="details-header">Request Type:{{request.reqtype }}</p>\n\n  </header>\n\n  <ion-item>\n\n    \n\n    <p style="font-weight: bold;">Created Date:</p><p>{{request.createdate}}</p><br>\n\n    <p style="font-weight: bold;">Date of Service:</p><p>{{request.date}}</p><br> \n\n    <p style="font-weight: bold;">Job Status</p><p>{{request.status}}</p>\n\n    <button ion-button (click)="showRequestDetails(request)">Details</button>\n\n  </ion-item>\n\n</ion-card>-->\n\n<ion-card *ngFor="let request of requests">\n\n\n\n  <img src="file:///android_asset/www/assets/images/map.png">\n\n  <ion-item>\n\n    <ion-icon name="calendar" item-left large ></ion-icon>\n\n    <h2>{{request.date}}</h2>\n\n    <p>{{request.status}}</p>\n\n  </ion-item>\n\n  <ion-item>\n\n    <span item-left>{{request.addressString}}</span>\n\n    <button ion-button icon-left clear item-end (click)="showRequestDetails(request)">\n\n      <ion-icon name="navigate"></ion-icon>\n\n      Track\n\n    </button>\n\n  </ion-item>\n\n\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\clientApp\src\pages\request-history\request-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], RequestHistoryPage);

//# sourceMappingURL=request-history.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map