(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<!--  <div style=\"text-align:center\" xmlns=\"http://www.w3.org/1999/html\">-->\r\n<!--    <h1 class=\"siteTitle\">-->\r\n<!--      {{ title }}-->\r\n<!--    </h1>-->\r\n<!--  </div>-->\r\n<!--  <div style=\"text-align:center;\">-->\r\n<!--    <button type=\"button\" class=\"btn btn-primary alignButton\">Register Patient</button>-->\r\n<!--  </div>-->\r\n<!--  <div style=\"text-align:center;\">-->\r\n<!--    <a routerLink = \"search\">-->\r\n<!--      <button type=\"button\" class=\"btn btn-primary\">Search Patient</button>-->\r\n<!--    </a>-->\r\n<!--  </div>-->\r\n<!--  <div>-->\r\n<!--    <a routerLink = \"search\">New component</a>-->\r\n<!--  </div>-->\r\n\r\n<!--  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">-->\r\n<!--    &lt;!&ndash; Links &ndash;&gt;-->\r\n<!--    <ul class=\"navbar-nav\">-->\r\n<!--      <li class=\"nav-item\">-->\r\n<!--        <a routerLink=\"register\" class=\"nav-link\">Patient Registration</a>-->\r\n<!--      </li>-->\r\n<!--      <li class=\"nav-item\">-->\r\n<!--        <a routerLink=\"search\" class=\"nav-link\" routerLinkActive=\"active\">Patient Search</a>-->\r\n<!--      </li>-->\r\n<!--    </ul>-->\r\n<!--  </nav>-->\r\n\r\n<!--  <div style=\"text-align:center\" >-->\r\n<!--    <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/patient-image.jpeg\">-->\r\n<!--  </div>-->\r\n<!--  <app-patient-registration></app-patient-registration>-->\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-search/patient-search.component */ "./src/app/patient-search/patient-search.component.ts");
/* harmony import */ var _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-registration/patient-registration.component */ "./src/app/patient-registration/patient-registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _patient_info_print_patient_info_print_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-info-print/patient-info-print.component */ "./src/app/patient-info-print/patient-info-print.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _loader_spin_loader_spin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader-spin/loader-spin.component */ "./src/app/loader-spin/loader-spin.component.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__["PatientSearchComponent"],
                _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_5__["PatientRegistrationComponent"],
                _patient_info_print_patient_info_print_component__WEBPACK_IMPORTED_MODULE_8__["PatientInfoPrintComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__["PagenotfoundComponent"],
                _loader_spin_loader_spin_component__WEBPACK_IMPORTED_MODULE_11__["LoaderSpinComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: 'register',
                        component: _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_5__["PatientRegistrationComponent"]
                    },
                    {
                        path: 'search',
                        component: _patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__["PatientSearchComponent"]
                    },
                    {
                        path: 'print',
                        component: _patient_info_print_patient_info_print_component__WEBPACK_IMPORTED_MODULE_8__["PatientInfoPrintComponent"]
                    },
                    { path: '', redirectTo: '/register', pathMatch: 'full' },
                    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__["PagenotfoundComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loader-spin/loader-spin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/loader-spin/loader-spin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loading{\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyLXNwaW4vbG9hZGVyLXNwaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEM7O0FBSEE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXItc3Bpbi9sb2FkZXItc3Bpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/loader-spin/loader-spin.component.html":
/*!********************************************************!*\
  !*** ./src/app/loader-spin/loader-spin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border\" role=\"status\" >\n    <span class=\"sr-only\" id=\"loading\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader-spin/loader-spin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/loader-spin/loader-spin.component.ts ***!
  \******************************************************/
/*! exports provided: LoaderSpinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderSpinComponent", function() { return LoaderSpinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderSpinComponent = /** @class */ (function () {
    function LoaderSpinComponent() {
    }
    LoaderSpinComponent.prototype.ngOnInit = function () {
    };
    LoaderSpinComponent.prototype.hideLoader = function () {
        document.getElementById('loading')
            .style.display = 'none';
    };
    LoaderSpinComponent.prototype.showLoader = function () {
        document.getElementById('loading')
            .style.display = '';
    };
    LoaderSpinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader-spin',
            template: __webpack_require__(/*! ./loader-spin.component.html */ "./src/app/loader-spin/loader-spin.component.html"),
            styles: [__webpack_require__(/*! ./loader-spin.component.css */ "./src/app/loader-spin/loader-spin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderSpinComponent);
    return LoaderSpinComponent;
}());



/***/ }),

/***/ "./src/app/model/PatientData.ts":
/*!**************************************!*\
  !*** ./src/app/model/PatientData.ts ***!
  \**************************************/
/*! exports provided: PatientData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientData", function() { return PatientData; });
var PatientData = /** @class */ (function () {
    function PatientData() {
    }
    return PatientData;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Page not Found\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/patient-info-print/patient-info-print.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/patient-info-print/patient-info-print.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.firstRow{*/\r\n/*  border-top: 2px solid black;*/\r\n/*  border-left: 2px solid black;*/\r\n/*  border-right: 2px solid black;*/\r\n/*}*/\r\n/*.secondRow{*/\r\n/*  border-style: solid;*/\r\n/*  border-width: 2px;*/\r\n/*}*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1pbmZvLXByaW50L3BhdGllbnQtaW5mby1wcmludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7QUFDYixpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxJQUFJO0FBQ0osY0FBYztBQUNkLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtaW5mby1wcmludC9wYXRpZW50LWluZm8tcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmZpcnN0Um93eyovXHJcbi8qICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7Ki9cclxuLyogIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7Ki9cclxuLyogIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrOyovXHJcbi8qfSovXHJcbi8qLnNlY29uZFJvd3sqL1xyXG4vKiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsqL1xyXG4vKiAgYm9yZGVyLXdpZHRoOiAycHg7Ki9cclxuLyp9Ki9cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/patient-info-print/patient-info-print.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/patient-info-print/patient-info-print.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 25%\">\r\n  <div class=\"container\">\r\n    <div class=\"row firstRow\">\r\n      <div class=\"col-sm-3\">\r\n        <label>Name:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.firstName + \" \" + searchData1.lastName}}\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row firstRow\">\r\n      <div class=\"col-sm-3\">\r\n        <label>Contact:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.contact}}\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-3\">\r\n        <label>Age:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.age}}\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row secondRow\">\r\n      <div class=\"col-sm-3\">\r\n        <label>Height:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.height}}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <label>Weight:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.weight}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-3\">\r\n        <label>Consultant Doctor:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.doctorName}}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <label>Reference Number:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.id}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-3\">\r\n        <label>Gender:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.gender }}\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <label>Visit Date:</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        {{searchData1.updatedAt}}\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/patient-info-print/patient-info-print.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/patient-info-print/patient-info-print.component.ts ***!
  \********************************************************************/
/*! exports provided: PatientInfoPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoPrintComponent", function() { return PatientInfoPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_search_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/search-data-service.service */ "./src/app/service/search-data-service.service.ts");
/* harmony import */ var _model_PatientData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/PatientData */ "./src/app/model/PatientData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientInfoPrintComponent = /** @class */ (function () {
    function PatientInfoPrintComponent(searchDataService) {
        this.searchDataService = searchDataService;
        // this.searchDataService = new SearchDataServiceService();
        this.patientData1 = new _model_PatientData__WEBPACK_IMPORTED_MODULE_2__["PatientData"]();
    }
    PatientInfoPrintComponent.prototype.ngOnInit = function () {
        // this.firstName = this.patientData1.firstName;
        this.getSearch();
    };
    PatientInfoPrintComponent.prototype.getSearch = function () {
        var searchData = this.searchDataService.getSearchData();
        this.searchData1 = searchData;
        // this.firstName = searchData.firstName;
        // this.lastName = searchData.lastName;
        // this.age = searchData.age;
        // this.searchDataService.getSearchData();
        // console.log(this.patientData1);
    };
    PatientInfoPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-info-print',
            template: __webpack_require__(/*! ./patient-info-print.component.html */ "./src/app/patient-info-print/patient-info-print.component.html"),
            styles: [__webpack_require__(/*! ./patient-info-print.component.css */ "./src/app/patient-info-print/patient-info-print.component.css")]
        }),
        __metadata("design:paramtypes", [_service_search_data_service_service__WEBPACK_IMPORTED_MODULE_1__["SearchDataServiceService"]])
    ], PatientInfoPrintComponent);
    return PatientInfoPrintComponent;
}());



/***/ }),

/***/ "./src/app/patient-registration/patient-registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/patient-registration/patient-registration.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=number] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput:invalid {\r\n  border: 2px dashed red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1yZWdpc3RyYXRpb24vcGF0aWVudC1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcmVnaXN0cmF0aW9uL3BhdGllbnQtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlucHV0OmludmFsaWQge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/patient-registration/patient-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/patient-registration/patient-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div style=\"text-align:center\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <h1 class=\"siteTitle\">\r\n      {{ title }}\r\n    </h1>\r\n  </div>\r\n\r\n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\">Patient Registration</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"../search\" class=\"nav-link\" routerLinkActive=\"active\">Patient Search</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div style=\"text-align:center\">\r\n    <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/patient-image.jpeg\">\r\n  </div>\r\n\r\n  <div id=\"loadin\">\r\n    <app-loader-spin></app-loader-spin>\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n    <!--<div  style=\"background-color: mintcream\">-->\r\n    <!--<div style=\"text-align:center\" xmlns=\"http://www.w3.org/1999/html\">-->\r\n    <!--<h1>-->\r\n    <!--{{ title }}!-->\r\n    <!--</h1>-->\r\n    <!--<img width=\"300\" alt=\"Angular Logo\" src=\"../assets/patient-image.jpeg\">-->\r\n    <!--</div>-->\r\n\r\n    <div *ngIf=\"show && processing\"> Registration Completed! Patient Id : {{patientIdCreated}}\r\n      <button (click)=\"addNewPatientAgain()\"> Click here to Add a new Patient</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"error !== '' \">\r\n      <p style=\"color: red\"> {{error}} </p>\r\n    </div>\r\n    <div *ngIf=\"!show && error === '' && !processing\">\r\n      <form [formGroup]=\"patientFormData\" (ngSubmit)=\"onSubmit(patientFormData.value)\" novalidate>\r\n\r\n        <div>\r\n          <label>\r\n           First Name:\r\n\r\n            <input id=\"firstName\" type=\"text\" formControlName=\"firstName\" class=\"form-control\" required=\"\">\r\n\r\n            <div *ngIf=\"patientFormData.controls['firstName'].invalid && (patientFormData.controls['firstName'].dirty\r\n             || patientFormData.controls['firstName'].touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"patientFormData.controls['firstName'].errors.required\">\r\n                First Name is required.\r\n              </div>\r\n            </div>\r\n          </label>\r\n        </div>\r\n        <!--<div *ngIf=\"firstName.errors.required\"> First Name is required</div>-->\r\n        <div>\r\n          <label>\r\n            Last Name:\r\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div></div>\r\n        <div>\r\n          <label>\r\n            Age:\r\n            <input type=\"text\" (keypress)=\"numberOnly($event)\" formControlName=\"age\" required class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            <P>Gender:</P>\r\n            <input type=\"radio\" id=\"male\" formControlName=\"gender\" value=\"male\">\r\n            <label for=\"male\">Male</label><br>\r\n            <input type=\"radio\" id=\"female\" formControlName=\"gender\" value=\"female\">\r\n            <label for=\"female\">Female</label><br>\r\n            <input type=\"radio\" id=\"other\" formControlName=\"gender\" value=\"other\">\r\n            <label for=\"other\">Other</label>\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Address:\r\n            <input type=\"text\" formControlName=\"address\" class=\"form-control\" >\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            City:\r\n            <input type=\"text\" formControlName=\"city\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            State:\r\n            <input type=\"text\" formControlName=\"state\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            ZipCode:\r\n            <input type=\"text\" formControlName=\"zipCode\" (keypress)=\"numberOnly($event)\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Contact:\r\n            <input type=\"text\" formControlName=\"contact\" (keypress)=\"numberOnly($event)\" required class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Emeregency Contact:\r\n            <input type=\"text\" formControlName=\"emergencyContact\" (keypress)=\"numberOnly($event)\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Care of:\r\n            <input type=\"text\" formControlName=\"careOf\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Email:\r\n            <input type=\"email\" formControlName=\"email\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Personal Identification Type:\r\n            <select name=\"personalIdType\" id=\"personalIdType\" formControlName=\"personalIdType\" class=\"form-control\">\r\n              <option value=\"1\">Aadhar Card</option>\r\n              <option value=\"2\">Driving License</option>\r\n              <option value=\"3\">Passport</option>\r\n              <option value=\"4\">Voter Id</option>\r\n              <option value=\"5\">Pan Card</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Personal Identification:\r\n            <input type=\"text\" formControlName=\"personalId\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Weight:\r\n            <input type=\"text\" formControlName=\"weight\" (keypress)=\"numberOnly($event)\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <div>\r\n          <label>\r\n            Height:\r\n            <input type=\"text\" formControlName=\"height\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n\r\n        <div>\r\n          <label>\r\n            Doctor Name:\r\n            <input type=\"text\" formControlName=\"doctorName\" class=\"form-control\">\r\n          </label>\r\n        </div>\r\n\r\n        <!--<div>-->\r\n          <!--<label>-->\r\n            <!--<p> Symptoms: </p>-->\r\n            <!--<textarea type=\"text\" formControlName=\"symptoms\" rows=\"4\" cols=\"50\" class=\"form-control\"></textarea>-->\r\n          <!--</label>-->\r\n        <!--</div>-->\r\n\r\n\r\n        <div>\r\n          <!--<label>-->\r\n            <!--<p> Prescription: </p>-->\r\n            <!--<textarea  formControlName=\"prescription\" rows=\"4\" cols=\"50\" class=\"form-control\"></textarea>-->\r\n          <!--</label>-->\r\n        </div>\r\n\r\n        <!--<div>-->\r\n          <!--<label>-->\r\n            <!--<p> Additional Notes: </p>-->\r\n            <!--<textarea type=\"text\" formControlName=\"additionalNotes\" rows=\"4\" cols=\"50\" class=\"form-control\"></textarea>-->\r\n          <!--</label>-->\r\n        <!--</div>-->\r\n\r\n\r\n        <button type=\"submit\"\r\n                [disabled]=\"patientFormData.pristine || patientFormData.invalid\" class=\"btn btn-success\">\r\n          Submit\r\n        </button>\r\n        <!--<button class=\"button\" type=\"submit\">Submit</button>-->\r\n\r\n      </form>\r\n\r\n      <!--</div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-registration/patient-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/patient-registration/patient-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegistrationComponent", function() { return PatientRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_patient_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/patient-registration.service */ "./src/app/service/patient-registration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientRegistrationComponent = /** @class */ (function () {
    function PatientRegistrationComponent(patientRegistrationService, fb) {
        this.patientRegistrationService = patientRegistrationService;
        this.fb = fb;
        this.show = false;
        this.processing = false;
        this.title = 'Patient Portal';
        this.error = '';
        this.ERRORMESSAGE = 'System is Temporary unavailable, Please Try Again!';
        this.show = false;
        this.processing = false;
        this.createForm();
    }
    PatientRegistrationComponent.prototype.ngOnInit = function () {
        this.hideLoader();
    };
    PatientRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showLoader();
        // TODO: Use EventEmitter with form value
        console.log(this.patientFormData.value);
        this.show = true;
        this.patientRegistrationService.addPatient(this.patientFormData.value)
            .subscribe(function (s) {
            console.log(s);
            _this.patientIdCreated = s;
            _this.error = '';
            _this.processing = true;
            _this.hideLoader();
        }, function (error1) {
            _this.error = _this.ERRORMESSAGE;
            _this.show = false;
            _this.processing = false;
            _this.hideLoader();
        });
        // this.show = true;
    };
    PatientRegistrationComponent.prototype.addNewPatientAgain = function () {
        this.show = false;
    };
    PatientRegistrationComponent.prototype.createForm = function () {
        this.patientFormData = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            emergencyContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            careOf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            personalIdType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            personalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            doctorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            symptoms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            additionalNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    PatientRegistrationComponent.prototype.numberOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    PatientRegistrationComponent.prototype.hideLoader = function () {
        document.getElementById('loadin').style.display = 'none';
    };
    PatientRegistrationComponent.prototype.showLoader = function () {
        document.getElementById('loadin').style.display = '';
    };
    PatientRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-registration',
            template: __webpack_require__(/*! ./patient-registration.component.html */ "./src/app/patient-registration/patient-registration.component.html"),
            styles: [__webpack_require__(/*! ./patient-registration.component.css */ "./src/app/patient-registration/patient-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_service_patient_registration_service__WEBPACK_IMPORTED_MODULE_2__["PatientRegistrationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PatientRegistrationComponent);
    return PatientRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/patient-search/patient-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/patient-search/patient-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtc2VhcmNoL3BhdGllbnQtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-search/patient-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/patient-search/patient-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div style=\"text-align:center\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <h1 class=\"siteTitle\">\r\n      {{ title }}\r\n    </h1>\r\n  </div>\r\n\r\n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"../register\" class=\"nav-link\">Patient Registration</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\">Patient Search</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div style=\"text-align:center\">\r\n    <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/patient-image.jpeg\">\r\n  </div>\r\n\r\n  <div id=\"loadin\">\r\n  <app-loader-spin></app-loader-spin>\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"!processing\">\r\n    <!--<div class=\"row\">-->\r\n      <!--<div class=\"col-sm-2\">-->\r\n        <!--<label for=\"firstName\">First Name:</label>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-sm-3\">-->\r\n        <!--<input type=\"text\" id=\"firstName\">-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-sm-2\">-->\r\n        <!--<label for=\"lastName\">Last name:</label>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-sm-4\">-->\r\n        <!--<input type=\"text\" id=\"lastName\">-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n    <div class=\"row\">\r\n        <label style=\"color: red\"> {{error}}</label>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <label for=\"patientId\">Patient ID:</label>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"text\" [(ngModel)]=\"patientId\" id=\"patientId\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <label for=\"patientId\">First Name:</label>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"text\" [(ngModel)]=\"firstName\" id=\"firstName\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <label for=\"patientId\">Last Name:</label>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"text\" [(ngModel)]=\"lastName\" id=\"lastName\">\r\n      </div>\r\n    </div>\r\n    <!--<div class=\"row\">-->\r\n      <!--<div class=\"col\">-->\r\n        <!--<label>-->\r\n          <!--<input type=\"checkbox\"> Prescribe-->\r\n        <!--</label>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <!--      <a routerLink=\"print\" class=\"nav-link\">-->\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"searchPatientData()\">Search</button>\r\n        <!--      </a>-->\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"container\" >\r\n    <div class=\"row\" *ngIf=\"multiple\">\r\n      <div class=\"col-sm-2\">\r\n        <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n          <thead>\r\n          <tr>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"id\"> Id</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 30%\">\r\n              <mfDefaultSorter by=\"firstName\">First Name</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 30%\">\r\n              <mfDefaultSorter by=\"lastName\">Last Name</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 30%\">\r\n              <mfDefaultSorter by=\"contact\">Contact</mfDefaultSorter>\r\n            </th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of mf.data\">\r\n            <td>{{item.id}}</td>\r\n            <td>{{item.firstName}}</td>\r\n            <td>{{item.lastName}}</td>\r\n            <td>{{item.contact}}</td>\r\n            <td>\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <button (click)=\"printPage(item)\">print</button>\r\n                  </div>\r\n\r\n                  <div class=\"col-6\">\r\n                    <button>history</button>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <button>follow-up</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          </tbody>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"4\">\r\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patient-search/patient-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/patient-search/patient-search.component.ts ***!
  \************************************************************/
/*! exports provided: PatientSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSearchComponent", function() { return PatientSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_search_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/search-data-service.service */ "./src/app/service/search-data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/search.service */ "./src/app/service/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientSearchComponent = /** @class */ (function () {
    // searchDataService: SearchDataServiceService;
    function PatientSearchComponent(router, searchDataService, searchService) {
        this.router = router;
        this.searchDataService = searchDataService;
        this.searchService = searchService;
        this.title = 'Patient Portal';
        this.ERRORMESSAGE = 'System is Temporary unavailable, Please Try Again!';
        this.DATANOTFOUND = 'Data Not Found!';
        this.Mandatory = "One of the below field is mandatory";
        this.processing = false;
        this.multiple = false;
        // this.searchDataService = new SearchDataServiceService();
    }
    PatientSearchComponent.prototype.ngOnInit = function () {
        this.hideLoader();
    };
    // populateSearchData(): PatientData {
    //   this.data.firstName = 'Test Patient First Name';
    //   this.data.lastName = 'Test Patient last Name';
    //   return this.data;
    // }
    PatientSearchComponent.prototype.searchPatientData = function () {
        var _this = this;
        this.data = [];
        this.error = '';
        if ((this.patientId === null || this.patientId === undefined || this.patientId.toString().trim().length === 0) &&
            (this.firstName === null || this.firstName === undefined || this.firstName.trim().length === 0) &&
            (this.lastName === null || this.lastName === undefined || this.lastName.trim().length === 0)) {
            this.error = this.Mandatory;
        }
        else {
            this.showLoader();
            this.processing = true;
            this.multiple = false;
            this.searchService.searchPatient(this.patientId, this.firstName, this.lastName)
                .subscribe(function (data) {
                console.log(data);
                if (data == null) {
                    _this.error = _this.DATANOTFOUND;
                }
                else {
                    for (var i = 0; i < data.length; i++) {
                        _this.data.push(data[i]);
                    }
                    _this.multiple = true;
                }
                _this.processing = false;
                _this.hideLoader();
            }
            // }
            , function (error1) {
                _this.error = _this.ERRORMESSAGE;
                _this.processing = false;
                _this.hideLoader();
            });
        }
    };
    PatientSearchComponent.prototype.hideLoader = function () {
        document.getElementById('loadin').style.display = 'none';
    };
    PatientSearchComponent.prototype.showLoader = function () {
        document.getElementById('loadin').style.display = '';
    };
    PatientSearchComponent.prototype.printPage = function (data) {
        this.searchDataService.setSearchData(data);
        this.hideLoader();
        this.router.navigate(['print']);
    };
    PatientSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-search',
            template: __webpack_require__(/*! ./patient-search.component.html */ "./src/app/patient-search/patient-search.component.html"),
            styles: [__webpack_require__(/*! ./patient-search.component.css */ "./src/app/patient-search/patient-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_search_data_service_service__WEBPACK_IMPORTED_MODULE_1__["SearchDataServiceService"],
            _service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], PatientSearchComponent);
    return PatientSearchComponent;
}());



/***/ }),

/***/ "./src/app/service/patient-registration.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/patient-registration.service.ts ***!
  \*********************************************************/
/*! exports provided: PatientRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegistrationService", function() { return PatientRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientRegistrationService = /** @class */ (function () {
    function PatientRegistrationService(http) {
        this.http = http;
        this.patientApiUrl = '/patient/v1';
    }
    PatientRegistrationService.prototype.addPatient = function (pateint) {
        var url = this.patientApiUrl;
        return this.http.post(url, pateint);
    };
    PatientRegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatientRegistrationService);
    return PatientRegistrationService;
}());



/***/ }),

/***/ "./src/app/service/search-data-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/search-data-service.service.ts ***!
  \********************************************************/
/*! exports provided: SearchDataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDataServiceService", function() { return SearchDataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_PatientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/PatientData */ "./src/app/model/PatientData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchDataServiceService = /** @class */ (function () {
    function SearchDataServiceService() {
        this._searchData = new _model_PatientData__WEBPACK_IMPORTED_MODULE_1__["PatientData"]();
    }
    SearchDataServiceService.prototype.getSearchData = function () {
        return this._searchData;
    };
    SearchDataServiceService.prototype.setSearchData = function (value) {
        this._searchData = value;
    };
    SearchDataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchDataServiceService);
    return SearchDataServiceService;
}());



/***/ }),

/***/ "./src/app/service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.patientApiUrl = '/patient/v1?';
    }
    SearchService.prototype.searchPatient = function (id, firstName, lastName) {
        var url = this.patientApiUrl;
        var len = 0;
        var i;
        var paramValues = ['id=', 'firstName=', 'lastName='];
        for (i = 0; i < arguments.length; i++) {
            if (arguments[i] !== undefined && arguments[i] !== '' && arguments[i] !== null) {
                len++;
                if (len === 0) {
                    url = url + paramValues[i] + arguments[i];
                }
                else if (len > 0) {
                    url = url + '&' + paramValues[i] + arguments[i];
                }
            }
        }
        // if(len === 1){
        //   url = url + paramValues[0]+arguments[0];
        //
        // }
        // if(len === 2){
        //   url = url + paramValues[0] +arguments[0]+ paramValues[1] + arguments[1];
        //
        // }
        // if(len === 3){
        //   url = url +  paramValues[0] +arguments[0]+ paramValues[1] + arguments[1]+ paramValues[2] + arguments[2];
        // }
        console.log(url);
        return this.http.get(url);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\P2855416\Documents\git\personal\patient-portal-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map