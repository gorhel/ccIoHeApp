(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-utilisateur-details-utilisateur-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/utilisateur-details/utilisateur-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/utilisateur-details/utilisateur-details.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Liste des utilisateurs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list lines=\"full\">\n    <h2>Ajouter</h2>\n    <ion-item>\n      <ion-label>Nom</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"utilisateur.nom\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Prenom</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"utilisateur.prenom\"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"saveUtilisateur()\">Enregistrer</ion-button>\n\n\n</ion-content>\n"
=======
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>utilisateurDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e

/***/ }),

/***/ "./src/app/pages/utilisateur-details/utilisateur-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/utilisateur-details/utilisateur-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: UtilisateurDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurDetailsPageModule", function() { return UtilisateurDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utilisateur_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilisateur-details.page */ "./src/app/pages/utilisateur-details/utilisateur-details.page.ts");







const routes = [
    {
        path: '',
        component: _utilisateur_details_page__WEBPACK_IMPORTED_MODULE_6__["UtilisateurDetailsPage"]
    }
];
let UtilisateurDetailsPageModule = class UtilisateurDetailsPageModule {
};
UtilisateurDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_utilisateur_details_page__WEBPACK_IMPORTED_MODULE_6__["UtilisateurDetailsPage"]]
    })
], UtilisateurDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/utilisateur-details/utilisateur-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/utilisateur-details/utilisateur-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3V0aWxpc2F0ZXVyLWRldGFpbHMvdXRpbGlzYXRldXItZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/utilisateur-details/utilisateur-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/utilisateur-details/utilisateur-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: UtilisateurDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurDetailsPage", function() { return UtilisateurDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
<<<<<<< HEAD
/* harmony import */ var _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/utilisateur.service */ "./src/app/services/utilisateur.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let UtilisateurDetailsPage = class UtilisateurDetailsPage {
    constructor(route, nav, utilisateurService, loadingController) {
        this.route = route;
        this.nav = nav;
        this.utilisateurService = utilisateurService;
        this.loadingController = loadingController;
        this.utilisateur = {
            nom: '',
            prenom: ''
        };
        this.utilisateurId = null;
    }
    ngOnInit() {
        this.utilisateurId = this.route.snapshot.params['id'];
        if (this.utilisateurId) {
            this.loadUtilisateur();
        }
    }
    loadUtilisateur() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Chargement de la liste des utilisateurs'
            });
            yield loading.present();
            this.utilisateurService.getUtilisateur(this.utilisateurId).subscribe(res => {
                loading.dismiss();
                this.utilisateur = res;
            });
        });
    }
    saveUtilisateur() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Sauvegarde ...'
            });
            yield loading.present();
            if (this.utilisateurId) {
                this.utilisateurService.updateUtilisateur(this.utilisateur, this.utilisateurId).then(() => {
                    loading.dismiss();
                    //this.nav.back('home');
                });
            }
            else {
                this.utilisateurService.addUtilisateur(this.utilisateur).then(() => {
                    loading.dismiss();
                    //this.nav.back('home');
                });
            }
        });
    }
};
UtilisateurDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_1__["UtilisateurService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
UtilisateurDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
=======
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilisateurDetailsPage = class UtilisateurDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
UtilisateurDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
        selector: 'app-utilisateur-details',
        template: __webpack_require__(/*! raw-loader!./utilisateur-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/utilisateur-details/utilisateur-details.page.html"),
        styles: [__webpack_require__(/*! ./utilisateur-details.page.scss */ "./src/app/pages/utilisateur-details/utilisateur-details.page.scss")]
    }),
<<<<<<< HEAD
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_1__["UtilisateurService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
=======
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
], UtilisateurDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-utilisateur-details-utilisateur-details-module-es2015.js.map