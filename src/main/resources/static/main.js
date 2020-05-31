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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div style=\"text-align:center\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <h1 class=\"mat-title\">\r\n      {{ title }}\r\n    </h1>\r\n  </div>\r\n<!--  <div style=\"text-align:center;\">-->\r\n<!--    <button type=\"button\" class=\"btn btn-primary alignButton\">Register Patient</button>-->\r\n<!--  </div>-->\r\n<!--  <div style=\"text-align:center;\">-->\r\n<!--    <a routerLink = \"search\">-->\r\n<!--      <button type=\"button\" class=\"btn btn-primary\">Search Patient</button>-->\r\n<!--    </a>-->\r\n<!--  </div>-->\r\n<!--  <div>-->\r\n<!--    <a routerLink = \"search\">New component</a>-->\r\n<!--  </div>-->\r\n\r\n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"register\" class=\"nav-link\">Patient Registration</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"search\" class=\"nav-link\" routerLinkActive=\"active\">Patient Search</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div style=\"text-align:center\" >\r\n    <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/patient-image.jpeg\">\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.title = 'Patient Portal';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
                _patient_info_print_patient_info_print_component__WEBPACK_IMPORTED_MODULE_8__["PatientInfoPrintComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
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
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

/***/ "./src/app/patient-info-print/patient-info-print.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/patient-info-print/patient-info-print.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/patient-info-print/patient-info-print.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/patient-info-print/patient-info-print.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6\">  {{searchData1.firstName}}</div>\r\n  <div class=\"col-4\">{{searchData1.lastName}}</div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-6\">{{searchData1.age}}</div>\r\n  <div class=\"col-2\">{{searchData1.height}}</div>\r\n  <div class=\"col-2\">{{searchData1.weight}}</div>\r\n</div>\r\n"

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
        this.firstName = searchData.firstName;
        this.lastName = searchData.lastName;
        this.age = searchData.age;
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

module.exports = ""

/***/ }),

/***/ "./src/app/patient-registration/patient-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/patient-registration/patient-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  patient-registration works!\r\n</p>\r\n"

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
    function PatientRegistrationComponent() {
    }
    PatientRegistrationComponent.prototype.ngOnInit = function () {
    };
    PatientRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-registration',
            template: __webpack_require__(/*! ./patient-registration.component.html */ "./src/app/patient-registration/patient-registration.component.html"),
            styles: [__webpack_require__(/*! ./patient-registration.component.css */ "./src/app/patient-registration/patient-registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ""

/***/ }),

/***/ "./src/app/patient-search/patient-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/patient-search/patient-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form action=\"/action_page.php\" style=\"text-align:center;\">-->\r\n<!--  <div class=\"form-group\">-->\r\n<!--    <label for=\"firstName\">First Name:</label>-->\r\n<!--    <input type=\"text\" id=\"firstName\">-->\r\n<!--    <label for=\"lastName\">Last name:</label>-->\r\n<!--    <input type=\"text\" id=\"lastName\">-->\r\n<!--    <label for=\"firstName\">Patient ID:</label>-->\r\n<!--    <input type=\"text\" id=\"patientId\">-->\r\n<!--  </div>-->\r\n<!--  <div class=\"checkbox\">-->\r\n<!--    <label><input type=\"checkbox\">Prescribe</label>-->\r\n<!--  </div>-->\r\n<!--  <button type=\"submit\" class=\"btn btn-primary\">Search</button>-->\r\n<!--</form>-->\r\n\r\n<!--<table class=\"table\">-->\r\n<!--  <tbody>-->\r\n<!--  <tr>-->\r\n<!--    <td>-->\r\n<!--      <label for=\"firstName\">First Name:</label>-->\r\n<!--    </td>-->\r\n<!--    <td>-->\r\n<!--      <input type=\"text\" id=\"firstName\">-->\r\n<!--    </td>-->\r\n<!--&lt;!&ndash;  </tr>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <tr>&ndash;&gt;-->\r\n<!--    <td>-->\r\n<!--      <label for=\"lastName\">Last name:</label>-->\r\n<!--    </td>-->\r\n<!--    <td>-->\r\n<!--      <input type=\"text\" id=\"lastName\">-->\r\n<!--    </td>-->\r\n<!--  </tr>-->\r\n<!--  <tr>-->\r\n<!--    <td>-->\r\n<!--      <label for=\"patientId\">Patient ID:</label>-->\r\n<!--    </td>-->\r\n<!--    <td>-->\r\n<!--      <input type=\"text\" id=\"patientId\">-->\r\n<!--    </td>-->\r\n<!--  </tr>-->\r\n<!--  </tbody>-->\r\n<!--</table>-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      <label for=\"firstName\">First Name:</label>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"text\" id=\"firstName\">\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <label for=\"lastName\">Last name:</label>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" id=\"lastName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      <label for=\"patientId\">Patient ID:</label>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <input type=\"text\" id=\"patientId\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <label>\r\n        <input type=\"checkbox\"> Prescribe\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n<!--      <a routerLink=\"print\" class=\"nav-link\">-->\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"searchPatientData()\" >Search</button>\r\n<!--      </a>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _model_PatientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/PatientData */ "./src/app/model/PatientData.ts");
/* harmony import */ var _service_search_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/search-data-service.service */ "./src/app/service/search-data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/search.service */ "./src/app/service/search.service.ts");
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
        this.patientData = new _model_PatientData__WEBPACK_IMPORTED_MODULE_1__["PatientData"]();
        // this.searchDataService = new SearchDataServiceService();
    }
    PatientSearchComponent.prototype.ngOnInit = function () {
    };
    PatientSearchComponent.prototype.populateSearchData = function () {
        this.patientData.firstName = 'Test Patient First Name';
        this.patientData.lastName = 'Test Patient last Name';
        return this.patientData;
    };
    PatientSearchComponent.prototype.searchPatientData = function () {
        var _this = this;
        this.searchService.searchPatient(1)
            .subscribe(function (data) {
            console.log(data);
            _this.patientData = data;
            // this.patientData.firstName = data.firstName;
            // this.patientData.lastName = data.lastName;
            // const patientData2 = this.populateSearchData();
            _this.searchDataService.setSearchData(_this.patientData);
            _this.router.navigate(['print']);
        });
    };
    PatientSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-search',
            template: __webpack_require__(/*! ./patient-search.component.html */ "./src/app/patient-search/patient-search.component.html"),
            styles: [__webpack_require__(/*! ./patient-search.component.css */ "./src/app/patient-search/patient-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_search_data_service_service__WEBPACK_IMPORTED_MODULE_2__["SearchDataServiceService"],
            _service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], PatientSearchComponent);
    return PatientSearchComponent;
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
        this.patientApiUrl = 'http://localhost:11333/patient/v1';
    }
    SearchService.prototype.searchPatient = function (id) {
        var url = this.patientApiUrl + '?id=' + id;
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

module.exports = __webpack_require__(/*! C:\Smita\Personal\PatientPortal\patient-portal-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map