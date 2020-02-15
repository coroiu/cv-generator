(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-monaco-editor class=\"editor\" [options]=\"editorOptions\" [ngModel]=\"resume\" (ngModelChange)=\"save($event)\"></ngx-monaco-editor>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/avatar/avatar.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/avatar/avatar.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<img *ngIf=\"usePicture\" [src]=\"picture\">\n<img *ngIf=\"useGravatar\" ngxGravatar [email]=\"email\">");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/award/award.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/award/award.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"award.title\" class=\"title\">{{award.title}}</div>\n<div *ngIf=\"award.date\" class=\"date\">{{award.date}}</div>\n<div *ngIf=\"award.awarder\" class=\"awarder\">{{award.awarder}}</div>\n<div *ngIf=\"award.summary\" class=\"summary\">{{award.summary}}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/course/course.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/course/course.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"course.name\" class=\"name\">{{course.name}}</div>\n<div *ngIf=\"course.institution\" class=\"institution\">{{course.institution}}</div>\n\n<div *ngIf=\"course.highlights\" class=\"highlights\">\n  <div *ngFor=\"let highlight of course.highlights\" class=\"highlight\">{{highlight}}</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/education/education.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/education/education.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"education.institution\" class=\"institution\">{{education.institution}}</div>\n<div *ngIf=\"education.area\" class=\"area\">{{education.area}}</div>\n<div *ngIf=\"education.studyType\" class=\"study-type\">{{education.studyType}}</div>\n<div *ngIf=\"education.startDate && education.endDate\" class=\"duration\">\n  <div *ngIf=\"education.startDate\" class=\"start-date\">{{education.startDate}}</div>\n  <div *ngIf=\"education.endDate\" class=\"end-date\">{{education.endDate}}</div>\n</div>\n<div *ngIf=\"education.gpa\" class=\"gpa\">{{education.gpa}}</div>\n\n<div *ngIf=\"education.courses\" class=\"courses\">\n  <div *ngFor=\"let course of education.courses\" class=\"course\">{{course}}</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/interest/interest.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/interest/interest.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"interest.name\" class=\"name\">{{interest.name}}</div>\n<div *ngIf=\"interest.keywords\" class=\"keywords\">\n  <div *ngFor=\"let keyword of interest.keywords\" class=\"keyword\">{{keyword}}</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/language/language.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/language/language.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"language.language\" class=\"language\">{{language.language}}</div>\n<div *ngIf=\"language.fluency\" [ngClass]=\"fluencyClasses\">\n  <span class=\"label\">{{language.fluency}}</span>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/location/location.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/location/location.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<address>\n  <div *ngIf=\"location.address\" class=\"address\">{{location.address}}</div>\n  <div *ngIf=\"location.city\" class=\"city\">{{location.city}}</div>\n  <div *ngIf=\"location.region\" class=\"region\">{{location.region}}</div>\n  <div *ngIf=\"location.postalCode\" class=\"postalCode\">{{location.postalCode}}</div>\n  <div *ngIf=\"location.countryCode\" class=\"countryCode\">{{location.countryCode}}</div>\n</address>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/other/other.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/other/other.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"other\" class=\"other\" [innerHTML]=\"other\"></div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/profile/profile.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/profile/profile.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a [href]=\"profile.url\">\n  <div class=\"username\">{{profile.username}}</div>\n</a>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/project/project.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/project/project.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"project.url\">\n  <a [href]=\"project.url\" class=\"name\">\n    <div *ngIf=\"project.name\">{{project.name}}</div>\n  </a>\n</ng-container>\n<ng-container *ngIf=\"!project.url\">\n  <div *ngIf=\"project.name\" class=\"name\">{{project.name}}</div>\n</ng-container>\n\n<div *ngIf=\"project.description\" class=\"description\">{{project.description}}</div>\n\n<div *ngIf=\"project.startDate && project.endDate\" class=\"duration\">\n  <div *ngIf=\"project.startDate\" class=\"start-date\">{{project.startDate}}</div>\n  <div *ngIf=\"project.endDate\" class=\"end-date\">{{project.endDate}}</div>\n</div>\n\n<div *ngIf=\"project.entity\" class=\"entity\">{{project.entity}}</div>\n<div *ngIf=\"project.type\" class=\"type\">{{project.type}}</div>\n\n<div *ngIf=\"project.highlights\" class=\"highlights\">\n  <div *ngFor=\"let highlight of project.highlights\" class=\"highlight\">{{highlight}}</div>\n</div>\n\n<div *ngIf=\"project.keywords\" class=\"keywords\">\n  <div *ngFor=\"let keyword of project.keywords\" class=\"keyword\">{{keyword}}</div>\n</div>\n\n<div *ngIf=\"project.roles\" class=\"roles\">\n  <div *ngFor=\"let role of project.roles\" class=\"role\">{{role}}</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/publication/publication.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/publication/publication.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"publication.url\">\n  <a [href]=\"publication.url\" class=\"name\">\n    <div>{{publication.name}}</div>\n  </a>\n</ng-container>\n<ng-container *ngIf=\"!publication.url\">\n  <div class=\"name\">{{publication.name}}</div>\n</ng-container>\n\n<div *ngIf=\"publication.publisher\" class=\"publisher\">{{publication.publisher}}</div>\n<div *ngIf=\"publication.releaseDate\" class=\"release-ate\">{{publication.releaseDate}}</div>\n<div *ngIf=\"publication.summary\" class=\"summary\">{{publication.summary}}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/reference/reference.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/reference/reference.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"reference.name\" class=\"name\">{{reference.name}}</div>\n<div *ngIf=\"reference.reference\" class=\"reference\">{{reference.reference}}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume-section/resume-section.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume-section/resume-section.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section-header\"></div>\n\n<div class=\"section-body\">\n  <ng-container *ngIf=\"name === 'basics'\">\n    <div class=\"name\">{{resume.basics.name}}</div>\n    <div *ngIf=\"resume.basics.label\" class=\"label\">{{resume.basics.label}}</div>\n    \n    <a *ngIf=\"resume.basics.email\" class=\"email\" [href]=\"'mailto:' + resume.basics.email\">{{resume.basics.email}}</a>\n    <a *ngIf=\"resume.basics.phone\" class=\"phone\" [href]=\"'tel:' + resume.basics.phone\">{{resume.basics.phone}}</a>\n    <div *ngIf=\"resume.basics.summary\" class=\"summary\">{{resume.basics.summary}}</div>\n    \n    <avatar *ngIf=\"resume.basics.email || resume.basics.picture\" [email]=\"resume.basics.email\" [picture]=\"resume.basics.picture\"></avatar>\n    \n    <location *ngIf=\"resume.basics.location\" [location]=\"resume.basics.location\"></location>\n    \n    <div class=\"profiles\" *ngIf=\"resume.basics.profiles\">\n      <profile *ngFor=\"let profile of resume.basics.profiles\" [profile]=\"profile\"></profile>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'work'\" class=\"work-section\">\n    <work *ngFor=\"let work of resume.work\" [work]=\"work\"></work>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'volunteer'\" class=\"volunteer-section\">\n    <volunteer *ngFor=\"let volunteer of resume.volunteer\" [volunteer]=\"volunteer\"></volunteer>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'education'\" class=\"education-section\">\n    <education *ngFor=\"let education of resume.education\" [education]=\"education\"></education>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'courses'\" class=\"course-section\">\n    <course *ngFor=\"let course of resume.courses\" [course]=\"course\"></course>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'awards'\" class=\"award-section\">\n    <award *ngFor=\"let award of resume.awards\" [award]=\"award\"></award>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'publications'\" class=\"publication-section\">\n    <publication *ngFor=\"let publication of resume.publications\" [publication]=\"publication\"></publication>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'skills'\" class=\"skill-section\">\n    <skill *ngFor=\"let skill of resume.skills\" [skill]=\"skill\"></skill>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'languages'\" class=\"language-section\">\n    <language *ngFor=\"let language of resume.languages\" [language]=\"language\"></language>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'interests'\" class=\"interest-section\">\n    <interest *ngFor=\"let interest of resume.interests\" [interest]=\"interest\"></interest>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'references'\" class=\"reference-section\">\n    <reference *ngFor=\"let reference of resume.references\" [reference]=\"reference\"></reference>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'projects'\" class=\"project-section\">\n    <project *ngFor=\"let project of resume.projects\" [project]=\"project\"></project>\n  </ng-container>\n\n  <ng-container *ngIf=\"name === 'other'\" class=\"project-section\">\n    <other [other]=\"resume.other\"></other>\n  </ng-container>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"resume$ | async as resume\">\n  <div class=\"sheet big\">\n    <theme-section *ngFor=\"let section of sections\" [resume]=\"resume\" [name]=\"section.name\" [sections]=\"section.sections\"></theme-section>\n    <div *ngIf=\"resumeProvider.canReset\" class=\"reset\" (click)=\"resumeProvider.reset()\" title=\"Reset resume\"></div>\n  </div>\n\n  <div *ngFor=\"let page of pages\" class=\"sheet print\">\n    <theme-section *ngFor=\"let section of page\" [resume]=\"resume\" [name]=\"section.name\" [sections]=\"section.sections\"></theme-section>\n  </div>\n</ng-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/skill/skill.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/skill/skill.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"skill.name\" class=\"name\">{{skill.name}}</div>\n<div *ngIf=\"skill.level\" [ngClass]=\"levelClasses\">\n  <span class=\"label\">{{skill.level}}</span>\n</div>\n<div *ngIf=\"skill.keywords\" class=\"keywords\">\n  <div *ngFor=\"let keyword of skill.keywords\" class=\"keyword\">{{keyword}}</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/theme-section/theme-section.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/theme-section/theme-section.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let section of sections\">\n  <resume-section *ngIf=\"resume[section]\" [resume]=\"resume\" [name]=\"section\"></resume-section>\n</ng-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/volunteer/volunteer.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/volunteer/volunteer.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"volunteer.url\">\n  <a [href]=\"volunteer.url\" class=\"organization\">\n    <div>{{volunteer.organization}}</div>\n  </a>\n</ng-container>\n<ng-container *ngIf=\"!volunteer.url\">\n  <div class=\"organization\">{{volunteer.organization}}</div>\n</ng-container>\n\n<div class=\"position\">{{volunteer.position}}</div>\n\n<div class=\"summary\">{{volunteer.summary}}</div>\n<div class=\"duration\">\n  <div class=\"start-date\">{{volunteer.startDate}}</div>\n  <div class=\"end-date\">{{volunteer.endDate}}</div>\n</div>\n\n<div *ngIf=\"volunteer.highlights\" class=\"highlights\">\n  <div *ngFor=\"let highlight of volunteer.highlights\" class=\"highlight\">{{highlight}}</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/work/work.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/work/work.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"work.position\" class=\"position\">{{work.position}}</div>\n\n<ng-container *ngIf=\"work.url\">\n  <a [href]=\"work.url\" class=\"company\">\n    <div>{{work.company}}</div>\n  </a>\n</ng-container>\n<ng-container *ngIf=\"!work.url\">\n  <div class=\"company\">{{work.company}}</div>\n</ng-container>\n\n<div *ngIf=\"work.summary\" class=\"summary\">{{work.summary}}</div>\n<div *ngIf=\"work.startDate && work.endDate\" class=\"duration\">\n  <div *ngIf=\"work.startDate\" class=\"start-date\">{{work.startDate}}</div>\n  <div *ngIf=\"work.endDate\" class=\"end-date\">{{work.endDate}}</div>\n</div>\n\n<div *ngIf=\"work.highlights\" class=\"highlights\">\n  <div *ngFor=\"let highlight of work.highlights\" class=\"highlight\">{{highlight}}</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
            /* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
            var routes = [
                { path: '', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
                { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _resume_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/avatar/avatar.component */ "./src/app/resume/avatar/avatar.component.ts");
            /* harmony import */ var ngx_gravatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-gravatar */ "./node_modules/ngx-gravatar/fesm2015/ngx-gravatar.js");
            /* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
            /* harmony import */ var _resume_location_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resume/location/location.component */ "./src/app/resume/location/location.component.ts");
            /* harmony import */ var _resume_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resume/profile/profile.component */ "./src/app/resume/profile/profile.component.ts");
            /* harmony import */ var _resume_work_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resume/work/work.component */ "./src/app/resume/work/work.component.ts");
            /* harmony import */ var _resume_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resume/volunteer/volunteer.component */ "./src/app/resume/volunteer/volunteer.component.ts");
            /* harmony import */ var _resume_education_education_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resume/education/education.component */ "./src/app/resume/education/education.component.ts");
            /* harmony import */ var _resume_award_award_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resume/award/award.component */ "./src/app/resume/award/award.component.ts");
            /* harmony import */ var _resume_publication_publication_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resume/publication/publication.component */ "./src/app/resume/publication/publication.component.ts");
            /* harmony import */ var _resume_skill_skill_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resume/skill/skill.component */ "./src/app/resume/skill/skill.component.ts");
            /* harmony import */ var _resume_language_language_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resume/language/language.component */ "./src/app/resume/language/language.component.ts");
            /* harmony import */ var _resume_interest_interest_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resume/interest/interest.component */ "./src/app/resume/interest/interest.component.ts");
            /* harmony import */ var _resume_reference_reference_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./resume/reference/reference.component */ "./src/app/resume/reference/reference.component.ts");
            /* harmony import */ var _resume_project_project_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resume/project/project.component */ "./src/app/resume/project/project.component.ts");
            /* harmony import */ var _resume_theme_section_theme_section_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resume/theme-section/theme-section.component */ "./src/app/resume/theme-section/theme-section.component.ts");
            /* harmony import */ var _resume_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./resume/resume-section/resume-section.component */ "./src/app/resume/resume-section/resume-section.component.ts");
            /* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
            /* harmony import */ var _resume_course_course_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./resume/course/course.component */ "./src/app/resume/course/course.component.ts");
            /* harmony import */ var _resume_other_other_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./resume/other/other.component */ "./src/app/resume/other/other.component.ts");
            var gravatarConfig = {
                size: 512,
                round: false
            };
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _resume_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_8__["AvatarComponent"],
                        _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                        _resume_location_location_component__WEBPACK_IMPORTED_MODULE_11__["LocationComponent"],
                        _resume_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                        _resume_work_work_component__WEBPACK_IMPORTED_MODULE_13__["WorkComponent"],
                        _resume_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_14__["VolunteerComponent"],
                        _resume_education_education_component__WEBPACK_IMPORTED_MODULE_15__["EducationComponent"],
                        _resume_course_course_component__WEBPACK_IMPORTED_MODULE_26__["CourseComponent"],
                        _resume_award_award_component__WEBPACK_IMPORTED_MODULE_16__["AwardComponent"],
                        _resume_publication_publication_component__WEBPACK_IMPORTED_MODULE_17__["PublicationComponent"],
                        _resume_skill_skill_component__WEBPACK_IMPORTED_MODULE_18__["SkillComponent"],
                        _resume_language_language_component__WEBPACK_IMPORTED_MODULE_19__["LanguageComponent"],
                        _resume_interest_interest_component__WEBPACK_IMPORTED_MODULE_20__["InterestComponent"],
                        _resume_reference_reference_component__WEBPACK_IMPORTED_MODULE_21__["ReferenceComponent"],
                        _resume_project_project_component__WEBPACK_IMPORTED_MODULE_22__["ProjectComponent"],
                        _resume_theme_section_theme_section_component__WEBPACK_IMPORTED_MODULE_23__["ThemeSectionComponent"],
                        _resume_resume_section_resume_section_component__WEBPACK_IMPORTED_MODULE_24__["ResumeSectionComponent"],
                        _editor_editor_component__WEBPACK_IMPORTED_MODULE_25__["EditorComponent"],
                        _resume_other_other_component__WEBPACK_IMPORTED_MODULE_27__["OtherComponent"]
                    ],
                    entryComponents: [
                        _resume_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_8__["AvatarComponent"],
                        _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                        _resume_location_location_component__WEBPACK_IMPORTED_MODULE_11__["LocationComponent"],
                        _resume_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                        _resume_work_work_component__WEBPACK_IMPORTED_MODULE_13__["WorkComponent"],
                        _resume_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_14__["VolunteerComponent"],
                        _resume_education_education_component__WEBPACK_IMPORTED_MODULE_15__["EducationComponent"],
                        _resume_award_award_component__WEBPACK_IMPORTED_MODULE_16__["AwardComponent"],
                        _resume_publication_publication_component__WEBPACK_IMPORTED_MODULE_17__["PublicationComponent"],
                        _resume_skill_skill_component__WEBPACK_IMPORTED_MODULE_18__["SkillComponent"],
                        _resume_language_language_component__WEBPACK_IMPORTED_MODULE_19__["LanguageComponent"],
                        _resume_interest_interest_component__WEBPACK_IMPORTED_MODULE_20__["InterestComponent"],
                        _resume_reference_reference_component__WEBPACK_IMPORTED_MODULE_21__["ReferenceComponent"],
                        _resume_project_project_component__WEBPACK_IMPORTED_MODULE_22__["ProjectComponent"],
                        _resume_theme_section_theme_section_component__WEBPACK_IMPORTED_MODULE_23__["ThemeSectionComponent"]
                    ],
                    imports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        ngx_gravatar__WEBPACK_IMPORTED_MODULE_9__["GravatarModule"].forRoot(gravatarConfig),
                        ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_5__["MonacoEditorModule"].forRoot()
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/editor/editor.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/editor/editor.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n  width: 100%;\n  height: 100%;\n}\nbody .editor {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: auto;\n}\nbody .editor .editor-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL0M6XFxVc2Vyc1xcYW5kcmVhc1xcQ29kZVxcY3Yvc3JjXFxhcHBcXGVkaXRvclxcZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgLmVkaXRvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgXHJcbiAgICAuZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsImJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYm9keSAuZWRpdG9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogYXV0bztcbn1cbmJvZHkgLmVkaXRvciAuZWRpdG9yLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/editor/editor.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/editor/editor.component.ts ***!
          \********************************************/
        /*! exports provided: EditorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function () { return EditorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _resume_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-provider.service */ "./src/app/resume-provider.service.ts");
            var EditorComponent = /** @class */ (function () {
                function EditorComponent(resumeProvider) {
                    this.resumeProvider = resumeProvider;
                    this.editorOptions = {
                        theme: 'vs-dark',
                        language: 'json'
                    };
                }
                EditorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.resumeProvider.resumeRaw$
                        .subscribe(function (r) {
                        _this.resume = r;
                    });
                };
                EditorComponent.prototype.save = function (resume) {
                    this.resumeProvider.save(resume);
                };
                EditorComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return EditorComponent;
            }());
            EditorComponent.ctorParameters = function () { return [
                { type: _resume_provider_service__WEBPACK_IMPORTED_MODULE_2__["ResumeProviderService"] }
            ]; };
            EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'editor',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor.component.scss */ "./src/app/editor/editor.component.scss")).default]
                })
            ], EditorComponent);
            /***/ 
        }),
        /***/ "./src/app/local-storage-provider.service.js": 
        /*!***************************************************!*\
          !*** ./src/app/local-storage-provider.service.js ***!
          \***************************************************/
        /*! exports provided: LocalStorageProviderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageProviderService", function () { return LocalStorageProviderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var LocalStorageProviderService = /** @class */ (function () {
                function LocalStorageProviderService() {
                }
                LocalStorageProviderService.prototype.observable$ = function (key) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'storage')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e.key === key; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) { return e.newValue; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(window.localStorage.getItem(key)));
                };
                LocalStorageProviderService.prototype.set = function (key, value) {
                    window.localStorage.setItem(key, value);
                };
                LocalStorageProviderService.prototype.get = function (key) {
                    return window.localStorage.getItem(key);
                };
                LocalStorageProviderService.prototype.ngOnDestroy = function () {
                };
                return LocalStorageProviderService;
            }());
            LocalStorageProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LocalStorageProviderService);
            //# sourceMappingURL=local-storage-provider.service.js.map
            /***/ 
        }),
        /***/ "./src/app/resume-provider.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/resume-provider.service.ts ***!
          \********************************************/
        /*! exports provided: ResumeProviderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeProviderService", function () { return ResumeProviderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _local_storage_provider_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage-provider.service.js */ "./src/app/local-storage-provider.service.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var editingKey = 'editing.json';
            var resumeKey = 'resume.json';
            var urlKey = 'resume';
            var exampleUrl = 'assets/example-resume.json';
            var ResumeProviderService = /** @class */ (function () {
                function ResumeProviderService(http, route, router, storage) {
                    var _this = this;
                    this.storage = storage;
                    this.resumeSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
                    this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.storage.observable$(editingKey), this.storage.observable$(resumeKey), route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (m) {
                        if (m.has(urlKey)) {
                            return m.get(urlKey);
                        }
                        else {
                            return exampleUrl;
                        }
                    }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (v) {
                        var editing = JSON.parse(v[0]);
                        console.log(editing);
                        var resume = v[1];
                        var url = v[2];
                        if (editing) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(resume);
                        }
                        else {
                            return http.get(url, { responseType: 'text' })
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (r) { return _this.storage.set(resumeKey, r); }));
                        }
                    })).subscribe(this.resumeSubject$);
                }
                Object.defineProperty(ResumeProviderService.prototype, "resume$", {
                    get: function () {
                        return this.resumeSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
                            try {
                                return JSON.parse(v);
                            }
                            catch (_a) {
                                return {};
                            }
                        }));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResumeProviderService.prototype, "resumeRaw$", {
                    get: function () {
                        return this.resumeSubject$;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResumeProviderService.prototype, "canReset", {
                    get: function () {
                        return this.storage.get(editingKey) === JSON.stringify(true);
                    },
                    enumerable: true,
                    configurable: true
                });
                ResumeProviderService.prototype.reset = function () {
                    this.storage.set(editingKey, JSON.stringify(false));
                };
                ResumeProviderService.prototype.save = function (resume) {
                    this.storage.set(resumeKey, resume);
                    this.storage.set(editingKey, JSON.stringify(true));
                };
                ResumeProviderService.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return ResumeProviderService;
            }());
            ResumeProviderService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _local_storage_provider_service_js__WEBPACK_IMPORTED_MODULE_3__["LocalStorageProviderService"] }
            ]; };
            ResumeProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ResumeProviderService);
            /***/ 
        }),
        /***/ "./src/app/resume/avatar/avatar.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/resume/avatar/avatar.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/resume/avatar/avatar.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/resume/avatar/avatar.component.ts ***!
          \***************************************************/
        /*! exports provided: AvatarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function () { return AvatarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AvatarComponent = /** @class */ (function () {
                function AvatarComponent() {
                }
                AvatarComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(AvatarComponent.prototype, "useGravatar", {
                    get: function () {
                        return this.email !== undefined && this.picture === undefined;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AvatarComponent.prototype, "usePicture", {
                    get: function () {
                        return this.picture !== undefined;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AvatarComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AvatarComponent.prototype, "email", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AvatarComponent.prototype, "picture", void 0);
            AvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'avatar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./avatar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/avatar/avatar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./avatar.component.scss */ "./src/app/resume/avatar/avatar.component.scss")).default]
                })
            ], AvatarComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/award/award.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/resume/award/award.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9hd2FyZC9hd2FyZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/award/award.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/resume/award/award.component.ts ***!
          \*************************************************/
        /*! exports provided: AwardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardComponent", function () { return AwardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AwardComponent = /** @class */ (function () {
                function AwardComponent() {
                }
                AwardComponent.prototype.ngOnInit = function () {
                };
                return AwardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AwardComponent.prototype, "award", void 0);
            AwardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'award',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./award.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/award/award.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./award.component.scss */ "./src/app/resume/award/award.component.scss")).default]
                })
            ], AwardComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/course/course.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/resume/course/course.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/resume/course/course.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/resume/course/course.component.ts ***!
          \***************************************************/
        /*! exports provided: CourseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function () { return CourseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CourseComponent = /** @class */ (function () {
                function CourseComponent() {
                }
                CourseComponent.prototype.ngOnInit = function () {
                };
                return CourseComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CourseComponent.prototype, "course", void 0);
            CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'course',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/course/course.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course.component.scss */ "./src/app/resume/course/course.component.scss")).default]
                })
            ], CourseComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/education/education.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/resume/education/education.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/resume/education/education.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/resume/education/education.component.ts ***!
          \*********************************************************/
        /*! exports provided: EducationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function () { return EducationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EducationComponent = /** @class */ (function () {
                function EducationComponent() {
                }
                EducationComponent.prototype.ngOnInit = function () {
                };
                return EducationComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], EducationComponent.prototype, "education", void 0);
            EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'education',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/education/education.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/resume/education/education.component.scss")).default]
                })
            ], EducationComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/interest/interest.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/resume/interest/interest.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9pbnRlcmVzdC9pbnRlcmVzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/interest/interest.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/resume/interest/interest.component.ts ***!
          \*******************************************************/
        /*! exports provided: InterestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function () { return InterestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InterestComponent = /** @class */ (function () {
                function InterestComponent() {
                }
                InterestComponent.prototype.ngOnInit = function () {
                };
                return InterestComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InterestComponent.prototype, "interest", void 0);
            InterestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'interest',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./interest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/interest/interest.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./interest.component.scss */ "./src/app/resume/interest/interest.component.scss")).default]
                })
            ], InterestComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/language/language.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/resume/language/language.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/language/language.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/resume/language/language.component.ts ***!
          \*******************************************************/
        /*! exports provided: LanguageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function () { return LanguageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
            var LanguageComponent = /** @class */ (function () {
                function LanguageComponent() {
                }
                LanguageComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(LanguageComponent.prototype, "fluencyClasses", {
                    get: function () {
                        return ['fluency', Object(src_app_utils__WEBPACK_IMPORTED_MODULE_2__["toKebabCase"])(this.language.fluency)];
                    },
                    enumerable: true,
                    configurable: true
                });
                return LanguageComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LanguageComponent.prototype, "language", void 0);
            LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'language',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/language/language.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language.component.scss */ "./src/app/resume/language/language.component.scss")).default]
                })
            ], LanguageComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/location/location.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/resume/location/location.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/location/location.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/resume/location/location.component.ts ***!
          \*******************************************************/
        /*! exports provided: LocationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function () { return LocationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LocationComponent = /** @class */ (function () {
                function LocationComponent() {
                }
                LocationComponent.prototype.ngOnInit = function () {
                };
                return LocationComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LocationComponent.prototype, "location", void 0);
            LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'location',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/location/location.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.component.scss */ "./src/app/resume/location/location.component.scss")).default]
                })
            ], LocationComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/other/other.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/resume/other/other.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9vdGhlci9vdGhlci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/other/other.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/resume/other/other.component.ts ***!
          \*************************************************/
        /*! exports provided: OtherComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function () { return OtherComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OtherComponent = /** @class */ (function () {
                function OtherComponent() {
                }
                OtherComponent.prototype.ngOnInit = function () {
                };
                return OtherComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OtherComponent.prototype, "other", void 0);
            OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'other',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./other.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/other/other.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./other.component.scss */ "./src/app/resume/other/other.component.scss")).default]
                })
            ], OtherComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/profile/profile.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/resume/profile/profile.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/resume/profile/profile.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/resume/profile/profile.component.ts ***!
          \*****************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent() {
                }
                Object.defineProperty(ProfileComponent.prototype, "hostClass", {
                    get: function () {
                        if (this.profile) {
                            return Object(src_app_utils__WEBPACK_IMPORTED_MODULE_2__["toKebabCase"])(this.profile.network);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ProfileComponent.prototype.ngOnInit = function () {
                };
                return ProfileComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProfileComponent.prototype, "profile", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
            ], ProfileComponent.prototype, "hostClass", null);
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/resume/profile/profile.component.scss")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/project/project.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/resume/project/project.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/resume/project/project.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/resume/project/project.component.ts ***!
          \*****************************************************/
        /*! exports provided: ProjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () { return ProjectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProjectComponent = /** @class */ (function () {
                function ProjectComponent() {
                }
                ProjectComponent.prototype.ngOnInit = function () {
                };
                return ProjectComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProjectComponent.prototype, "project", void 0);
            ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'project',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/project/project.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.scss */ "./src/app/resume/project/project.component.scss")).default]
                })
            ], ProjectComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/publication/publication.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/resume/publication/publication.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/publication/publication.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/resume/publication/publication.component.ts ***!
          \*************************************************************/
        /*! exports provided: PublicationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function () { return PublicationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PublicationComponent = /** @class */ (function () {
                function PublicationComponent() {
                }
                PublicationComponent.prototype.ngOnInit = function () {
                };
                return PublicationComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PublicationComponent.prototype, "publication", void 0);
            PublicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'publication',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/publication/publication.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publication.component.scss */ "./src/app/resume/publication/publication.component.scss")).default]
                })
            ], PublicationComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/reference/reference.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/resume/reference/reference.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/resume/reference/reference.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/resume/reference/reference.component.ts ***!
          \*********************************************************/
        /*! exports provided: ReferenceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () { return ReferenceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ReferenceComponent = /** @class */ (function () {
                function ReferenceComponent() {
                }
                ReferenceComponent.prototype.ngOnInit = function () {
                };
                return ReferenceComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ReferenceComponent.prototype, "reference", void 0);
            ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'reference',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reference.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/reference/reference.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reference.component.scss */ "./src/app/resume/reference/reference.component.scss")).default]
                })
            ], ReferenceComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/resume-section/resume-section.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/resume/resume-section/resume-section.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUtc2VjdGlvbi9yZXN1bWUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/resume-section/resume-section.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/resume/resume-section/resume-section.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ResumeSectionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeSectionComponent", function () { return ResumeSectionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ResumeSectionComponent = /** @class */ (function () {
                function ResumeSectionComponent() {
                    this.name = undefined;
                }
                Object.defineProperty(ResumeSectionComponent.prototype, "classes", {
                    get: function () {
                        return this.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                ResumeSectionComponent.prototype.ngOnInit = function () {
                };
                return ResumeSectionComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResumeSectionComponent.prototype, "resume", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ResumeSectionComponent.prototype, "name", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
            ], ResumeSectionComponent.prototype, "classes", null);
            ResumeSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'resume-section',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume-section/resume-section.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume-section.component.scss */ "./src/app/resume/resume-section/resume-section.component.scss")).default]
                })
            ], ResumeSectionComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/resume.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/resume/resume.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\nhtml, body {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n}\ndiv, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: content-box;\n}\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box;\n}\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nimg {\n  vertical-align: middle;\n}\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n@page {\n  margin: 0;\n}\nbody {\n  margin: 0;\n  height: 100%;\n  /** Fix for Chrome issue #273306 **/\n}\n@media print {\n  body {\n    width: 210mm;\n  }\n}\n@media screen {\n  body {\n    background: #525659;\n  }\n}\nbody .sheet.big {\n  background: white;\n  box-shadow: 0 1mm 4mm #262626;\n  margin: 5mm auto;\n  position: relative;\n}\n@media screen and (min-width: 210mm) {\n  body .sheet.big {\n    width: 210mm;\n  }\n}\n@media print {\n  body .sheet.big {\n    display: none;\n  }\n}\nbody .sheet.print {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  box-sizing: border-box;\n  page-break-after: always;\n}\n@media print {\n  body .sheet.print {\n    width: 210mm;\n    height: 297mm;\n    overflow: hidden;\n  }\n}\n@media screen {\n  body .sheet.print {\n    display: none;\n  }\n}\n/** Paper sizes **/\n/** Padding area **/\n.reset {\n  cursor: pointer;\n  position: fixed;\n  right: 50px;\n  bottom: 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #cccccc;\n  box-shadow: #1a1a1a 0 0 5px 1px;\n  text-align: center;\n}\n.reset::before {\n  font-family: \"icofont\";\n  content: \"\";\n  line-height: 50px;\n  font-size: 25px;\n}\n@media print {\n  .reset {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lL0M6XFxVc2Vyc1xcYW5kcmVhc1xcQ29kZVxcY3Yvc3JjXFxhcHBcXHJlc3VtZVxcX3Jlc2V0LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS9DOlxcVXNlcnNcXGFuZHJlYXNcXENvZGVcXGN2L3NyY1xcYXBwXFxyZXN1bWVcXF9wYXBlci5zY3NzIiwic3JjL2FwcC9yZXN1bWUvQzpcXFVzZXJzXFxhbmRyZWFzXFxDb2RlXFxjdi9zcmNcXGFwcFxccmVzdW1lXFxyZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Q0FBQTtBQUtBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QURDRjtBQ0VBOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNELFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRENEO0FDRUEseURBQUE7QUFDQTtFQUNJLFVBQUE7QURDSjtBQ0VBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBRENEO0FDRUE7RUFDQyxjQUFBO0FEQ0Q7QUNFQTtFQUNDLGdCQUFBO0FEQ0Q7QUNFQTtFQUNDLFlBQUE7QURDRDtBQ0VBOztFQUVDLFdBQUE7RUFDQSxhQUFBO0FEQ0Q7QUNFQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QURDRDtBQ0VBOzs7O0VBSUksd0JBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0VBR0EsdUJBQUE7QURDSjtBQ0VBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURDSjtBQ0VBOztFQUFBO0FBSUE7OztFQUdJLHFCQUFBO0dBQ0EsZUFBQTtHQUNBLE9BQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTs7O0VBQUE7QUFLQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FEREo7QUNJQTs7O0VBQUE7QUFLQTtFQUNJLGFBQUE7QURGSjtBQ0tBOzs7OztFQUFBO0FBT0E7RUFDSSxlQUFBO0VBQWlCLE1BQUE7RUFDakIsOEJBQUE7RUFBZ0MsTUFBQTtFQUNoQywwQkFBQTtFQUE0QixNQUFBO0FEQWhDO0FDR0E7O0VBQUE7QUFJQTtFQUNJLG9CQUFBO0FEREo7QUNJQTs7RUFBQTtBQUlBOztFQUVJLFVBQUE7QURGSjtBQ0tBOzs7RUFBQTtBQUtBO0VBQ0ksU0FBQTtFQUFXLE1BQUE7RUFDWCwrQkFBQTtFQUFpQyxNQUFBO0FERHJDO0FDSUE7O0VBQUE7QUFJQTtFQUNJLFNBQUE7QURGSjtBQ0tBOztFQUFBO0FBSUE7RUFDSSxTQUFBO0FESEo7QUNNQTs7RUFBQTtBQUlBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QURKSjtBQ09BOzs7O0VBQUE7QUFNQTtFQUNJLFNBQUE7RUFBVyxNQUFBO0VBQ1gsVUFBQTtFQUNBLG1CQUFBO0VBQXFCLE1BQUE7R0FDckIsaUJBQUE7RUFBb0IsTUFBQTtBREZ4QjtBQ0tBOzs7OztFQUFBO0FBT0E7Ozs7RUFJSSxlQUFBO0VBQWlCLE1BQUE7RUFDakIsU0FBQTtFQUFXLE1BQUE7RUFDWCx3QkFBQTtFQUEwQixNQUFBO0dBQzFCLHNCQUFBO0VBQXlCLE1BQUE7QURDN0I7QUNFQTs7O0VBQUE7QUFLQTs7RUFFSSxtQkFBQTtBREFKO0FDR0E7Ozs7O0VBQUE7QUFPQTs7RUFFSSxvQkFBQTtBRERKO0FDSUE7Ozs7Ozs7O0VBQUE7QUFVQTs7OztFQUlJLDBCQUFBO0VBQTRCLE1BQUE7RUFDNUIsZUFBQTtFQUFpQixNQUFBO0dBQ2pCLGlCQUFBO0VBQXFCLE1BQUE7QURDekI7QUNFQTs7RUFBQTtBQUlBOztFQUVJLGVBQUE7QURBSjtBQ0dBOzs7OztFQUFBO0FBT0E7O0VBRUksc0JBQUE7RUFBd0IsTUFBQTtFQUN4QixVQUFBO0VBQVksTUFBQTtHQUNaLFlBQUE7RUFBZSxNQUFBO0dBQ2YsV0FBQTtFQUFjLE1BQUE7QURHbEI7QUNBQTs7OztFQUFBO0FBTUE7RUFDSSw2QkFBQTtFQUErQixNQUFBO0VBRUUsTUFBQTtFQUNqQyx1QkFBQTtBRElKO0FDREE7OztFQUFBO0FBS0E7O0VBRUksd0JBQUE7QURHSjtBQ0FBOztFQUFBO0FBSUE7O0VBRUksU0FBQTtFQUNBLFVBQUE7QURFSjtBQ0NBOzs7RUFBQTtBQUtBO0VBQ0ksY0FBQTtFQUFnQixNQUFBO0VBQ2hCLG1CQUFBO0VBQXFCLE1BQUE7QURHekI7QUNBQTs7RUFBQTtBQUlBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBREVKO0FDQ0E7Ozs7O0VBS0ksV0FBQTtBREVKO0FDRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FEQ0o7QUNFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0VBO0VBQ0ksc0JBQUE7QURDSjtBQ0VBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRENKO0FFcFhBO0VBQVEsU0FBQTtBRndYUjtBRXRYQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBRUEsbUNBQUE7QUZ1WEY7QUV0WEU7RUFMRjtJQU1JLFlBQUE7RUZ5WEY7QUFDRjtBRXZYRTtFQVRGO0lBVUksbUJBQUE7RUYwWEY7QUFDRjtBRXhYRTtFQUVFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGeVhKO0FFdlhJO0VBUEY7SUFRSSxZQUFBO0VGMFhKO0FBQ0Y7QUV4WEk7RUFYRjtJQVlJLGFBQUE7RUYyWEo7QUFDRjtBRXhYRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FGMFhKO0FFeFhJO0VBUEY7SUFRSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VGMlhKO0FBQ0Y7QUV6WEk7RUFiRjtJQWNJLGFBQUE7RUY0WEo7QUFDRjtBRXhYQSxrQkFBQTtBQWNBLG1CQUFBO0FDN0RBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUg0YUY7QUcxYUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUg0YUo7QUd6YUU7RUFuQkY7SUFvQkksYUFBQTtFSDRhRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICovXG5hdWRpbyxcbmNhbnZhcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICAqem9vbTogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcbiAqICAgIGBlbWAgdW5pdHMuXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcbiAqICAgIHVzZXIgem9vbS5cbiAqL1xuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cbiAqL1xuYTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xufVxuXG4vKipcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXG4gKi9cbmltZyB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cbiAqL1xuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXG4gKi9cbmZvcm0ge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuICovXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cbiAqL1xubGVnZW5kIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDIgKi9cbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXG4gKiAgICBhbmQgQ2hyb21lLlxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAyICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMyAqL1xuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogMyAqL1xufVxuXG4vKipcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxuICovXG5idXR0b24sXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cbiAqL1xuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAyICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogMyAqL1xuICAqb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDQgKi9cbn1cblxuLyoqXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuICovXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxuICovXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovXG4gICpoZWlnaHQ6IDEzcHg7XG4gIC8qIDMgKi9cbiAgKndpZHRoOiAxM3B4O1xuICAvKiAzICovXG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDIgKi9cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqIG9uIE9TIFguXG4gKi9cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXG4gKi9cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cbiAqL1xudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuICovXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5odG1sLFxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmNocm9tZWZyYW1lIHtcbiAgbWFyZ2luOiAwLjJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMC4yZW0gMDtcbn1cblxuQHBhZ2Uge1xuICBtYXJnaW46IDA7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qKiBGaXggZm9yIENocm9tZSBpc3N1ZSAjMjczMzA2ICoqL1xufVxuQG1lZGlhIHByaW50IHtcbiAgYm9keSB7XG4gICAgd2lkdGg6IDIxMG1tO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogIzUyNTY1OTtcbiAgfVxufVxuYm9keSAuc2hlZXQuYmlnIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMW1tIDRtbSAjMjYyNjI2O1xuICBtYXJnaW46IDVtbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMTBtbSkge1xuICBib2R5IC5zaGVldC5iaWcge1xuICAgIHdpZHRoOiAyMTBtbTtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgYm9keSAuc2hlZXQuYmlnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5ib2R5IC5zaGVldC5wcmludCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XG59XG5AbWVkaWEgcHJpbnQge1xuICBib2R5IC5zaGVldC5wcmludCB7XG4gICAgd2lkdGg6IDIxMG1tO1xuICAgIGhlaWdodDogMjk3bW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiB7XG4gIGJvZHkgLnNoZWV0LnByaW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qKiBQYXBlciBzaXplcyAqKi9cbi8qKiBQYWRkaW5nIGFyZWEgKiovXG4ucmVzZXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBib3gtc2hhZG93OiAjMWExYTFhIDAgMCA1cHggMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVzZXQ6OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImljb2ZvbnRcIjtcbiAgY29udGVudDogXCLuv5FcIjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC5yZXNldCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXHJcbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgIFxyXG59XHJcblxyXG5kaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5vbCwgdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxyXG4gKi9cclxuXHJcbmF1ZGlvLFxyXG5jYW52YXMsXHJcbnZpZGVvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICpkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAqem9vbTogMTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxyXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxyXG4gKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcclxuICogICAgYGVtYCB1bml0cy5cclxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXHJcbiAqICAgIHVzZXIgem9vbS5cclxuICovXHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6YWN0aXZlLFxyXG5hOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cclxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXHJcbiAqL1xyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xyXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cclxuICovXHJcblxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cclxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cclxuICovXHJcblxyXG5sZWdlbmQge1xyXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xyXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4OyAvKiAzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxyXG4gKiAgICBhbmQgQ2hyb21lLlxyXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDMgKi9cclxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXHJcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cclxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cclxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxyXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcclxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXHJcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cclxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcclxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxyXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cclxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvKiAxICovXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXHJcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0sXHJcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxyXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxyXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cclxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXHJcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXHJcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxyXG4gKiBvbiBPUyBYLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxyXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXHJcbiAqL1xyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5odG1sLFxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi5jaHJvbWVmcmFtZSB7XHJcbiAgICBtYXJnaW46IDAuMmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xyXG59XHJcblxyXG4iLCJAcGFnZSB7IG1hcmdpbjogMCB9XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAvKiogRml4IGZvciBDaHJvbWUgaXNzdWUgIzI3MzMwNiAqKi9cclxuICBAbWVkaWEgcHJpbnQgeyAgXHJcbiAgICB3aWR0aDogMjEwbW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig4MiwgODYsIDg5KTtcclxuICB9XHJcblxyXG4gIC5zaGVldC5iaWcge1xyXG4gICAgJHNoYWRvdy1jb2xvcjogbGlnaHRlbigjMDAwMDAwLCAxNSUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFtbSA0bW0gJHNoYWRvdy1jb2xvcjtcclxuICAgIG1hcmdpbjogNW1tIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjEwbW0pIHtcclxuICAgICAgd2lkdGg6IDIxMG1tOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaGVldC5wcmludCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuXHJcbiAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICB3aWR0aDogMjEwbW07IFxyXG4gICAgICBoZWlnaHQ6IDI5N21tO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqIFBhcGVyIHNpemVzICoqL1xyXG4vLyBib2R5LkEzICAgICAgICAgICAgICAgLnNoZWV0IHsgd2lkdGg6IDI5N21tOyBoZWlnaHQ6IDQxOW1tIH1cclxuLy8gYm9keS5BMy5sYW5kc2NhcGUgICAgIC5zaGVldCB7IHdpZHRoOiA0MjBtbTsgaGVpZ2h0OiAyOTZtbSB9XHJcbi8vIEBtZWRpYSBwcmludCBhbmQgKG1pbi13aWR0aDogMjEwbW0pIHtcclxuLy8gICBib2R5LkE0ICAgICAgICAgICAgICAgLnNoZWV0IHsgd2lkdGg6IDIxMG1tOyBoZWlnaHQ6IDI5Nm1tIH1cclxuLy8gfVxyXG4vLyBib2R5LkE0LmxhbmRzY2FwZSAgICAgLnNoZWV0IHsgd2lkdGg6IDI5N21tOyBoZWlnaHQ6IDIwOW1tIH1cclxuLy8gYm9keS5BNSAgICAgICAgICAgICAgIC5zaGVldCB7IHdpZHRoOiAxNDhtbTsgaGVpZ2h0OiAyMDltbSB9XHJcbi8vIGJvZHkuQTUubGFuZHNjYXBlICAgICAuc2hlZXQgeyB3aWR0aDogMjEwbW07IGhlaWdodDogMTQ3bW0gfVxyXG4vLyBib2R5LmxldHRlciAgICAgICAgICAgLnNoZWV0IHsgd2lkdGg6IDIxNm1tOyBoZWlnaHQ6IDI3OW1tIH1cclxuLy8gYm9keS5sZXR0ZXIubGFuZHNjYXBlIC5zaGVldCB7IHdpZHRoOiAyODBtbTsgaGVpZ2h0OiAyMTVtbSB9XHJcbi8vIGJvZHkubGVnYWwgICAgICAgICAgICAuc2hlZXQgeyB3aWR0aDogMjE2bW07IGhlaWdodDogMzU2bW0gfVxyXG4vLyBib2R5LmxlZ2FsLmxhbmRzY2FwZSAgLnNoZWV0IHsgd2lkdGg6IDM1N21tOyBoZWlnaHQ6IDIxNW1tIH1cclxuXHJcbi8qKiBQYWRkaW5nIGFyZWEgKiovXHJcbi8vIC5zaGVldC5wYWRkaW5nLTEwbW0geyBwYWRkaW5nOiAxMG1tIH1cclxuLy8gLnNoZWV0LnBhZGRpbmctMTVtbSB7IHBhZGRpbmc6IDE1bW0gfVxyXG4vLyAuc2hlZXQucGFkZGluZy0yMG1tIHsgcGFkZGluZzogMjBtbSB9XHJcbi8vIC5zaGVldC5wYWRkaW5nLTI1bW0geyBwYWRkaW5nOiAyNW1tIH1cclxuXHJcbi8vIC8qKiBGb3Igc2NyZWVuIHByZXZpZXcgKiovXHJcbi8vIEBtZWRpYSBzY3JlZW4ge1xyXG4vLyAgIGJvZHkgeyBiYWNrZ3JvdW5kOiAjZTBlMGUwIH1cclxuLy8gICAuc2hlZXQge1xyXG4vLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIC41bW0gMm1tIHJnYmEoMCwwLDAsLjMpO1xyXG4vLyAgICAgbWFyZ2luOiA1bW0gYXV0bztcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC8qKiBGaXggZm9yIENocm9tZSBpc3N1ZSAjMjczMzA2ICoqL1xyXG4vLyBAbWVkaWEgcHJpbnQge1xyXG4vLyAgICAgICAgICAgIGJvZHkuQTMubGFuZHNjYXBlIHsgd2lkdGg6IDQyMG1tIH1cclxuLy8gICBib2R5LkEzLCBib2R5LkE0LmxhbmRzY2FwZSB7IHdpZHRoOiAyOTdtbSB9XHJcbi8vICAgYm9keS5BNCwgYm9keS5BNS5sYW5kc2NhcGUgeyB3aWR0aDogMjEwbW0gfVxyXG4vLyAgIGJvZHkuQTUgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDE0OG1tIH1cclxuLy8gICBib2R5LmxldHRlciwgYm9keS5sZWdhbCAgICB7IHdpZHRoOiAyMTZtbSB9XHJcbi8vICAgYm9keS5sZXR0ZXIubGFuZHNjYXBlICAgICAgeyB3aWR0aDogMjgwbW0gfVxyXG4vLyAgIGJvZHkubGVnYWwubGFuZHNjYXBlICAgICAgIHsgd2lkdGg6IDM1N21tIH1cclxuLy8gfSIsIkBpbXBvcnQgXCJyZXNldFwiO1xyXG5AaW1wb3J0IFwicGFwZXJcIjtcclxuXHJcbi5yZXNldCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogNTBweDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2ZmZiwgMjAlKTtcclxuICBib3gtc2hhZG93OiBsaWdodGVuKCMwMDAsIDEwJSkgMCAwIDVweCAxcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaWNvZm9udFwiO1xyXG4gICAgY29udGVudDogXCJcXGVmZDFcIjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/resume/resume.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/resume/resume.component.ts ***!
          \********************************************/
        /*! exports provided: ResumeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () { return ResumeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _resume_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-provider.service */ "./src/app/resume-provider.service.ts");
            /* harmony import */ var _theming_theme_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theming/theme-provider.service */ "./src/app/theming/theme-provider.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ResumeComponent = /** @class */ (function () {
                function ResumeComponent(resumeProvider, themeProvider) {
                    this.resumeProvider = resumeProvider;
                    this.themeProvider = themeProvider;
                    this.themeElements = 0;
                }
                ResumeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.resume$ = this.resumeProvider.resume$;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.resumeProvider.resume$, this.themeProvider.theme$).subscribe(function (v) {
                        var resume = v[0];
                        var theme = v[1];
                        if (resume !== undefined && resume.meta !== undefined && 'theme' in resume.meta) {
                            var overrides = resume.meta.theme;
                            theme = Object.assign({}, theme, overrides);
                        }
                        document.head.querySelector('#dynamic-theme').innerHTML = theme.style;
                        _this.pages = [];
                        _this.sections = [];
                        for (var i = 0; i < theme.pages.length; ++i) {
                            _this.pages.push([]);
                            var _loop_1 = function (name, sections) {
                                _this.pages[i].push({ name: name, sections: sections });
                                var existingSection = _this.sections.find(function (s) { return s.name === name; });
                                if (existingSection) {
                                    existingSection.sections = existingSection.sections.concat(sections);
                                }
                                else {
                                    _this.sections.push({ name: name, sections: sections });
                                }
                            };
                            for (var _i = 0, _b = Object.entries(theme.pages[i]); _i < _b.length; _i++) {
                                var _c = _b[_i], name = _c[0], sections = _c[1];
                                _loop_1(name, sections);
                            }
                        }
                    });
                };
                ResumeComponent.prototype.ngOnDestroy = function () {
                    this.themeSubscription.unsubscribe();
                };
                return ResumeComponent;
            }());
            ResumeComponent.ctorParameters = function () { return [
                { type: _resume_provider_service__WEBPACK_IMPORTED_MODULE_2__["ResumeProviderService"] },
                { type: _theming_theme_provider_service__WEBPACK_IMPORTED_MODULE_3__["ThemeProviderService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('themeHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false })
            ], ResumeComponent.prototype, "viewContainerRef", void 0);
            ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'resume',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")).default]
                })
            ], ResumeComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/skill/skill.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/resume/skill/skill.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/resume/skill/skill.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/resume/skill/skill.component.ts ***!
          \*************************************************/
        /*! exports provided: SkillComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function () { return SkillComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils.ts");
            var SkillComponent = /** @class */ (function () {
                function SkillComponent() {
                }
                SkillComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(SkillComponent.prototype, "levelClasses", {
                    get: function () {
                        return ['skill', Object(src_app_utils__WEBPACK_IMPORTED_MODULE_2__["toKebabCase"])(this.skill.level)];
                    },
                    enumerable: true,
                    configurable: true
                });
                return SkillComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SkillComponent.prototype, "skill", void 0);
            SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'skill',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/skill/skill.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skill.component.scss */ "./src/app/resume/skill/skill.component.scss")).default]
                })
            ], SkillComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/theme-section/theme-section.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/resume/theme-section/theme-section.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS90aGVtZS1zZWN0aW9uL3RoZW1lLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/resume/theme-section/theme-section.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/resume/theme-section/theme-section.component.ts ***!
          \*****************************************************************/
        /*! exports provided: ThemeSectionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSectionComponent", function () { return ThemeSectionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ThemeSectionComponent = /** @class */ (function () {
                function ThemeSectionComponent(viewContainerRef, componentFactoryResolver) {
                    this.viewContainerRef = viewContainerRef;
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.sections = [];
                    this.name = '';
                }
                Object.defineProperty(ThemeSectionComponent.prototype, "classes", {
                    get: function () {
                        return this.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                ThemeSectionComponent.prototype.ngOnInit = function () {
                };
                return ThemeSectionComponent;
            }());
            ThemeSectionComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThemeSectionComponent.prototype, "resume", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThemeSectionComponent.prototype, "sections", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThemeSectionComponent.prototype, "name", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
            ], ThemeSectionComponent.prototype, "classes", null);
            ThemeSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'theme-section',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./theme-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/theme-section/theme-section.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./theme-section.component.scss */ "./src/app/resume/theme-section/theme-section.component.scss")).default]
                })
            ], ThemeSectionComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/volunteer/volunteer.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/resume/volunteer/volunteer.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS92b2x1bnRlZXIvdm9sdW50ZWVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/resume/volunteer/volunteer.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/resume/volunteer/volunteer.component.ts ***!
          \*********************************************************/
        /*! exports provided: VolunteerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function () { return VolunteerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VolunteerComponent = /** @class */ (function () {
                function VolunteerComponent() {
                }
                VolunteerComponent.prototype.ngOnInit = function () {
                };
                return VolunteerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VolunteerComponent.prototype, "volunteer", void 0);
            VolunteerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'volunteer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./volunteer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/volunteer/volunteer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./volunteer.component.scss */ "./src/app/resume/volunteer/volunteer.component.scss")).default]
                })
            ], VolunteerComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/work/work.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/resume/work/work.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/resume/work/work.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/resume/work/work.component.ts ***!
          \***********************************************/
        /*! exports provided: WorkComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function () { return WorkComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WorkComponent = /** @class */ (function () {
                function WorkComponent() {
                }
                WorkComponent.prototype.ngOnInit = function () {
                };
                return WorkComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WorkComponent.prototype, "work", void 0);
            WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'work',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/work/work.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work.component.scss */ "./src/app/resume/work/work.component.scss")).default]
                })
            ], WorkComponent);
            /***/ 
        }),
        /***/ "./src/app/theming/theme-provider.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/theming/theme-provider.service.ts ***!
          \***************************************************/
        /*! exports provided: ThemeProviderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProviderService", function () { return ThemeProviderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! less */ "./node_modules/less/dist/less.js");
            /* harmony import */ var less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(less__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var urlKey = 'theme';
            var defaultUrl = 'assets/default-theme.json';
            var ThemeProviderService = /** @class */ (function () {
                // style$: Observable<string> = of('.test { background: green; }');
                function ThemeProviderService(route, http) {
                    this.route = route;
                    this.http = http;
                }
                Object.defineProperty(ThemeProviderService.prototype, "theme$", {
                    get: function () {
                        var _this = this;
                        var themeUrl$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (m) {
                            if (m.has(urlKey)) {
                                return m.get(urlKey);
                            }
                            else {
                                return defaultUrl;
                            }
                        }));
                        return themeUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (themeUrl) { return _this.http
                            .get(themeUrl)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (t) {
                            if (t.styleUrl) {
                                return _this.http
                                    .get(t.styleUrl, { responseType: 'text' })
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (v) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(less__WEBPACK_IMPORTED_MODULE_5___default.a.render(v)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
                                    t.style = v.css;
                                    return t;
                                }));
                            }
                            else {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(t);
                            }
                        })); }));
                    },
                    enumerable: true,
                    configurable: true
                });
                return ThemeProviderService;
            }());
            ThemeProviderService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            ThemeProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ThemeProviderService);
            /***/ 
        }),
        /***/ "./src/app/utils.ts": 
        /*!**************************!*\
          !*** ./src/app/utils.ts ***!
          \**************************/
        /*! exports provided: toKebabCase */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function () { return toKebabCase; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            function toKebabCase(str) {
                if (!str) {
                    return '';
                }
                str = str.toLowerCase();
                return str.replace(' ', '-');
            }
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\andreas\Code\cv\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map