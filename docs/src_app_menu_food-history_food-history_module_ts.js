"use strict";
(self["webpackChunkSportMonitoring"] = self["webpackChunkSportMonitoring"] || []).push([["src_app_menu_food-history_food-history_module_ts"],{

/***/ 91528:
/*!******************************************************************!*\
  !*** ./src/app/menu/food-history/food-history-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodHistoryRoutingModule": () => (/* binding */ FoodHistoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _food_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-history.component */ 3734);




const routes = [
    {
        path: '',
        component: _food_history_component__WEBPACK_IMPORTED_MODULE_0__.FoodHistoryComponent
    }
];
let FoodHistoryRoutingModule = class FoodHistoryRoutingModule {
};
FoodHistoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FoodHistoryRoutingModule);



/***/ }),

/***/ 3734:
/*!*************************************************************!*\
  !*** ./src/app/menu/food-history/food-history.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodHistoryComponent": () => (/* binding */ FoodHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Progetti_Ionic_IONIC_SportTracker_node_modules_ngtools_webpack_src_loaders_direct_resource_js_food_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./food-history.component.html */ 20834);
/* harmony import */ var _food_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-history.component.scss */ 10537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);






let FoodHistoryComponent = class FoodHistoryComponent {
    constructor(fb, router) {
        var _a, _b;
        this.fb = fb;
        this.router = router;
        this.units = ['Grams', 'Piece', 'Cup', 'Portion'];
        this.categories = [
            'Fruit',
            'Vegetables',
            'Cereals',
            'Meat',
            'Drinks',
            'Snacks',
            'Other',
        ];
        this.foodForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            calories: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            carbs: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            proteins: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            fats: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            fiber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            sugars: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
            dateTime: [new Date().toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
        // Salva il valore selezionato in choosenUnit
        (_a = this.foodForm.get('unit')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            this.choosenUnit = value;
        });
        // Salva il valore selezionato in choosenCategory
        (_b = this.foodForm.get('category')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((value) => {
            this.choosenCategory = value;
        });
    }
    onSubmit() {
        if (this.foodForm.valid) {
            // Salva i dati o invia al servizio
            console.log(this.foodForm.value);
            // Reset o navigazione
            this.router.navigate(['/menu/homepage']);
        }
    }
};
FoodHistoryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
FoodHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-food-history',
        template: _C_Progetti_Ionic_IONIC_SportTracker_node_modules_ngtools_webpack_src_loaders_direct_resource_js_food_history_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_history_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FoodHistoryComponent);



/***/ }),

/***/ 86592:
/*!**********************************************************!*\
  !*** ./src/app/menu/food-history/food-history.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodHistoryModule": () => (/* binding */ FoodHistoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _food_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-history-routing.module */ 91528);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _food_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-history.component */ 3734);







let FoodHistoryModule = class FoodHistoryModule {
};
FoodHistoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_food_history_component__WEBPACK_IMPORTED_MODULE_1__.FoodHistoryComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _food_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodHistoryRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
    })
], FoodHistoryModule);



/***/ }),

/***/ 20834:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/menu/food-history/food-history.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Register Food</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"food-form-container\">\r\n    <h2>Add Food</h2>\r\n    <form [formGroup]=\"foodForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Food name</ion-label>\r\n        <ion-input formControlName=\"name\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Quantity</ion-label>\r\n        <ion-input\r\n          formControlName=\"quantity\"\r\n          type=\"number\"\r\n          min=\"0\"\r\n          required\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Unit</ion-label>\r\n        <ion-select formControlName=\"unit\" placeholder=\"Unit\">\r\n          <ion-select-option *ngFor=\"let unit of units\" [value]=\"unit\">{{\r\n            unit\r\n          }}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Category</ion-label>\r\n        <ion-select formControlName=\"category\" required>\r\n          <ion-select-option\r\n            *ngFor=\"let category of categories\"\r\n            [value]=\"category\"\r\n            >{{ category }}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Calories (kcal)</ion-label>\r\n        <ion-input\r\n          formControlName=\"calories\"\r\n          type=\"number\"\r\n          min=\"0\"\r\n          required\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Carbohydrates (g)</ion-label>\r\n            <ion-input\r\n              formControlName=\"carbs\"\r\n              type=\"number\"\r\n              min=\"0\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Proteins (g)</ion-label>\r\n            <ion-input\r\n              formControlName=\"proteins\"\r\n              type=\"number\"\r\n              min=\"0\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Fats (g)</ion-label>\r\n            <ion-input formControlName=\"fats\" type=\"number\" min=\"0\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Fiber (g)</ion-label>\r\n            <ion-input\r\n              formControlName=\"fiber\"\r\n              type=\"number\"\r\n              min=\"0\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Sugars (g)</ion-label>\r\n        <ion-input formControlName=\"sugars\" type=\"number\" min=\"0\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Date and time</ion-label>\r\n        <ion-datetime\r\n          formControlName=\"dateTime\"\r\n          display-format=\"DD/MM/YYYY HH:mm\"\r\n        ></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-button\r\n        expand=\"block\"\r\n        type=\"submit\"\r\n        color=\"primary\"\r\n        [disabled]=\"foodForm.invalid\"\r\n        (click)=\"onSubmit()\"\r\n      >\r\n        Save food\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 10537:
/*!***************************************************************!*\
  !*** ./src/app/menu/food-history/food-history.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".food-form-container {\n  padding: 2rem 1rem;\n  max-width: 500px;\n  margin: 0 auto;\n  background: var(--ion-color-light);\n  border-radius: 18px;\n  box-shadow: 0 4px 12px rgba(40, 120, 200, 0.07);\n}\n\nh2 {\n  color: var(--ion-color-primary);\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n  text-align: center;\n}\n\nion-item {\n  margin-bottom: 1rem;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(40, 120, 200, 0.04);\n}\n\nion-button {\n  margin-top: 2rem;\n  font-size: 1.1rem;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZm9vZC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb2QtZm9ybS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNDAsIDEyMCwgMjAwLCAwLjA3KTtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNDAsIDEyMCwgMjAwLCAwLjA0KTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_food-history_food-history_module_ts.js.map