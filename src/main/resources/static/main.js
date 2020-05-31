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

module.exports = "input[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n}\n\ninput[type=number] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div  style=\"background-color: mintcream\">\n<div style=\"text-align:center\" xmlns=\"http://www.w3.org/1999/html\">\n  <h1>\n   {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/patient-image.jpeg\">\n</div>\n\n<form [formGroup]=\"patientFormData\"  (ngSubmit)=\"onSubmit(patientFormData.value)\">\n\n  <div>\n    <label>\n      First Name:\n      <input type=\"text\" formControlName=\"firstName\">\n    </label>\n  </div>\n  <div></div>\n  <div>\n    <label>\n      Last Name:\n      <input type=\"text\" formControlName=\"lastName\">\n    </label>\n  </div>\n\n  <div></div>\n  <div>\n    <label>\n      Age:\n      <input type=\"number\" formControlName=\"age\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Address:\n      <input type=\"text\" formControlName=\"age\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      City:\n      <input type=\"text\" formControlName=\"city\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      State:\n      <input type=\"text\" formControlName=\"state\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      zipCode:\n      <input type=\"number\" formControlName=\"zipCode\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Contact:\n      <input type=\"number\" formControlName=\"contact\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Emeregency Contact:\n      <input type=\"number\" formControlName=\"emergencyContact\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Care of:\n      <input type=\"text\" formControlName=\"careOf\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Email:\n      <input type=\"text\" formControlName=\"email\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Wieght:\n      <input type=\"number\" formControlName=\"weight\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Height:\n      <input type=\"text\" formControlName=\"height\">\n    </label>\n  </div>\n\n\n\n\n  <div>\n    <label>\n      Symptoms:\n      <input type=\"text\" formControlName=\"symptoms\">\n    </label>\n  </div>\n\n\n  <div>\n    <label>\n      Prescription:\n      <input type=\"text\" formControlName=\"prescription\">\n    </label>\n  </div>\n\n  <div>\n    <label>\n      Additional Notes:\n      <input type=\"text\" formControlName=\"additonalNotes\">\n    </label>\n  </div>\n\n\n\n  <button class=\"button\" type=\"submit\">Submit</button>\n\n</form>\n\n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Patient Portal';
        this.patientFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            emergencyContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            careOf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            symptoms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            additonalNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    AppComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.patientFormData.value);
    };
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
                _patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_4__["PatientSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<p>\n  Patient-Search\n</p>\n\n\n<div>\n  <label>\n    First Name : {{firstName}}\n  </label>\n</div>\n<div>\n  <label>\n    Last Name : {{lastName}}\n  </label>\n</div>\n\n<div></div>\n<div>\n  <label>\n    Age : {{age}}\n\n  </label>\n</div>\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Address:-->\n    <!--<input type=\"text\" formControlName=\"age\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--City:-->\n    <!--<input type=\"text\" formControlName=\"city\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--State:-->\n    <!--<input type=\"text\" formControlName=\"state\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--zipCode:-->\n    <!--<input type=\"number\" formControlName=\"zipCode\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Contact:-->\n    <!--<input type=\"number\" formControlName=\"contact\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Emeregency Contact:-->\n    <!--<input type=\"number\" formControlName=\"emergencyContact\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Care of:-->\n    <!--<input type=\"text\" formControlName=\"careOf\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Email:-->\n    <!--<input type=\"text\" formControlName=\"email\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Wieght:-->\n    <!--<input type=\"number\" formControlName=\"weight\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Height:-->\n    <!--<input type=\"text\" formControlName=\"height\">-->\n  <!--</label>-->\n<!--</div>-->\n\n\n\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Symptoms:-->\n    <!--<input type=\"text\" formControlName=\"symptoms\">-->\n  <!--</label>-->\n<!--</div>-->\n\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Prescription:-->\n    <!--<input type=\"text\" formControlName=\"prescription\">-->\n  <!--</label>-->\n<!--</div>-->\n\n<!--<div>-->\n  <!--<label>-->\n    <!--Additional Notes:-->\n    <!--<input type=\"text\" formControlName=\"additonalNotes\">-->\n  <!--</label>-->\n<!--</div>-->\n"

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
    function PatientSearchComponent() {
    }
    PatientSearchComponent.prototype.ngOnInit = function () {
    };
    PatientSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-search',
            template: __webpack_require__(/*! ./patient-search.component.html */ "./src/app/patient-search/patient-search.component.html"),
            styles: [__webpack_require__(/*! ./patient-search.component.css */ "./src/app/patient-search/patient-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientSearchComponent);
    return PatientSearchComponent;
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

module.exports = __webpack_require__(/*! /home/smita/SmitaWorkspace/myProjects/patient-portal-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map