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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateUser: function() { return /* binding */ authenticateUser; },\n/* harmony export */   getToken: function() { return /* binding */ getToken; },\n/* harmony export */   isAuthenticated: function() { return /* binding */ isAuthenticated; },\n/* harmony export */   readToken: function() { return /* binding */ readToken; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   removeToken: function() { return /* binding */ removeToken; }\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n\nfunction setToken(token) {\n    localStorage.setItem(\"access_token\", token);\n}\nfunction getToken() {\n    try {\n        return localStorage.getItem(\"access_token\");\n    } catch (err) {\n        return null;\n    }\n}\nfunction removeToken() {\n    localStorage.removeItem(\"access_token\");\n}\nfunction readToken() {\n    try {\n        const token = getToken();\n        return token ? jwtDecode(token) : null;\n    } catch (err) {\n        return null;\n    }\n}\nfunction isAuthenticated() {\n    const token = readToken();\n    return token ? true : false;\n}\nasync function authenticateUser(user, password) {\n    const res = await fetch(\"\".concat(\"https://fine-slug-galoshes.cyclic.app/api/user\", \"/login\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n            userName: user,\n            password: password\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        setToken(data.token);\n        return true;\n    } else {\n        throw new Error(data.message);\n    }\n}\nasync function registerUser(user, password, password2) {\n    const res = await fetch(\"\".concat(\"https://fine-slug-galoshes.cyclic.app/api/user\", \"/register\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n            userName: user,\n            password: password,\n            password2: password2\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return true;\n    } else {\n        throw new Error(data.message);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aGVudGljYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFFcEMsU0FBU0MsU0FBU0MsS0FBSztJQUNuQkMsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQkY7QUFDekM7QUFFTyxTQUFTRztJQUNaLElBQUk7UUFDRixPQUFPRixhQUFhRyxPQUFPLENBQUM7SUFDOUIsRUFBRSxPQUFPQyxLQUFLO1FBQ1osT0FBTztJQUNUO0FBQ0o7QUFFTyxTQUFTQztJQUNaTCxhQUFhTSxVQUFVLENBQUM7QUFDNUI7QUFFTyxTQUFTQztJQUNaLElBQUk7UUFDRixNQUFNUixRQUFRRztRQUNkLE9BQU9ILFFBQVFTLFVBQVVULFNBQVM7SUFDcEMsRUFBRSxPQUFPSyxLQUFLO1FBQ1osT0FBTztJQUNUO0FBQ0o7QUFFTyxTQUFTSztJQUNaLE1BQU1WLFFBQVFRO0lBQ2QsT0FBT1IsUUFBUSxPQUFPO0FBQzFCO0FBRU8sZUFBZVcsaUJBQWlCQyxJQUFJLEVBQUVDLFFBQVE7SUFDakQsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLEdBQW1DLE9BQWhDQyxnREFBK0IsRUFBQyxXQUFTO1FBQ2xFRyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxVQUFVWDtZQUFNQyxVQUFVQTtRQUFTO1FBQzFEVyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLE1BQU1YLElBQUlZLElBQUk7SUFFM0IsSUFBSVosSUFBSWEsTUFBTSxLQUFLLEtBQUs7UUFDdEI1QixTQUFTMEIsS0FBS3pCLEtBQUs7UUFDbkIsT0FBTztJQUNULE9BQU87UUFDTCxNQUFNLElBQUk0QixNQUFNSCxLQUFLSSxPQUFPO0lBQzlCO0FBQ0o7QUFFTyxlQUFlQyxhQUFhbEIsSUFBSSxFQUFFQyxRQUFRLEVBQUVrQixTQUFTO0lBQ3hELE1BQU1qQixNQUFNLE1BQU1DLE1BQU0sR0FBbUMsT0FBaENDLGdEQUErQixFQUFDLGNBQVk7UUFDckVHLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFVBQVVYO1lBQU1DLFVBQVVBO1lBQVVrQixXQUFXQTtRQUFVO1FBQ2hGUCxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLE1BQU1YLElBQUlZLElBQUk7SUFFM0IsSUFBSVosSUFBSWEsTUFBTSxLQUFLLEtBQUs7UUFDdEIsT0FBTztJQUNULE9BQU87UUFDTCxNQUFNLElBQUlDLE1BQU1ILEtBQUtJLE9BQU87SUFDOUI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvYXV0aGVudGljYXRlLmpzP2QxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5mdW5jdGlvbiBzZXRUb2tlbih0b2tlbikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIHRva2VuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VuKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFRva2VuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICByZXR1cm4gdG9rZW4gPyBqd3REZWNvZGUodG9rZW4pIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcclxuICAgIGNvbnN0IHRva2VuID0gcmVhZFRva2VuKCk7XHJcbiAgICByZXR1cm4gdG9rZW4gPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKHVzZXIsIHBhc3N3b3JkKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9sb2dpbmAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlck5hbWU6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNldFRva2VuKGRhdGEudG9rZW4pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKHVzZXIsIHBhc3N3b3JkLCBwYXNzd29yZDIpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3JlZ2lzdGVyYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyTmFtZTogdXNlciwgcGFzc3dvcmQ6IHBhc3N3b3JkLCBwYXNzd29yZDI6IHBhc3N3b3JkMiB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImp3dF9kZWNvZGUiLCJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsImVyciIsInJlbW92ZVRva2VuIiwicmVtb3ZlSXRlbSIsInJlYWRUb2tlbiIsImp3dERlY29kZSIsImlzQXV0aGVudGljYXRlZCIsImF1dGhlbnRpY2F0ZVVzZXIiLCJ1c2VyIiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTmFtZSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsInJlZ2lzdGVyVXNlciIsInBhc3N3b3JkMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/authenticate.js\n"));

/***/ })

});