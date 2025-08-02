"use strict";
(self["webpackChunkSportMonitoring"] = self["webpackChunkSportMonitoring"] || []).push([["src_app_menu_homepage_homepage_module_ts"],{

/***/ 87377:
/*!**********************************************************!*\
  !*** ./src/app/menu/homepage/homepage-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageRoutingModule": () => (/* binding */ HomepageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.component */ 91450);




const routes = [
    {
        path: '',
        component: _homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
    }
];
let HomepageRoutingModule = class HomepageRoutingModule {
};
HomepageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomepageRoutingModule);



/***/ }),

/***/ 91450:
/*!*****************************************************!*\
  !*** ./src/app/menu/homepage/homepage.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Progetti_Ionic_IONIC_SportTracker_node_modules_ngtools_webpack_src_loaders_direct_resource_js_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./homepage.component.html */ 47938);
/* harmony import */ var _homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component.scss */ 25256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let HomepageComponent = class HomepageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateTo(path) {
        this.router.navigate([`/menu/${path}`]);
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-homepage',
        template: _C_Progetti_Ionic_IONIC_SportTracker_node_modules_ngtools_webpack_src_loaders_direct_resource_js_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomepageComponent);



/***/ }),

/***/ 42740:
/*!**************************************************!*\
  !*** ./src/app/menu/homepage/homepage.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageModule": () => (/* binding */ HomepageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-routing.module */ 87377);
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component */ 91450);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ 72850);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);







let HomepageModule = class HomepageModule {
};
HomepageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_1__.HomepageComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
        exports: [_homepage_component__WEBPACK_IMPORTED_MODULE_1__.HomepageComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepageRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule // aggiungi questa riga
        ]
    })
], HomepageModule);



/***/ }),

/***/ 47938:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/menu/homepage/homepage.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sport Tracker</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"home-container\">\r\n    <img src=\"assets/icon/favicon.png\" alt=\"Sport Tracker Logo\" class=\"logo\" />\r\n    <h1>Welcome!</h1>\r\n    <p>Track your training sessions, nutrition, and progress.</p>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-card button (click)=\"navigateTo('register-training')\">\r\n            <ion-card-header>\r\n              <ion-icon name=\"barbell-outline\" size=\"large\"></ion-icon>\r\n              <ion-card-title>Register Training</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-card button (click)=\"navigateTo('report')\">\r\n            <ion-card-header>\r\n              <ion-icon name=\"stats-chart-outline\" size=\"large\"></ion-icon>\r\n              <ion-card-title>Report</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-card button (click)=\"navigateTo('food-history')\">\r\n            <ion-card-header>\r\n              <ion-icon name=\"nutrition-outline\" size=\"large\"></ion-icon>\r\n              <ion-card-title>Register Food</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-card button (click)=\"navigateTo('gallery')\">\r\n            <ion-card-header>\r\n              <ion-icon name=\"images-outline\" size=\"large\"></ion-icon>\r\n              <ion-card-title>Gallery</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 25256:
/*!*******************************************************!*\
  !*** ./src/app/menu/homepage/homepage.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".home-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n\n.logo {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 1.5rem;\n}\n\nh1 {\n  font-size: 2.2rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  margin-bottom: 0.5rem;\n}\n\np {\n  font-size: 1.1rem;\n  color: var(--ion-color-medium);\n  margin-bottom: 2rem;\n}\n\nion-card {\n  cursor: pointer;\n  transition: transform 0.2s;\n  border-radius: 18px;\n  box-shadow: 0 4px 12px rgba(40, 120, 200, 0.07);\n  background: var(--ion-color-light);\n}\n\nion-card:hover {\n  transform: scale(1.04);\n  box-shadow: 0 6px 18px rgba(40, 120, 200, 0.12);\n}\n\nion-card-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem 0.5rem;\n}\n\nion-icon {\n  color: var(--ion-color-primary);\n  margin-bottom: 0.5rem;\n  font-size: 2.2rem;\n}\n\nion-card-title {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsK0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogNjRweDsgICAvLyByaWRvdHRvIGRhIDEyMHB4IGEgNjRweFxyXG4gIGhlaWdodDogNjRweDsgIC8vIGFnZ2l1bnRvIHBlciBtYW50ZW5lcmUgcHJvcG9yemlvbmlcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNDAsIDEyMCwgMjAwLCAwLjA3KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG5pb24tY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoNDAsIDEyMCwgMjAwLCAwLjEyKTtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_homepage_homepage_module_ts.js.map