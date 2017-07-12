webpackJsonp([3],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tab__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabPageModule", function() { return HomeTabPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CreateRequestPage } from '../create-request/create-request';
var HomeTabPageModule = (function () {
    function HomeTabPageModule() {
    }
    return HomeTabPageModule;
}());
HomeTabPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_tab__["a" /* HomeTabPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_tab__["a" /* HomeTabPage */]),
        ]
    })
], HomeTabPageModule);

//# sourceMappingURL=home-tab.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_profile_update_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_accounts__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabPage; });
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
 * Generated class for the HomeTabPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
var HomeTabPage = (function () {
    function HomeTabPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.homeRoot = 'HomePage';
        this.onGoingRequestsRoot = 'OnGoingRequestsPage';
        this.requestHistoryRoot = 'RequestHistoryPage';
        this.pages = [
            { title: 'Update Profile', component: __WEBPACK_IMPORTED_MODULE_2__update_profile_update_profile__["a" /* UpdateProfilePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */] },
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_3__accounts_accounts__["a" /* AccountsPage */] }
        ];
    }
    HomeTabPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(page.component);
    };
    HomeTabPage.prototype.menuOpened = function () {
    };
    HomeTabPage.prototype.menuClosed = function () {
    };
    HomeTabPage.prototype.logout = function () {
        this.storage.clear().then(function () {
            console.log('Keys have been cleared');
        });
        this.navCtrl.setRoot('LoginPage');
    };
    return HomeTabPage;
}());
HomeTabPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home-tab',template:/*ion-inline-start:"C:\Users\svohra\Desktop\fsm\clientApp\src\pages\home-tab\home-tab.html"*/'\n\n<ion-menu [content]="content" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n\n \n\n<!-- The side menu title -->\n\n  <ion-header>\n\n    <ion-toolbar color="dark">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <!-- remember the `this.pages` object we created in `app.js`?\n\n      // Iterate through, then when clicked, run the associated function\n\n      // passing in the #p <item class=""></item>\n\n      // changed #p to let p instead -->\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n \n\n</ion-menu>\n\n<!-- What\'s my root? remember the this.rootPage?-->\n\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Home Page\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-tabs>\n\n    <ion-tab [root]="homeRoot" tabTitle="Create request" tabIcon="md-add"></ion-tab>\n\n    <ion-tab [root]="onGoingRequestsRoot" tabTitle="On Going Requests" tabIcon="md-sync"></ion-tab>\n\n    <ion-tab [root]="requestHistoryRoot" tabTitle="Request History" tabIcon="md-time"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\svohra\Desktop\fsm\clientApp\src\pages\home-tab\home-tab.html"*/
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__["b" /* Storage */]) === "function" && _b || Object])
], HomeTabPage);

var _a, _b;
//# sourceMappingURL=home-tab.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map