webpackJsonp([4],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tab__ = __webpack_require__(291);
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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    function HomeTabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = 'HomePage';
        this.onGoingRequestsRoot = 'OnGoingRequestsPage';
        this.requestHistoryRoot = 'RequestHistoryPage';
    }
    return HomeTabPage;
}());
HomeTabPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home-tab',template:/*ion-inline-start:"C:\Users\prog\Desktop\clientApp\src\pages\home-tab\home-tab.html"*/'<ion-tabs>\n\n    <ion-tab [root]="homeRoot" tabTitle="Create request" tabIcon="md-add"></ion-tab>\n\n    <ion-tab [root]="onGoingRequestsRoot" tabTitle="On Going Requests" tabIcon="md-sync"></ion-tab>\n\n    <ion-tab [root]="requestHistoryRoot" tabTitle="Request History" tabIcon="md-time"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\prog\Desktop\clientApp\src\pages\home-tab\home-tab.html"*/
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomeTabPage);

//# sourceMappingURL=home-tab.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map