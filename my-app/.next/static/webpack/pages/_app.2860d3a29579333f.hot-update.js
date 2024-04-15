"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/authenticate.js":
/*!*****************************!*\
  !*** ./lib/authenticate.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateUser: function() { return /* binding */ authenticateUser; },\n/* harmony export */   getToken: function() { return /* binding */ getToken; },\n/* harmony export */   isAuthenticated: function() { return /* binding */ isAuthenticated; },\n/* harmony export */   readToken: function() { return /* binding */ readToken; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   removeToken: function() { return /* binding */ removeToken; }\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n\nfunction setToken(token) {\n    localStorage.setItem(\"access_token\", token);\n}\nfunction getToken() {\n    try {\n        return localStorage.getItem(\"access_token\");\n    } catch (err) {\n        return null;\n    }\n}\nfunction removeToken() {\n    localStorage.removeItem(\"access_token\");\n}\nfunction readToken() {\n    const token = getToken();\n    return token ? (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token) : null;\n}\nfunction isAuthenticated() {\n    const token = readToken();\n    return token ? true : false;\n}\nasync function authenticateUser(user, password) {\n    const res = await fetch(\"\".concat(\"https://fine-slug-galoshes.cyclic.app/api/user\", \"/login\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n            userName: user,\n            password: password\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        setToken(data.token);\n        return true;\n    } else {\n        throw new Error(data.message);\n    }\n}\nasync function registerUser(user, password, password2) {\n    const res = await fetch(\"\".concat(\"https://fine-slug-galoshes.cyclic.app/api/user\", \"/register\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n            userName: user,\n            password: password,\n            password2: password2\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return true;\n    } else {\n        throw new Error(data.message);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aGVudGljYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUM7QUFFbkMsU0FBU0MsU0FBU0MsS0FBSztJQUNuQkMsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQkY7QUFDekM7QUFFTyxTQUFTRztJQUNaLElBQUk7UUFDRixPQUFPRixhQUFhRyxPQUFPLENBQUM7SUFDOUIsRUFBRSxPQUFPQyxLQUFLO1FBQ1osT0FBTztJQUNUO0FBQ0o7QUFFTyxTQUFTQztJQUNaTCxhQUFhTSxVQUFVLENBQUM7QUFDNUI7QUFFTyxTQUFTQztJQUNWLE1BQU1SLFFBQVFHO0lBQ2QsT0FBT0gsUUFBUUYsc0RBQVNBLENBQUNFLFNBQVM7QUFDeEM7QUFFTyxTQUFTUztJQUNaLE1BQU1ULFFBQVFRO0lBQ2QsT0FBT1IsUUFBUSxPQUFPO0FBQzFCO0FBRU8sZUFBZVUsaUJBQWlCQyxJQUFJLEVBQUVDLFFBQVE7SUFDakQsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLEdBQW1DLE9BQWhDQyxnREFBK0IsRUFBQyxXQUFTO1FBQ2xFRyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxVQUFVWDtZQUFNQyxVQUFVQTtRQUFTO1FBQzFEVyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLE1BQU1YLElBQUlZLElBQUk7SUFFM0IsSUFBSVosSUFBSWEsTUFBTSxLQUFLLEtBQUs7UUFDdEIzQixTQUFTeUIsS0FBS3hCLEtBQUs7UUFDbkIsT0FBTztJQUNULE9BQU87UUFDTCxNQUFNLElBQUkyQixNQUFNSCxLQUFLSSxPQUFPO0lBQzlCO0FBQ0o7QUFFTyxlQUFlQyxhQUFhbEIsSUFBSSxFQUFFQyxRQUFRLEVBQUVrQixTQUFTO0lBQ3hELE1BQU1qQixNQUFNLE1BQU1DLE1BQU0sR0FBbUMsT0FBaENDLGdEQUErQixFQUFDLGNBQVk7UUFDckVHLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFVBQVVYO1lBQU1DLFVBQVVBO1lBQVVrQixXQUFXQTtRQUFVO1FBQ2hGUCxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLE1BQU1YLElBQUlZLElBQUk7SUFFM0IsSUFBSVosSUFBSWEsTUFBTSxLQUFLLEtBQUs7UUFDdEIsT0FBTztJQUNULE9BQU87UUFDTCxNQUFNLElBQUlDLE1BQU1ILEtBQUtJLE9BQU87SUFDOUI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvYXV0aGVudGljYXRlLmpzP2QxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmZ1bmN0aW9uIHNldFRva2VuKHRva2VuKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgdG9rZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkVG9rZW4oKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgICAgcmV0dXJuIHRva2VuID8gand0RGVjb2RlKHRva2VuKSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlYWRUb2tlbigpO1xyXG4gICAgcmV0dXJuIHRva2VuID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlVXNlcih1c2VyLCBwYXNzd29yZCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vbG9naW5gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJOYW1lOiB1c2VyLCBwYXNzd29yZDogcGFzc3dvcmQgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcih1c2VyLCBwYXNzd29yZCwgcGFzc3dvcmQyKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9yZWdpc3RlcmAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlck5hbWU6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCwgcGFzc3dvcmQyOiBwYXNzd29yZDIgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJqd3REZWNvZGUiLCJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsImVyciIsInJlbW92ZVRva2VuIiwicmVtb3ZlSXRlbSIsInJlYWRUb2tlbiIsImlzQXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0ZVVzZXIiLCJ1c2VyIiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTmFtZSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsInJlZ2lzdGVyVXNlciIsInBhc3N3b3JkMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/authenticate.js\n"));

/***/ })

});