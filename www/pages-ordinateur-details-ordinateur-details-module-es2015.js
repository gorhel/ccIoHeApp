(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordinateur-details-ordinateur-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordinateur-details/ordinateur-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordinateur-details/ordinateur-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Liste des ordinateurs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <h2>Ajouter</h2>\n    <ion-item>\n      <ion-label>nom ordi</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"ordinateur.nomOrdinateur\"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"saveOrdinateur()\">Enregistrer</ion-button>\n</ion-content>\n"
=======
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ordinateurDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e

/***/ }),

/***/ "./src/app/pages/ordinateur-details/ordinateur-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ordinateur-details/ordinateur-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrdinateurDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinateurDetailsPageModule", function() { return OrdinateurDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordinateur_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordinateur-details.page */ "./src/app/pages/ordinateur-details/ordinateur-details.page.ts");







const routes = [
    {
        path: '',
        component: _ordinateur_details_page__WEBPACK_IMPORTED_MODULE_6__["OrdinateurDetailsPage"]
    }
];
let OrdinateurDetailsPageModule = class OrdinateurDetailsPageModule {
};
OrdinateurDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ordinateur_details_page__WEBPACK_IMPORTED_MODULE_6__["OrdinateurDetailsPage"]]
    })
], OrdinateurDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/ordinateur-details/ordinateur-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ordinateur-details/ordinateur-details.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGluYXRldXItZGV0YWlscy9vcmRpbmF0ZXVyLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ordinateur-details/ordinateur-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ordinateur-details/ordinateur-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: OrdinateurDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinateurDetailsPage", function() { return OrdinateurDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
<<<<<<< HEAD
/* harmony import */ var _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/ordinateur.service */ "./src/app/services/ordinateur.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let OrdinateurDetailsPage = class OrdinateurDetailsPage {
    constructor(route, nav, ordinateurService, loadingController) {
        this.route = route;
        this.nav = nav;
        this.ordinateurService = ordinateurService;
        this.loadingController = loadingController;
        this.ordinateur = {
            nomOrdinateur: ''
        };
        this.ordinateurId = null;
    }
    ngOnInit() {
        this.ordinateurId = this.route.snapshot.params['id'];
        if (this.ordinateurId) {
            this.loadOrdinateur();
        }
    }
    loadOrdinateur() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Chargement de la liste des ordinateurs'
            });
            yield loading.present();
            this.ordinateurService.getOrdinateur(this.ordinateurId).subscribe(res => {
                loading.dismiss();
                this.ordinateur = res;
            });
        });
    }
    saveOrdinateur() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Sauvegarde ...'
            });
            yield loading.present();
            if (this.ordinateurId) {
                this.ordinateurService.updateOrdinateur(this.ordinateur, this.ordinateurId).then(() => {
                    loading.dismiss();
                    //this.nav.back('home');
                });
            }
            else {
                this.ordinateurService.addOrdinateur(this.ordinateur).then(() => {
                    loading.dismiss();
                    //this.nav.back('home');
                });
            }
        });
    }
};
OrdinateurDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_1__["OrdinateurService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
OrdinateurDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
=======
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrdinateurDetailsPage = class OrdinateurDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
OrdinateurDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
        selector: 'app-ordinateur-details',
        template: __webpack_require__(/*! raw-loader!./ordinateur-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordinateur-details/ordinateur-details.page.html"),
        styles: [__webpack_require__(/*! ./ordinateur-details.page.scss */ "./src/app/pages/ordinateur-details/ordinateur-details.page.scss")]
    }),
<<<<<<< HEAD
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_1__["OrdinateurService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
=======
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
], OrdinateurDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-ordinateur-details-ordinateur-details-module-es2015.js.map