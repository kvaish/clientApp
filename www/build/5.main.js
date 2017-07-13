webpackJsonp([5],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_request__ = __webpack_require__(326);
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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(42);
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
    function CreateRequestPage(app, datePicker, navCtrl, alertCtrl, navParams, requestProvider, storage, element) {
        var _this = this;
        this.app = app;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.requestProvider = requestProvider;
        this.storage = storage;
        this.element = element;
        //this.storage = storage;
        this.storage.get('name').then(function (name) {
            _this.clientid = name;
        });
        console.log(this.navParams.get('coordinates'));
    }
    CreateRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    CreateRequestPage.prototype.ngOnInit = function () {
        this.adjust();
    };
    CreateRequestPage.prototype.logRequest = function () {
        var _this = this;
        if (this.date == 'now' || this.date == 'Now') {
            //alert('date is now');
            this.date = new Date();
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
        //alert(this.date)
        console.log(newRequest);
        this.requestProvider.logRequest(newRequest).subscribe(function (request) {
            if (request == "done") {
                _this.requestProvider.showPopup('Success', 'Request Logged Successfully!');
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                var t = _this.navCtrl.parent;
                t.select(1);
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
    CreateRequestPage.prototype.adjust = function () {
        var ta = this.element.nativeElement.querySelector("textarea");
        if (ta) {
            ta.style.overflow = "hidden";
            ta.style.height = "auto";
            ta.style.height = ta.scrollHeight + "px";
        }
    };
    return CreateRequestPage;
}());
CreateRequestPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-create-request',template:/*ion-inline-start:"D:\clientApp\src\pages\create-request\create-request.html"*/'<!--\n\n  Generated template for the CreateRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Create Request\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="logRequest()" margin>\n\n    <ion-list padding class="outer">\n\n      <ion-item> \n\n        <ion-list class="innerList" radio-group required [(ngModel)]="reqtype" name="reqtype" item-content> <!-- this right here -->\n\n          <h2 >Select Type of Service</h2>\n\n          <ion-row>\n\n            <ion-col><ion-item>\n\n              <ion-label><i class="fa fa-sun-o"></i><p>Dry</p></ion-label>\n\n              <ion-radio  value="Dry"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col><ion-item>\n\n              <ion-label><i class="fa fa-shower"></i><p>Wet</p></ion-label>\n\n              <ion-radio value="Wet"></ion-radio>\n\n            </ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-list class="innerList" radio-group required [(ngModel)]="actype" name="actype" item-content> <!-- this right here -->\n\n          <h2 >AC Type</h2>\n\n          <ion-row>\n\n            <ion-col col-6><ion-item>\n\n              <ion-label><img src="file:///android_asset/www/assets/images/split.png"><p>Split</p></ion-label>\n\n              <ion-radio  value="Split"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col col-6><ion-item>\n\n              <ion-label><img src="file:///android_asset/www/assets/images/window.png"><p>Window</p></ion-label>\n\n              <ion-radio value="Window"></ion-radio>\n\n            </ion-item></ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-list class="innerList"   item-content>\n\n          <h2>Capacity</h2>\n\n          <ion-range min="0" max="8" step="0.5" [(ngModel)]="capacity" name="capacity" color="primary" pin="true">\n\n            <ion-label range-left>0</ion-label>\n\n            <ion-label range-right>8</ion-label>\n\n          </ion-range>\n\n          <!--<ion-row >\n\n            <ion-col col-4 ><ion-item >\n\n              <ion-label>&lt;1<p>Tons</p></ion-label>\n\n              <ion-radio value="<1"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col col-4><ion-item>\n\n              <ion-label>1-2<p>Tons</p></ion-label>\n\n              <ion-radio value="1-2"></ion-radio>\n\n            </ion-item></ion-col>\n\n            <ion-col col-4><ion-item>\n\n              <ion-label>&gt;2<p>Tons</p></ion-label>\n\n              <ion-radio value=">2"></ion-radio>\n\n            </ion-item></ion-col>\n\n          </ion-row>-->\n\n        </ion-list>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-list class="innerList" radio-group required [(ngModel)]="date" name="date" item-content> <!-- this right here -->\n\n          <h2>When?</h2>\n\n          <ion-row>\n\n              <ion-col><ion-item>\n\n                <ion-label><i class="fa fa-sun-o"></i><p>Now</p></ion-label>\n\n                <ion-radio  value="Now"></ion-radio>\n\n              </ion-item></ion-col>\n\n              <ion-col><ion-item>\n\n                <ion-label><i class="fa fa-clock-o"></i><p>Later</p></ion-label>\n\n                <ion-radio value="Later" (click)="datepicker()" id="date"></ion-radio>\n\n              </ion-item></ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-list item-content>\n\n        <h2>Remarks</h2>\n\n        <ion-textarea [(ngModel)]="reqdesc" name="reqdesc" rows="1" id="desc"	ng-keyup="adjust()"	ng-keydown="adjust()"> ></ion-textarea>\n\n        </ion-list>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-list item-content class="last">\n\n          <ion-fab right padding-top>\n\n            <button ion-fab type="submit" ><ion-icon name="md-checkmark"></ion-icon></button>\n\n          </ion-fab>\n\n        </ion-list>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n  </form> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\clientApp\src\pages\create-request\create-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* ElementRef */]])
], CreateRequestPage);

//# sourceMappingURL=create-request.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map