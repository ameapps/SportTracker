"use strict";
(self["webpackChunkSportMonitoring"] = self["webpackChunkSportMonitoring"] || []).push([["src_app_menu_gallery_gallery_module_ts"],{

/***/ 73522:
/*!********************************************************!*\
  !*** ./src/app/menu/gallery/gallery-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryRoutingModule": () => (/* binding */ GalleryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component */ 29959);




const routes = [
    {
        path: '',
        component: _gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent
    }
];
let GalleryRoutingModule = class GalleryRoutingModule {
};
GalleryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], GalleryRoutingModule);



/***/ }),

/***/ 29959:
/*!***************************************************!*\
  !*** ./src/app/menu/gallery/gallery.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Progetti_Ionic_IONIC_SportTracker_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gallery.component.html */ 79388);
/* harmony import */ var _gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.scss */ 66341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_services_App_Gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/App/Gallery/gallery.service */ 12191);






let GalleryComponent = class GalleryComponent {
    constructor(router, componentService) {
        this.router = router;
        this.componentService = componentService;
        this.folder = 'Gallery';
    }
    ngOnInit() {
        console.info('gallery component initialized');
    }
    // #region methods
    /**Method to scroll the page at the specified element in the page */
    smoothScroll(id) {
        const el = document.getElementById(`gallery-photo-${id}`);
        el.scrollIntoView({ behavior: 'smooth' });
    }
    photoInfo(photoInfo) {
        // Getting the only numbers from the string
        const valid = Number(photoInfo.replace(/\D/g, ''));
        const date = new Date(valid);
        const format = `${date.toLocaleDateString('it-IT')} ${date.toLocaleTimeString('it-IT')}`;
        return format;
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_services_App_Gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__.GalleryService }
];
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gallery',
        template: _C_Progetti_Ionic_IONIC_SportTracker_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GalleryComponent);



/***/ }),

/***/ 96120:
/*!************************************************!*\
  !*** ./src/app/menu/gallery/gallery.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryModule": () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 73522);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component */ 29959);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);






let GalleryModule = class GalleryModule {
};
GalleryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        exports: [_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ]
    })
], GalleryModule);



/***/ }),

/***/ 12191:
/*!*****************************************************!*\
  !*** ./src/services/App/Gallery/gallery.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryService": () => (/* binding */ GalleryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/Enums/DbType */ 70261);
/* harmony import */ var src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/Enums/DbDataType */ 84693);
/* harmony import */ var _Database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Database/database.service */ 30203);





let GalleryService = class GalleryService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.photos = [];
        this.asyncConstructor();
    }
    asyncConstructor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.photos = yield this.getGalleryPhotos(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE);
        });
    }
    /**
     * Method getting the photoes to show in gallery.
     * @returns
     */
    getGalleryPhotos(dbType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let photoes = [];
            switch (dbType) {
                case src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.IONIC_STORAGE:
                    photoes = (yield this.databaseService.getAllItems(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.IONIC_STORAGE, src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__.DbDataType.GALLERY));
                    break;
                case src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE:
                    photoes = (yield this.databaseService.getAllItems(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE, src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__.DbDataType.GALLERY));
                    break;
                default:
                    photoes = (yield this.databaseService.getAllItems(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE, src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__.DbDataType.GALLERY));
                    break;
            }
            return photoes;
        });
    }
};
GalleryService.ctorParameters = () => [
    { type: _Database_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
GalleryService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], GalleryService);



/***/ }),

/***/ 79388:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/menu/gallery/gallery.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Gallery</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"gallery-container\">\r\n    <h2>Your photos</h2>\r\n    <div *ngIf=\"componentService.photos?.length > 0; else emptyGallery\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" sizeMd=\"4\" sizeLg=\"3\" *ngFor=\"let photo of componentService.photos; let i = index\">\r\n            <ion-card class=\"photo-card\">\r\n              <img [src]=\"photo.webviewPath\" [alt]=\"photo.filepath\" (click)=\"smoothScroll(i)\" />\r\n              <ion-card-content>\r\n                <span class=\"photo-name\">{{ photo.filepath }}</span>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ng-template #emptyGallery>\r\n      <div class=\"empty-gallery\">\r\n        <ion-icon name=\"images-outline\" size=\"large\"></ion-icon>\r\n        <p>No photos available.<br>Take or upload a photo to get started!</p>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 66341:
/*!*****************************************************!*\
  !*** ./src/app/menu/gallery/gallery.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".gallery-container {\n  padding: 2rem 1rem;\n  text-align: center;\n  min-height: 100%;\n  background: var(--ion-color-light);\n}\n\nh2 {\n  color: var(--ion-color-primary);\n  font-size: 1.6rem;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n}\n\nion-grid {\n  margin: 0 auto;\n}\n\n.photo-card {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(40, 120, 200, 0.08);\n  cursor: pointer;\n  background: #fff;\n  margin-bottom: 1rem;\n}\n\n.photo-card:hover {\n  transform: scale(1.04);\n  box-shadow: 0 6px 18px rgba(40, 120, 200, 0.15);\n}\n\n.photo-card img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  border-radius: 16px 16px 0 0;\n}\n\n.photo-name {\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 0.95rem;\n  color: var(--ion-color-medium);\n  word-break: break-all;\n}\n\n.empty-gallery {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  color: var(--ion-color-medium);\n}\n\n.empty-gallery ion-icon {\n  font-size: 4rem;\n  color: var(--ion-color-primary);\n  margin-bottom: 1rem;\n}\n\n.empty-gallery p {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5waG90by1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNDAsIDEyMCwgMjAwLCAwLjA4KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucGhvdG8tY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoNDAsIDEyMCwgMjAwLCAwLjE1KTtcclxufVxyXG5cclxuLnBob3RvLWNhcmQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XHJcbn1cclxuXHJcbi5waG90by1uYW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5lbXB0eS1nYWxsZXJ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuLmVtcHR5LWdhbGxlcnkgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5lbXB0eS1nYWxsZXJ5IHAge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_gallery_gallery_module_ts.js.map