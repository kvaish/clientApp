webpackJsonp([0,1],{

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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_history__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__on_going_requests_on_going_requests_module__ = __webpack_require__(278);
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__ = __webpack_require__(48);
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
    function OnGoingRequestsPage(navCtrl, navParams, requestProvider, alrtCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestProvider = requestProvider;
        this.alrtCtrl = alrtCtrl;
        this.state = 'Active';
        this.storage = storage;
        this.storage.get('name').then(function (name) {
            console.log(_this.clientid);
            _this.requestProvider.getRequests(_this.state, name).subscribe(function (requests) {
                _this.requests = requests;
            });
        });
    }
    OnGoingRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllRequestPage');
    };
    OnGoingRequestsPage.prototype.showRequestDetails = function (request) {
        var _this = this;
        var alert = this.alrtCtrl.create({
            title: '<div class ="request-title">' + "Request Details" + '</div>',
            subTitle: '<b>' + 'Type: ' + '</b>' + request.reqtype + '<br><br>' +
                '<b>' + 'Description: ' + '</b>' + request.reqdesc + '<br><br>' +
                '<b>' + 'Create Date: ' + '</b>' + request.createdate + '<br><br>' +
                '<b>' + 'Status: ' + '</b>' + request.status + '<br><br>' +
                '<b>' + 'Service Date: ' + '</b>' + request.date,
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
    OnGoingRequestsPage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    return OnGoingRequestsPage;
}());
OnGoingRequestsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-on-going-requests',template:/*ion-inline-start:"C:\Users\svohra\Desktop\fld\clientApp\src\pages\on-going-requests\on-going-requests.html"*/'<!--\n\n  Generated template for the OnGoingRequestsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>On Going Requests</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>List of All the requests</h1> \n\n  <h4>Filter According to:- </h4> <button *ngIf="type != \'\'" ion-button style="float: right;" (click)="refresh()">Clear Filters</button> \n\n  <ion-item>\n\n    <ion-label>Type Of Request</ion-label>\n\n    <ion-select [(ngModel)]="type" name="type" >\n\n      <ion-option>Dry</ion-option>\n\n      <ion-option>Wet</ion-option>\n\n      <button ion-button>Clear Filters</button>\n\n    </ion-select>\n\n  </ion-item><br>\n\n  \n\n    \n\n\n\n<!--<ion-list inset>\n\n<ion-grid>\n\n  <ion-list-header>\n\n  <ion-row >\n\n          <ion-col col-5><ion-title>Request Type</ion-title></ion-col>\n\n          <ion-col><ion-title>Creation Date</div>\n\n          <ion-col col-4><ion-title>Status</ion-title></ion-col>\n\n          <ion-col col-3><ion-title>Details</ion-title></ion-col>\n\n  </ion-row>\n\n  </ion-list-header>\n\n    <ion-row *ngFor="let request of requests | requests : type " text-center>\n\n    \n\n      <ion-col col-5 text-center>{{request.reqtype }}</ion-col>\n\n      <!--<ion-col>{{request.createdate}}</div>\n\n      <ion-col col-4 text-center>{{request.status}}</ion-col>\n\n      <ion-col col-3 text-center>\n\n        <button ion-button icon-only clear (click)="showRequestDetails(request)">\n\n          <ion-icon name="md-more"></ion-icon>\n\n        </button>\n\n        <!--<button ion-button (click)="editRequest(request)">Edit</button>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n</ion-grid>\n\n</ion-list>-->\n\n<ion-card *ngFor="let request of requests | requests : type " class="card">\n\n  <header class="card-header">\n\n    <p class="details-header">Request Type:{{request.reqtype }}</p>\n\n  </header>\n\n  <ion-item>\n\n    \n\n    <h1>Create Date</h1><p>{{request.createdate}}</p>\n\n    <button ion-button (click)="showRequestDetails(request)">Details</button>\n\n  </ion-item>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\svohra\Desktop\fld\clientApp\src\pages\on-going-requests\on-going-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__["b" /* Storage */]])
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

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__ = __webpack_require__(48);
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
    function RequestHistoryPage(navCtrl, navParams, requestProvider, alrtCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestProvider = requestProvider;
        this.alrtCtrl = alrtCtrl;
        this.state = 'Completed';
        this.storage = storage;
        this.storage.get('name').then(function (name) {
            _this.requestProvider.getRequests(_this.state, name).subscribe(function (requests) {
                _this.requests = requests;
            });
        });
    }
    RequestHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllRequestPage');
    };
    RequestHistoryPage.prototype.showRequestDetails = function (request) {
        var _this = this;
        var alert = this.alrtCtrl.create({
            title: '<div class ="request-title">' + "Request Details" + '</div>',
            subTitle: '<b>' + 'Type: ' + '<b>' + request.reqtype + '<br><br>' +
                '<b>' + 'Description: ' + '</b>' + request.reqdesc + '<br><br>' +
                '<b>' + 'Create Date: ' + '</b>' + request.createdate + '<br><br>' +
                '<b>' + 'Status: ' + '</b>' + request.status,
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel'
                },
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
                }
            ]
        });
        alert.present();
    };
    return RequestHistoryPage;
}());
RequestHistoryPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-request-history',template:/*ion-inline-start:"C:\Users\svohra\Desktop\fld\clientApp\src\pages\request-history\request-history.html"*/'<!--\n\n  Generated template for the RequestHistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Request History</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>List of All the requests</h1> \n\n  <p>Filter According to:-</p>\n\n  <label>Type:&nbsp;&nbsp;&nbsp;  </label>\n\n  <input type="text" [(ngModel)]="type" name="type" placeholder="Type of Request"/><br><br>  \n\n\n\n  <div class="row header">\n\n          <div class="col">Request Type</div>\n\n          <!--<div class="col">Creation Date</div>-->\n\n          <div class="col">Status</div>\n\n          <div class="col">Details</div>\n\n  </div>\n\n  <div>\n\n    <div class="row" *ngFor="let request of requests | requests : type ">\n\n    \n\n      <div class="col"><label>{{request.reqtype }}</label></div>\n\n      <!--<div class="col"><label>{{request.createdate}}</label></div>-->\n\n      <div class="col"><label>{{request.status}}</label></div>\n\n      <div class="col">\n\n        <button ion-button (click)="showRequestDetails(request)">Details</button>\n\n        <!--<button ion-button (click)="editRequest(request)">Edit</button>-->\n\n        \n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\svohra\Desktop\fld\clientApp\src\pages\request-history\request-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__["b" /* Storage */]])
], RequestHistoryPage);

//# sourceMappingURL=request-history.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map