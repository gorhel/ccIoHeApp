(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-title>\n      Affectation des ordinateurs\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div class=\"wrapitem\">\n      <ion-avatar>\n        <img src=\"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png\">\n      </ion-avatar>\n      <ion-label>Bonjour Administrateur</ion-label>\n    </div>\n  </ion-card>\n\n  <ion-toolbar color=\"successs\">\n    <ion-title>Liste des affectations</ion-title>\n  </ion-toolbar>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ng-container *ngIf=\"!affectations || affectations.length == 0\">\n          <div *ngFor=\"let n of [0,1,2, 3]\" padding>\n            <ion-skeleton-text></ion-skeleton-text>\n            <p>\n              <ion-skeleton-text class=\"fake-skeleton\"></ion-skeleton-text>\n            </p>\n          </div>\n        </ng-container>\n\n        <ion-item-sliding *ngFor=\"let item of affectations\">\n          <ion-item>\n            <ion-label>\n              {{item.utilisateur}} {{item.prenom}} - {{ item.ordinateur}}\n              <p>{{ item.heureSelected }}h00</p>\n            </ion-label>\n            <ion-note slot=\"end\" color=\"primary\"></ion-note>\n          </ion-item>\n\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"remove(item)\" color=\"danger\">\n              <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\n              Supprimer\n            </ion-item-option>\n            <ion-item-option button [routerLink]=\"['/affectations', item.id]\" color=\"secondary\">\n              <ion-icon slot=\"top\" name=\"create\"></ion-icon>\n              Modifier\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-toolbar color=\"successs\">\n    <ion-title>Liste des ordinateurs</ion-title>\n  </ion-toolbar>\n\n  <ion-card>\n    <ion-card-content>\n\n      <ion-list>\n        <ng-container *ngIf=\"!ordinateurs || ordinateurs.length == 0\">\n          <div *ngFor=\"let n of [0,1,2, 3]\" padding>\n            <ion-skeleton-text></ion-skeleton-text>\n            <p>\n              <ion-skeleton-text class=\"fake-skeleton\"></ion-skeleton-text>\n            </p>\n          </div>\n        </ng-container>\n\n        <ion-item-sliding *ngFor=\"let item of ordinateurs\">\n          <ion-item>\n            <ion-label>\n              {{item.nomOrdinateur}}\n              <p></p>\n            </ion-label>\n            <ion-note slot=\"end\" color=\"primary\"></ion-note>\n          </ion-item>\n\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"remove(item)\" color=\"danger\">\n              <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\n              Supprimer\n            </ion-item-option>\n            <ion-item-option button [routerLink]=\"['/ordinateurs', item.id]\" color=\"secondary\">\n              <ion-icon slot=\"top\" name=\"create\"></ion-icon>\n              Modifier\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-toolbar color=\"successs\">\n    <ion-title>Liste des Utilisateurs</ion-title>\n  </ion-toolbar>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ng-container *ngIf=\"!utilisateurs || utilisateurs.length == 0\">\n          <div *ngFor=\"let n of [0,1,2, 3]\" padding>\n            <ion-skeleton-text></ion-skeleton-text>\n            <p>\n              <ion-skeleton-text class=\"fake-skeleton\"></ion-skeleton-text>\n            </p>\n          </div>\n        </ng-container>\n\n        <ion-item-sliding *ngFor=\"let item of utilisateurs\">\n          <ion-item>\n            <ion-label>\n              {{item.nom}} {{item.prenom}}\n              <p></p>\n            </ion-label>\n            <ion-note slot=\"end\" color=\"primary\"></ion-note>\n          </ion-item>\n\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"remove(item)\" color=\"danger\">\n              <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\n              Supprimer\n            </ion-item-option>\n            <ion-item-option button [routerLink]=\"['/utilisateurs', item.id]\" color=\"secondary\">\n              <ion-icon slot=\"top\" name=\"create\"></ion-icon>\n              Modifier\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab vertical=\"\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"warning\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button color=\"success\">\n        <ion-icon name=\"person-add\" routerLink=\"/utilisateurs\" routerDirection=\"forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"success\">\n        <ion-icon name=\"desktop\" routerLink=\"/ordinateurs\" routerDirection=\"forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"success\">\n        <ion-icon name=\"clipboard\" routerLink=\"/affectations\" routerDirection=\"forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"
=======
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    The world is your oyster.\n    <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be your guide.</p>\n  </div>\n</ion-content>\n"
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".fake-skeleton {\n  width: 60%; }\n\n.wrapitem {\n  margin: 30px 0;\n  text-align: center; }\n\nion-avatar, .wrapitem ion-label {\n  margin: 15px auto; }\n\nion-fab {\n  bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvaW9uaWMvY2VudHJlQ3VsdHVyZWxBcHAvY2NJb0hlQXBwY29waWUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsVUFBUyxFQUFBOztBQUN4QjtFQUFVLGNBQWM7RUFBQyxrQkFBa0IsRUFBQTs7QUFDM0M7RUFBZ0MsaUJBQWlCLEVBQUE7O0FBQ2pEO0VBQVEsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWtlLXNrZWxldG9ue3dpZHRoOjYwJTt9XG4ud3JhcGl0ZW17bWFyZ2luOiAzMHB4IDA7dGV4dC1hbGlnbjogY2VudGVyO31cbmlvbi1hdmF0YXIsIC53cmFwaXRlbSBpb24tbGFiZWx7bWFyZ2luOiAxNXB4IGF1dG87fVxuaW9uLWZhYntib3R0b206IDEwMHB4O31cbiJdfQ== */"
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
<<<<<<< HEAD
/* harmony import */ var _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/ordinateur.service */ "./src/app/services/ordinateur.service.ts");
/* harmony import */ var _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/utilisateur.service */ "./src/app/services/utilisateur.service.ts");
/* harmony import */ var _services_affectation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/affectation.service */ "./src/app/services/affectation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HomePage = /** @class */ (function () {
    function HomePage(ordinateurService, utilisateurService, affectationService) {
        this.ordinateurService = ordinateurService;
        this.utilisateurService = utilisateurService;
        this.affectationService = affectationService;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.ordinateurService.getOrdinateurs().subscribe(function (res) {
            _this.ordinateurs = res;
        });
        this.utilisateurService.getUtilisateurs().subscribe(function (res) {
            _this.utilisateurs = res;
        });
        this.affectationService.getAffectations().subscribe(function (res) {
            _this.affectations = res;
        });
    };
    HomePage.prototype.remove = function (item) {
        this.ordinateurService.removeOrdinateur(item.id);
        this.utilisateurService.removeUtilisateur(item.id);
        this.affectationService.removeAffectation(item.id);
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_ordinateur_service__WEBPACK_IMPORTED_MODULE_1__["OrdinateurService"] },
        { type: _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__["UtilisateurService"] },
        { type: _services_affectation_service__WEBPACK_IMPORTED_MODULE_3__["AffectationService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
=======
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ordinateur_service__WEBPACK_IMPORTED_MODULE_1__["OrdinateurService"],
            _services_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__["UtilisateurService"],
            _services_affectation_service__WEBPACK_IMPORTED_MODULE_3__["AffectationService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
>>>>>>> c49760ef46177ffb33a83c97a5ae5da53e18a08e
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map