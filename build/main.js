/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/body.ts":
/*!********************************!*\
  !*** ./src/components/body.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Body = void 0;
const CvComponent_1 = __webpack_require__(/*! @/utils/CvComponent */ "./src/utils/CvComponent.ts");
const sectionTitle_1 = __webpack_require__(/*! ./sectionTitle */ "./src/components/sectionTitle.ts");
class Body extends CvComponent_1.CvComponent {
    render() {
        return `
      <div class="grid grid-cols-3 gap-0 p-3">
        <div class="sidebar row-span-auto">
          ${new sectionTitle_1.SectionTitle({ title: "Contacts" }).render()}
          <ul>
            <li>✉️ email: ${this.config.contacts.email}</li>
            <li>☎️ telephone: ${this.config.contacts.telephone}</li>
            <li>🌐 website: ${this.config.contacts.website}</li>
          </ul>
        </div>
        <div class="content col-span-2">
          ${new sectionTitle_1.SectionTitle({ title: "Summary" }).render()} 
          <p>A description about myself and my story as a developer and as a person</p>
        </div>

        <div class="sidebar row-span-auto">
          ${new sectionTitle_1.SectionTitle({ title: "Contacts" }).render()}
          <ul>
            <li>✉️ email: ${this.config.contacts.email}</li>
            <li>☎️ telephone: ${this.config.contacts.telephone}</li>
            <li>🌐 website: ${this.config.contacts.website}</li>
          </ul>
        </div>
        <div class="content col-span-2">
          ${new sectionTitle_1.SectionTitle({ title: "Summary" }).render()} 
          <p>A description about myself and my story as a developer and as a person</p>
        </div>
      </div>
    `;
    }
}
exports.Body = Body;


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Header = void 0;
const CvComponent_1 = __webpack_require__(/*! @/utils/CvComponent */ "./src/utils/CvComponent.ts");
const profilePic_1 = __webpack_require__(/*! ./profilePic */ "./src/components/profilePic.ts");
const subtitle_1 = __webpack_require__(/*! ./subtitle */ "./src/components/subtitle.ts");
const title_1 = __importDefault(__webpack_require__(/*! ./title */ "./src/components/title.ts"));
class Header extends CvComponent_1.CvComponent {
    render() {
        return `<div class="w-full py-5 px-2 bg-slate-500 flex items-center">
    <div class="w-4/5">
      ${new title_1.default().render()}
      ${new subtitle_1.Subtitle({ color: "light" }).render()}
      </div>
      ${new profilePic_1.ProfilePic().render()}
    </div>`;
    }
}
exports.Header = Header;


/***/ }),

/***/ "./src/components/profilePic.ts":
/*!**************************************!*\
  !*** ./src/components/profilePic.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfilePic = void 0;
const CvComponent_1 = __webpack_require__(/*! @/utils/CvComponent */ "./src/utils/CvComponent.ts");
class ProfilePic extends CvComponent_1.CvComponent {
    render() {
        return `
      <img class="self-end ml-auto max-h-60 max-w-[200px] shadow rounded-full" src="${this.config.profile_pic}" alt="" />
    `;
    }
}
exports.ProfilePic = ProfilePic;


/***/ }),

/***/ "./src/components/sectionTitle.ts":
/*!****************************************!*\
  !*** ./src/components/sectionTitle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectionTitle = void 0;
const CvComponent_1 = __webpack_require__(/*! @/utils/CvComponent */ "./src/utils/CvComponent.ts");
class SectionTitle extends CvComponent_1.CvComponent {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return `
      <h4 class="text-2xl py-3 w-full border-b-2 border-slate-500">${this.props.title}</h4>
    `;
    }
}
exports.SectionTitle = SectionTitle;


/***/ }),

/***/ "./src/components/subtitle.ts":
/*!************************************!*\
  !*** ./src/components/subtitle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Subtitle = void 0;
const CvComponent_1 = __webpack_require__(/*! @/utils/CvComponent */ "./src/utils/CvComponent.ts");
class Subtitle extends CvComponent_1.CvComponent {
    constructor(props) {
        super();
        this.props = props;
    }
    getColorClass() {
        return this.props.color === "light" ? "text-slate-300" : "text-black";
    }
    render() {
        return `<h3 class="${this.getColorClass()} text-2xl">${this.config.profession}</h3>`;
    }
}
exports.Subtitle = Subtitle;


/***/ }),

/***/ "./src/components/title.ts":
/*!*********************************!*\
  !*** ./src/components/title.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Title = void 0;
const CvComponent_1 = __webpack_require__(/*! @/utils/CvComponent */ "./src/utils/CvComponent.ts");
class Title extends CvComponent_1.CvComponent {
    render() {
        return `<h1 class="text-6xl text-slate-300">${this.config.name}</h1>`;
    }
}
exports.Title = Title;
exports["default"] = Title;


/***/ }),

/***/ "./src/utils/CvComponent.ts":
/*!**********************************!*\
  !*** ./src/utils/CvComponent.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CvComponent = void 0;
const cv_config_json_1 = __importDefault(__webpack_require__(/*! @/cv_config.json */ "./src/cv_config.json"));
class CvComponent {
    constructor(props = {}) {
        this.config = cv_config_json_1.default;
        this.props = props;
    }
}
exports.CvComponent = CvComponent;


/***/ }),

/***/ "./src/cv_config.json":
/*!****************************!*\
  !*** ./src/cv_config.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Danny Spina","profession":"Web Developer","profile_pic":"./assets/profile.jpg","contacts":{"email":"hi@dannspina.com","telephone":"+49 151 7501 9301","website":"dannyspina.com"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const body_1 = __webpack_require__(/*! ./components/body */ "./src/components/body.ts");
const header_1 = __webpack_require__(/*! ./components/header */ "./src/components/header.ts");
const cv = document.querySelector(".cv");
if (!cv) {
    throw new Error("Main CV container is undefined");
}
const components = [new header_1.Header(), new body_1.Body()];
components.forEach((el, i) => {
    const fragment = document.createRange().createContextualFragment(el.render());
    cv.appendChild(fragment.children[0]);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdi1qc29uLy4vc3JjL2NvbXBvbmVudHMvYm9keS50cyIsIndlYnBhY2s6Ly9jdi1qc29uLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL2N2LWpzb24vLi9zcmMvY29tcG9uZW50cy9wcm9maWxlUGljLnRzIiwid2VicGFjazovL2N2LWpzb24vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uVGl0bGUudHMiLCJ3ZWJwYWNrOi8vY3YtanNvbi8uL3NyYy9jb21wb25lbnRzL3N1YnRpdGxlLnRzIiwid2VicGFjazovL2N2LWpzb24vLi9zcmMvY29tcG9uZW50cy90aXRsZS50cyIsIndlYnBhY2s6Ly9jdi1qc29uLy4vc3JjL3V0aWxzL0N2Q29tcG9uZW50LnRzIiwid2VicGFjazovL2N2LWpzb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3YtanNvbi8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Cb2R5ID0gdm9pZCAwO1xuY29uc3QgQ3ZDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJAL3V0aWxzL0N2Q29tcG9uZW50XCIpO1xuY29uc3Qgc2VjdGlvblRpdGxlXzEgPSByZXF1aXJlKFwiLi9zZWN0aW9uVGl0bGVcIik7XG5jbGFzcyBCb2R5IGV4dGVuZHMgQ3ZDb21wb25lbnRfMS5DdkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTAgcC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyIHJvdy1zcGFuLWF1dG9cIj5cbiAgICAgICAgICAke25ldyBzZWN0aW9uVGl0bGVfMS5TZWN0aW9uVGl0bGUoeyB0aXRsZTogXCJDb250YWN0c1wiIH0pLnJlbmRlcigpfVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT7inInvuI8gZW1haWw6ICR7dGhpcy5jb25maWcuY29udGFjdHMuZW1haWx9PC9saT5cbiAgICAgICAgICAgIDxsaT7imI7vuI8gdGVsZXBob25lOiAke3RoaXMuY29uZmlnLmNvbnRhY3RzLnRlbGVwaG9uZX08L2xpPlxuICAgICAgICAgICAgPGxpPvCfjJAgd2Vic2l0ZTogJHt0aGlzLmNvbmZpZy5jb250YWN0cy53ZWJzaXRlfTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAke25ldyBzZWN0aW9uVGl0bGVfMS5TZWN0aW9uVGl0bGUoeyB0aXRsZTogXCJTdW1tYXJ5XCIgfSkucmVuZGVyKCl9IFxuICAgICAgICAgIDxwPkEgZGVzY3JpcHRpb24gYWJvdXQgbXlzZWxmIGFuZCBteSBzdG9yeSBhcyBhIGRldmVsb3BlciBhbmQgYXMgYSBwZXJzb248L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyIHJvdy1zcGFuLWF1dG9cIj5cbiAgICAgICAgICAke25ldyBzZWN0aW9uVGl0bGVfMS5TZWN0aW9uVGl0bGUoeyB0aXRsZTogXCJDb250YWN0c1wiIH0pLnJlbmRlcigpfVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT7inInvuI8gZW1haWw6ICR7dGhpcy5jb25maWcuY29udGFjdHMuZW1haWx9PC9saT5cbiAgICAgICAgICAgIDxsaT7imI7vuI8gdGVsZXBob25lOiAke3RoaXMuY29uZmlnLmNvbnRhY3RzLnRlbGVwaG9uZX08L2xpPlxuICAgICAgICAgICAgPGxpPvCfjJAgd2Vic2l0ZTogJHt0aGlzLmNvbmZpZy5jb250YWN0cy53ZWJzaXRlfTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAke25ldyBzZWN0aW9uVGl0bGVfMS5TZWN0aW9uVGl0bGUoeyB0aXRsZTogXCJTdW1tYXJ5XCIgfSkucmVuZGVyKCl9IFxuICAgICAgICAgIDxwPkEgZGVzY3JpcHRpb24gYWJvdXQgbXlzZWxmIGFuZCBteSBzdG9yeSBhcyBhIGRldmVsb3BlciBhbmQgYXMgYSBwZXJzb248L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICB9XG59XG5leHBvcnRzLkJvZHkgPSBCb2R5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkhlYWRlciA9IHZvaWQgMDtcbmNvbnN0IEN2Q29tcG9uZW50XzEgPSByZXF1aXJlKFwiQC91dGlscy9DdkNvbXBvbmVudFwiKTtcbmNvbnN0IHByb2ZpbGVQaWNfMSA9IHJlcXVpcmUoXCIuL3Byb2ZpbGVQaWNcIik7XG5jb25zdCBzdWJ0aXRsZV8xID0gcmVxdWlyZShcIi4vc3VidGl0bGVcIik7XG5jb25zdCB0aXRsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3RpdGxlXCIpKTtcbmNsYXNzIEhlYWRlciBleHRlbmRzIEN2Q29tcG9uZW50XzEuQ3ZDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidy1mdWxsIHB5LTUgcHgtMiBiZy1zbGF0ZS01MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidy00LzVcIj5cbiAgICAgICR7bmV3IHRpdGxlXzEuZGVmYXVsdCgpLnJlbmRlcigpfVxuICAgICAgJHtuZXcgc3VidGl0bGVfMS5TdWJ0aXRsZSh7IGNvbG9yOiBcImxpZ2h0XCIgfSkucmVuZGVyKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgICR7bmV3IHByb2ZpbGVQaWNfMS5Qcm9maWxlUGljKCkucmVuZGVyKCl9XG4gICAgPC9kaXY+YDtcbiAgICB9XG59XG5leHBvcnRzLkhlYWRlciA9IEhlYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qcm9maWxlUGljID0gdm9pZCAwO1xuY29uc3QgQ3ZDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJAL3V0aWxzL0N2Q29tcG9uZW50XCIpO1xuY2xhc3MgUHJvZmlsZVBpYyBleHRlbmRzIEN2Q29tcG9uZW50XzEuQ3ZDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxpbWcgY2xhc3M9XCJzZWxmLWVuZCBtbC1hdXRvIG1heC1oLTYwIG1heC13LVsyMDBweF0gc2hhZG93IHJvdW5kZWQtZnVsbFwiIHNyYz1cIiR7dGhpcy5jb25maWcucHJvZmlsZV9waWN9XCIgYWx0PVwiXCIgLz5cbiAgICBgO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvZmlsZVBpYyA9IFByb2ZpbGVQaWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VjdGlvblRpdGxlID0gdm9pZCAwO1xuY29uc3QgQ3ZDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJAL3V0aWxzL0N2Q29tcG9uZW50XCIpO1xuY2xhc3MgU2VjdGlvblRpdGxlIGV4dGVuZHMgQ3ZDb21wb25lbnRfMS5DdkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICA8aDQgY2xhc3M9XCJ0ZXh0LTJ4bCBweS0zIHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1zbGF0ZS01MDBcIj4ke3RoaXMucHJvcHMudGl0bGV9PC9oND5cbiAgICBgO1xuICAgIH1cbn1cbmV4cG9ydHMuU2VjdGlvblRpdGxlID0gU2VjdGlvblRpdGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN1YnRpdGxlID0gdm9pZCAwO1xuY29uc3QgQ3ZDb21wb25lbnRfMSA9IHJlcXVpcmUoXCJAL3V0aWxzL0N2Q29tcG9uZW50XCIpO1xuY2xhc3MgU3VidGl0bGUgZXh0ZW5kcyBDdkNvbXBvbmVudF8xLkN2Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGdldENvbG9yQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbG9yID09PSBcImxpZ2h0XCIgPyBcInRleHQtc2xhdGUtMzAwXCIgOiBcInRleHQtYmxhY2tcIjtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYDxoMyBjbGFzcz1cIiR7dGhpcy5nZXRDb2xvckNsYXNzKCl9IHRleHQtMnhsXCI+JHt0aGlzLmNvbmZpZy5wcm9mZXNzaW9ufTwvaDM+YDtcbiAgICB9XG59XG5leHBvcnRzLlN1YnRpdGxlID0gU3VidGl0bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGl0bGUgPSB2b2lkIDA7XG5jb25zdCBDdkNvbXBvbmVudF8xID0gcmVxdWlyZShcIkAvdXRpbHMvQ3ZDb21wb25lbnRcIik7XG5jbGFzcyBUaXRsZSBleHRlbmRzIEN2Q29tcG9uZW50XzEuQ3ZDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8aDEgY2xhc3M9XCJ0ZXh0LTZ4bCB0ZXh0LXNsYXRlLTMwMFwiPiR7dGhpcy5jb25maWcubmFtZX08L2gxPmA7XG4gICAgfVxufVxuZXhwb3J0cy5UaXRsZSA9IFRpdGxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGl0bGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3ZDb21wb25lbnQgPSB2b2lkIDA7XG5jb25zdCBjdl9jb25maWdfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAL2N2X2NvbmZpZy5qc29uXCIpKTtcbmNsYXNzIEN2Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY3ZfY29uZmlnX2pzb25fMS5kZWZhdWx0O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxufVxuZXhwb3J0cy5DdkNvbXBvbmVudCA9IEN2Q29tcG9uZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYm9keV8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9ib2R5XCIpO1xuY29uc3QgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2hlYWRlclwiKTtcbmNvbnN0IGN2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdlwiKTtcbmlmICghY3YpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWluIENWIGNvbnRhaW5lciBpcyB1bmRlZmluZWRcIik7XG59XG5jb25zdCBjb21wb25lbnRzID0gW25ldyBoZWFkZXJfMS5IZWFkZXIoKSwgbmV3IGJvZHlfMS5Cb2R5KCldO1xuY29tcG9uZW50cy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwucmVuZGVyKCkpO1xuICAgIGN2LmFwcGVuZENoaWxkKGZyYWdtZW50LmNoaWxkcmVuWzBdKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9