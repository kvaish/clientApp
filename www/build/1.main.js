webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__on_going_requests__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_requests_requests__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnGoingRequestsPageModule", function() { return OnGoingRequestsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnGoingRequestsPageModule = (function () {
    function OnGoingRequestsPageModule() {
    }
    return OnGoingRequestsPageModule;
}());
OnGoingRequestsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__on_going_requests__["a" /* OnGoingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_requests_requests__["a" /* RequestsPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__on_going_requests__["a" /* OnGoingRequestsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__on_going_requests__["a" /* OnGoingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_requests_requests__["a" /* RequestsPipe */]
        ]
    })
], OnGoingRequestsPageModule);

//# sourceMappingURL=on-going-requests.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnGoingRequestsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ActiveRequestsPage } from '../active-requests/active-requests';
//import { RequestsPipe } from '../../pipes/requests/requests';
/**
 * Generated class for the OnGoingRequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OnGoingRequestsPage = (function () {
    function OnGoingRequestsPage(navCtrl, navParams, requestProvider, alrtCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestProvider = requestProvider;
        this.alrtCtrl = alrtCtrl;
        this.state = 'Active';
    }
    OnGoingRequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.requestProvider.getRequests(this.state).subscribe(function (requests) {
            _this.requests = requests;
        });
        console.log('ionViewDidLoad AllRequestPage');
    };
    OnGoingRequestsPage.prototype.showRequestDetails = function (request) {
        var _this = this;
        var alert = this.alrtCtrl.create({
            title: 'Type: ' + request.reqtype + '<br><br>',
            subTitle: '<b>' + 'Description: ' + '</b>' + request.reqdesc + '<br><br>' +
                '<b>' + 'Create Date: ' + '</b>' + request.createdate + '<br><br>' +
                '<b>' + 'Status: ' + '</b>' + request.status + '<br><br>' +
                '<b>' + 'Date of Service: ' + '</b>' + request.date,
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        var alert2 = _this.alrtCtrl.create({
                            title: 'Delete Request!!',
                            subTitle: 'Are you sure you want to delete this request ?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.requestProvider.deleteRequest(request._id).subscribe(function (success) {
                                            var index = _this.requests.indexOf(request, 0);
                                            if (index > -1) {
                                                _this.requests.splice(index, -1);
                                                _this.ionViewDidLoad();
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
                    text: 'OK',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    return OnGoingRequestsPage;
}());
OnGoingRequestsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-on-going-requests',template:/*ion-inline-start:"C:\Users\prog\Desktop\clientApp\src\pages\on-going-requests\on-going-requests.html"*/'<!--\n\n  Generated template for the OnGoingRequestsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>On Going Requests</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>List of All the requests</h1> \n\n  <h4>Filter According to:-</h4>  \n\n  <ion-item>\n\n    <ion-label>Type Of Request</ion-label>\n\n    <ion-select [(ngModel)]="type" name="type" >\n\n      <ion-option>Dry</ion-option>\n\n      <ion-option>Wet</ion-option>\n\n    </ion-select>\n\n  </ion-item><br><br>\n\n<!--<ion-list inset>\n\n<ion-grid>\n\n  <ion-list-header>\n\n  <ion-row >\n\n          <ion-col col-5><ion-title>Request Type</ion-title></ion-col>\n\n          <ion-col><ion-title>Creation Date</div>\n\n          <ion-col col-4><ion-title>Status</ion-title></ion-col>\n\n          <ion-col col-3><ion-title>Details</ion-title></ion-col>\n\n  </ion-row>\n\n  </ion-list-header>\n\n    <ion-row *ngFor="let request of requests | requests : type " text-center>\n\n    \n\n      <ion-col col-5 text-center>{{request.reqtype }}</ion-col>\n\n      <!--<ion-col>{{request.createdate}}</div>\n\n      <ion-col col-4 text-center>{{request.status}}</ion-col>\n\n      <ion-col col-3 text-center>\n\n        <button ion-button icon-only clear (click)="showRequestDetails(request)">\n\n          <ion-icon name="md-more"></ion-icon>\n\n        </button>\n\n        <!--<button ion-button (click)="editRequest(request)">Edit</button>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n</ion-grid>\n\n</ion-list>-->\n\n<ion-card *ngFor="let request of requests | requests : type " class="card">\n\n  <header class="card-header">\n\n    <p class="details-header">Request Type:{{request.reqtype }}</p>\n\n  </header>\n\n  <ion-item>\n\n    \n\n    <h1>Create Date</h1><p>{{request.createdate}}</p>\n\n    <button ion-button (click)="showRequestDetails(request)">Details</button>\n\n  </ion-item>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\prog\Desktop\clientApp\src\pages\on-going-requests\on-going-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */]])
], OnGoingRequestsPage);

//# sourceMappingURL=on-going-requests.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the RequestsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var RequestsPipe = (function () {
    function RequestsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RequestsPipe.prototype.transform = function (requests, type) {
        if (!type) {
            return requests;
        }
        else {
            return requests.filter(function (request) {
                return request.reqtype.toLowerCase().includes(type.toLowerCase());
            });
        }
    };
    return RequestsPipe;
}());
RequestsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({
        name: 'requests'
    })
], RequestsPipe);

//# sourceMappingURL=requests.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map