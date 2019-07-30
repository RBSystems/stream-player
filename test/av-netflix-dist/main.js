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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span class=\"menu-title\">AV Netflix</span>\n    <span class=\"spacing\"></span>\n    <span class=\"user-name\">John Doe</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<app-stream-list></app-stream-list>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-title {\n  font-size: 24px;\n  color: white; }\n\n.user-name {\n  color: white; }\n\n.spacing {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwdzU0Ny9nby9zcmMvZ2l0aHViLmNvbS9ieXVvaXRhdi9zdHJlYW0tcGxheWVyL2F2LW5ldGZsaXgvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwYWNpbmcge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'av-netflix';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_stream_card_stream_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stream-card/stream-card.component */ "./src/app/components/stream-card/stream-card.component.ts");
/* harmony import */ var _components_stream_list_stream_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stream-list/stream-list.component */ "./src/app/components/stream-list/stream-list.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_stream_card_stream_card_component__WEBPACK_IMPORTED_MODULE_7__["StreamCardComponent"], _components_stream_list_stream_list_component__WEBPACK_IMPORTED_MODULE_8__["StreamListComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_stream_card_stream_card_component__WEBPACK_IMPORTED_MODULE_7__["StreamCardComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/stream-card/stream-card.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/stream-card/stream-card.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stream-card-container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>{{ streamInfo.name }}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>{{ streamInfo.address }}</p>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/stream-card/stream-card.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/stream-card/stream-card.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stream-card-container {\n  display: inline-block;\n  margin: 20px;\n  vertical-align: top;\n  width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwdzU0Ny9nby9zcmMvZ2l0aHViLmNvbS9ieXVvaXRhdi9zdHJlYW0tcGxheWVyL2F2LW5ldGZsaXgvc3JjL2FwcC9jb21wb25lbnRzL3N0cmVhbS1jYXJkL3N0cmVhbS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdHJlYW0tY2FyZC9zdHJlYW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJlYW0tY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/stream-card/stream-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/stream-card/stream-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: StreamCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamCardComponent", function() { return StreamCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_stream_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/stream.model */ "./src/app/models/stream.model.ts");



var StreamCardComponent = /** @class */ (function () {
    function StreamCardComponent() {
    }
    StreamCardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_stream_model__WEBPACK_IMPORTED_MODULE_2__["Stream"])
    ], StreamCardComponent.prototype, "streamInfo", void 0);
    StreamCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-stream-card",
            template: __webpack_require__(/*! ./stream-card.component.html */ "./src/app/components/stream-card/stream-card.component.html"),
            styles: [__webpack_require__(/*! ./stream-card.component.scss */ "./src/app/components/stream-card/stream-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StreamCardComponent);
    return StreamCardComponent;
}());



/***/ }),

/***/ "./src/app/components/stream-list/stream-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/stream-list/stream-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stream-list-container\">\n  <app-stream-card\n    *ngFor=\"let streamInfo of streamList\"\n    [streamInfo]=\"streamInfo\"\n  ></app-stream-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/stream-list/stream-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/stream-list/stream-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stream-list-container {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pwdzU0Ny9nby9zcmMvZ2l0aHViLmNvbS9ieXVvaXRhdi9zdHJlYW0tcGxheWVyL2F2LW5ldGZsaXgvc3JjL2FwcC9jb21wb25lbnRzL3N0cmVhbS1saXN0L3N0cmVhbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0cmVhbS1saXN0L3N0cmVhbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmVhbS1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/stream-list/stream-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/stream-list/stream-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: StreamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamListComponent", function() { return StreamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stream_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stream-list.service */ "./src/app/services/stream-list.service.ts");



var StreamListComponent = /** @class */ (function () {
    function StreamListComponent(listService) {
        this.listService = listService;
    }
    StreamListComponent.prototype.ngOnInit = function () {
        this.streamList = this.listService.getStreamList();
    };
    StreamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-stream-list",
            template: __webpack_require__(/*! ./stream-list.component.html */ "./src/app/components/stream-list/stream-list.component.html"),
            styles: [__webpack_require__(/*! ./stream-list.component.scss */ "./src/app/components/stream-list/stream-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stream_list_service__WEBPACK_IMPORTED_MODULE_2__["StreamListService"]])
    ], StreamListComponent);
    return StreamListComponent;
}());



/***/ }),

/***/ "./src/app/models/stream-container.model.js":
/*!**************************************************!*\
  !*** ./src/app/models/stream-container.model.js ***!
  \**************************************************/
/*! exports provided: StreamContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamContainer", function() { return StreamContainer; });
/* harmony import */ var _stream_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stream.model */ "./src/app/models/stream.model.ts");

var StreamContainer = /** @class */ (function () {
    function StreamContainer() {
    }
    StreamContainer.prototype.deserialize = function (input) {
        Object.assign(this, input);
        this.streams = input.streams.map(function (stream) {
            return new _stream_model__WEBPACK_IMPORTED_MODULE_0__["Stream"]().deserialize(stream);
        });
        return this;
    };
    StreamContainer.prototype.getAllStreams = function () {
        return this.streams;
    };
    return StreamContainer;
}());

//# sourceMappingURL=stream-container.model.js.map

/***/ }),

/***/ "./src/app/models/stream.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/stream.model.ts ***!
  \****************************************/
/*! exports provided: Stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return Stream; });
var Stream = /** @class */ (function () {
    function Stream() {
    }
    Stream.prototype.deserialize = function (input) {
        return Object.assign(this, input);
    };
    return Stream;
}());



/***/ }),

/***/ "./src/app/services/stream-list.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/stream-list.service.ts ***!
  \*************************************************/
/*! exports provided: StreamListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamListService", function() { return StreamListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_streams_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/streams.json */ "./src/assets/streams.json");
var src_assets_streams_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/streams.json */ "./src/assets/streams.json", 1);
/* harmony import */ var src_app_models_stream_container_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/stream-container.model.js */ "./src/app/models/stream-container.model.js");




var StreamListService = /** @class */ (function () {
    function StreamListService() {
        this.streams = new src_app_models_stream_container_model_js__WEBPACK_IMPORTED_MODULE_3__["StreamContainer"]().deserialize(src_assets_streams_json__WEBPACK_IMPORTED_MODULE_2__);
    }
    StreamListService.prototype.getStreamList = function () {
        return this.streams.getAllStreams();
    };
    StreamListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StreamListService);
    return StreamListService;
}());



/***/ }),

/***/ "./src/assets/streams.json":
/*!*********************************!*\
  !*** ./src/assets/streams.json ***!
  \*********************************/
/*! exports provided: streams, default */
/***/ (function(module) {

module.exports = {"streams":[{"name":"Stream 1","address":"stream1.address"},{"name":"Stream 2","address":"stream2.address"},{"name":"Stream 3","address":"stream3.address"},{"name":"Stream 4","address":"stream4.address"},{"name":"Stream 5","address":"stream5.address"},{"name":"Stream 6","address":"stream6.address"},{"name":"Stream 7","address":"stream7.address"}]};

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

module.exports = __webpack_require__(/*! /home/jpw547/go/src/github.com/byuoitav/stream-player/av-netflix/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map