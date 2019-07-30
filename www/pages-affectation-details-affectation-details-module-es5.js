(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-affectation-details-affectation-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/affectation-details/affectation-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/affectation-details/affectation-details.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Affectations du {{ todayDate  | date:'d/MM/yy'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n   <ion-item *ngIf=\"!affectation.utilisateur;\">\n\n      <ion-label>utilisateur</ion-label>\n      <ion-select  value=\"brown\" okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"affectation.utilisateur\">\n        <ion-select-option *ngFor=\"let item of utilisateur\" value=\"{{ item.nom }} {{ item.prenom }}\">{{ item.nom }} {{ item.prenom }}</ion-select-option>\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf=\"affectation.utilisateur;\">\n      <ion-label>utilisateur</ion-label>\n      <ion-input required type=\"text\" disabled [(ngModel)]=\"affectation.utilisateur\"></ion-input>\n    </ion-item>\n\n\n    <ion-item *ngIf=\"!affectation.ordinateur;\">\n    <ion-label>Ordinateur</ion-label>\n    <ion-select value=\"brown\" okText=\"Valider\" cancelText=\"Annuler\" [(ngModel)]=\"affectation.ordinateur\">\n      <ion-select-option *ngFor=\"let item of ordinateur\" value=\"{{ item.nomOrdinateur }}\">{{ item.nomOrdinateur }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"affectation.ordinateur;\">\n    <ion-label>utilisateur</ion-label>\n    <ion-input required type=\"text\" disabled [(ngModel)]=\"affectation.ordinateur\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>cliquez pour voir\n      <ion-button size=\"small\" (click)=\"getAffectationsHours();\">les créneaux disponibles</ion-button>\n    </ion-label>\n  </ion-item>\n\n  <ion-radio-group [(ngModel)]=\"affectation.heureSelected\">\n    <ion-list-header>\n\n    </ion-list-header>\n    <ion-item class=\"heures\"  *ngFor=\"let item of affectationSelect\">\n      <ion-label>{{ item }}h00 - {{ item+1 }}h00  </ion-label>\n      <ion-radio slot=\"start\" value=\"{{ item }}\" checked></ion-radio>\n    </ion-item>\n\n  </ion-radio-group>\n</ion-list>\n\n  <ion-button expand=\"full\" (click)=\"saveAffectation()\">Enregistrer</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/affectation-details/affectation-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/affectation-details/affectation-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: AffectationDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectationDetailsPageModule", function() { return AffectationDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _affectation_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./affectation-details.page */ "./src/app/pages/affectation-details/affectation-details.page.ts");







var routes = [
    {
        path: '',
        component: _affectation_details_page__WEBPACK_IMPORTED_MODULE_6__["AffectationDetailsPage"]
    }
];
var AffectationDetailsPageModule = /** @class */ (function () {
    function AffectationDetailsPageModule() {
    }
    AffectationDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_affectation_details_page__WEBPACK_IMPORTED_MODULE_6__["AffectationDetailsPage"]]
        })
    ], AffectationDetailsPageModule);
    return AffectationDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/affectation-details/affectation-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/affectation-details/affectation-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FmZmVjdGF0aW9uLWRldGFpbHMvYWZmZWN0YXRpb24tZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/affectation-details/affectation-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/affectation-details/affectation-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: AffectationDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectationDetailsPage", function() { return AffectationDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_affectation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/affectation.service */ "./src/app/services/affectation.service.ts");
/* harmony import */ var _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/ordinateur.service */ "./src/app/services/ordinateur.service.ts");
/* harmony import */ var _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/utilisateur.service */ "./src/app/services/utilisateur.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var AffectationDetailsPage = /** @class */ (function () {
    function AffectationDetailsPage(route, nav, affectationService, ordinateurService, utilisateurService, loadingController) {
        this.route = route;
        this.nav = nav;
        this.affectationService = affectationService;
        this.ordinateurService = ordinateurService;
        this.utilisateurService = utilisateurService;
        this.loadingController = loadingController;
        this.affectation = {
            utilisateur: '',
            ordinateur: '',
            heureSelected: ''
        };
        this.affectationId = null;
        this.affectationSelect = [7, 8, 9, 10, 11, 14, 15, 16, 17];
        this.emptyHours = [];
        this.todayDate = new Date().getTime();
    }
    AffectationDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.affectationId = this.route.snapshot.params['id'];
        if (this.affectationId) {
            this.loadAffectation();
        }
        this.ordinateurService.getOrdinateurs().subscribe(function (res) {
            _this.ordinateur = res;
        });
        this.utilisateurService.getUtilisateurs().subscribe(function (res) {
            _this.utilisateur = res;
        });
        this.affectationService.getAffectations().subscribe(function (res) {
            _this.affectations = res;
        });
    };
    AffectationDetailsPage.prototype.loadAffectation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Chargement de la liste des affectations'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.affectationService.getAffectationsHours();
                        this.affectationService.getAffectation(this.affectationId).subscribe(function (res) {
                            loading.dismiss();
                            _this.affectation = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AffectationDetailsPage.prototype.saveAffectation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Sauvegarde ...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.affectationId) {
                            this.affectationService.updateAffectation(this.affectation, this.affectationId).then(function () {
                                loading.dismiss();
                                //this.nav.back('home');
                            });
                        }
                        else {
                            this.affectationService.addAffectation(this.affectation).then(function () {
                                loading.dismiss();
                                //this.nav.back('homePage');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AffectationDetailsPage.prototype.getAffectationsHours = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, emptyHours;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                emptyHours = [];
                console.log("this.emptyHours", this.emptyHours, "emptyHours", emptyHours);
                //heures affectées
                this.affectations.forEach(function (value) {
                    //console.log("this.emptyHours", this.emptyHours,"emptyHours", emptyHours, "--",value.heureSelected);
                    emptyHours.push(parseInt(value.heureSelected));
                });
                //console.log("this.emptyHours", this.emptyHours,"emptyHours", emptyHours);
                //  const emptyHours = this.affectation.heureSelected;
                //savoir si emptyHours existe dans affectationSelect
                console.log("Heures d ouverture avant splice", this.affectationSelect);
                for (i = 0; i < emptyHours.length; i++) {
                    if (this.affectationSelect.indexOf(emptyHours[i])) {
                        this.affectationSelect.splice(this.affectationSelect.indexOf(emptyHours[i]), 1);
                    }
                }
                console.log("Heures d ouverture après splice", this.affectationSelect);
                console.log("les heures bookées", emptyHours);
                return [2 /*return*/, this.affectationSelect];
            });
        });
    };
    AffectationDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _services_affectation_service__WEBPACK_IMPORTED_MODULE_1__["AffectationService"] },
        { type: _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_2__["OrdinateurService"] },
        { type: _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_3__["UtilisateurService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
    ]; };
    AffectationDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-affectation-details',
            template: __webpack_require__(/*! raw-loader!./affectation-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/affectation-details/affectation-details.page.html"),
            styles: [__webpack_require__(/*! ./affectation-details.page.scss */ "./src/app/pages/affectation-details/affectation-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _services_affectation_service__WEBPACK_IMPORTED_MODULE_1__["AffectationService"],
            _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_2__["OrdinateurService"],
            _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_3__["UtilisateurService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], AffectationDetailsPage);
    return AffectationDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-affectation-details-affectation-details-module-es5.js.map