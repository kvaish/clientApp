webpackJsonp([5],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_request__ = __webpack_require__(295);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRequestPageModule", function() { return CreateRequestPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateRequestPageModule = (function () {
    function CreateRequestPageModule() {
    }
    return CreateRequestPageModule;
}());
CreateRequestPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_request__["a" /* CreateRequestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_request__["a" /* CreateRequestPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_request__["a" /* CreateRequestPage */]
        ]
    })
], CreateRequestPageModule);

//# sourceMappingURL=create-request.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRequestPage; });
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
 * Generated class for the CreateRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateRequestPage = (function () {
    function CreateRequestPage(app, datePicker, navCtrl, alertCtrl, navParams, requestProvider, storage) {
        var _this = this;
        this.app = app;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.requestProvider = requestProvider;
        this.storage = storage;
        this.storage.get('name').then(function (name) {
            _this.clientid = name;
        });
        console.log(this.navParams.get('coordinates'));
    }
    CreateRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    CreateRequestPage.prototype.logRequest = function () {
        var _this = this;
        if (this.date == 'now') {
            alert('date is now');
            this.date = new Date;
        }
        console.log(this.date);
        var newRequest = {
            reqtype: this.reqtype,
            actype: this.actype,
            reqdesc: this.reqdesc,
            capacity: this.capacity,
            location: this.navParams.get('coordinates'),
            address: this.navParams.get('address'),
            clientid: this.clientid,
            date: this.date
        };
        console.log(newRequest);
        this.requestProvider.logRequest(newRequest).subscribe(function (request) {
            if (request == "done") {
                _this.requestProvider.showPopup('Success', 'Request Logged Successfully!');
                var nav = _this.app.getRootNav();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                nav.push('OnGoingRequestsPage');
                //this.navCtrl.parent.parent.setRoot('OnGoingRequestsPage');
            }
            else {
                _this.requestProvider.showPopup('Error', 'Could not Log Request, Please try again!');
            }
        });
    };
    CreateRequestPage.prototype.datepicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            //let input:any = document.getElementById("date") as HTMLInputElement;
            //input.value = date;
            _this.date = date;
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    return CreateRequestPage;
}());
CreateRequestPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-create-request',template:/*ion-inline-start:"C:\Users\svohra\Desktop\fld\clientApp\src\pages\create-request\create-request.html"*/'<!--\n\n  Generated template for the CreateRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Create Request\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <div *ngIf="request==\'done\'">\n\n    <h1>Request has been logged.</h1>\n\n  </div>\n\n  <div *ngIf="request==\'error\'">\n\n    <h1>There was some error while logging your request.Try again after sometime.</h1>\n\n  </div>\n\n  <ion-card>\n\n   <form (ngSubmit)="logRequest()">\n\n      <!--<ion-item>-->\n\n        <!--<ion-label floating>Type of Service</ion-label>  -->\n\n        <!--<ion-input type="text" required [(ngModel)]="reqtype" name="reqtype" ></ion-input>-->\n\n        <ion-list no-lines radio-group required [(ngModel)]="reqtype" name="reqtype">\n\n          <ion-list-header>\n\n            Type of Service\n\n          </ion-list-header>\n\n          <ion-row>\n\n            <ion-col><ion-item>\n\n              <ion-label>Dry</ion-label>\n\n              <ion-radio checked="true" value="Dry"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col><ion-item>\n\n              <ion-label>Wet</ion-label>\n\n              <ion-radio value="Wet"></ion-radio>\n\n            </ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n\n\n\n\n      <!--</ion-item>-->\n\n      <ion-list no-lines radio-group required [(ngModel)]="actype" name="actype">\n\n          <ion-list-header>\n\n            AC\n\n          </ion-list-header>\n\n          <ion-row>\n\n            <ion-col><ion-item>\n\n              <ion-label>Split</ion-label>\n\n              <ion-radio checked="true" value="Split"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col><ion-item>\n\n              <ion-label>Window</ion-label>\n\n              <ion-radio value="Window"></ion-radio>\n\n            </ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n        \n\n      <ion-item>\n\n        <ion-list-header>\n\n            Type of Service\n\n        </ion-list-header>\n\n        <ion-range min="0" max="2" step="0.5" [(ngModel)]="capacity" name="capacity" color="primary" pin="true">\n\n          <ion-label range-left>0</ion-label>\n\n          <ion-label range-right>2</ion-label>\n\n        </ion-range>\n\n      </ion-item>\n\n      \n\n      <ion-list no-lines radio-group required [(ngModel)]="date" name="date">\n\n          <ion-list-header>\n\n            When?\n\n          </ion-list-header>\n\n          <ion-row>\n\n            <ion-col><ion-item>\n\n              <ion-label>Now</ion-label>\n\n              <ion-radio checked="true" value="now"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col><ion-item>\n\n              <ion-label>Later</ion-label>\n\n              <ion-radio  value="later" (click)="datepicker()" id="date" ></ion-radio>\n\n            </ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n      <!--<ion-item>  \n\n        <ion-icon name="phone-portrait"></ion-icon>\n\n        <ion-label floating>Phone Number</ion-label>\n\n        <ion-input type="text" required [(ngModel)]="phone" name="phone" ></ion-input>\n\n      </ion-item>-->\n\n\n\n      <ion-item>\n\n        <ion-label floating>Remarks</ion-label>\n\n        <ion-textarea [(ngModel)]="reqdesc" name="reqdesc" rows="3" ></ion-textarea>\n\n      </ion-item>\n\n\n\n      <!--<ion-item>\n\n        <ion-label floating>Status</ion-label>\n\n        <ion-select [(ngModel)]="status" name="status">\n\n          <ion-option value="Active">Active</ion-option>\n\n          <ion-option  value="In Progress">In Progress</ion-option>\n\n          <ion-option  value="Completed">Completed</ion-option>\n\n        </ion-select>\n\n      </ion-item>-->\n\n\n\n      <!--<button ion-button type="submit" block>Log Request</button>-->\n\n      <ion-fab right bottom padding>\n\n        <button ion-fab type="submit"><ion-icon name="md-checkmark"></ion-icon></button>\n\n      </ion-fab>\n\n    </form>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\svohra\Desktop\fld\clientApp\src\pages\create-request\create-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */]])
], CreateRequestPage);

//# sourceMappingURL=create-request.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map