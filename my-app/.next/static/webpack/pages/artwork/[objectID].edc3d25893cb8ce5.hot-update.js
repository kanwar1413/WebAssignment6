"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/artwork/[objectID]",{

/***/ "./components/ArtworkCardDetail.js":
/*!*****************************************!*\
  !*** ./components/ArtworkCardDetail.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtworkCardDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store.js\");\n/* harmony import */ var _lib_userData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/userData */ \"./lib/userData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ArtworkCardDetail(param) {\n    let { objectID } = param;\n    _s();\n    const [favouritesList, setFavourites] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_3__.favouritesAtom);\n    const [showAdded, setShowAdded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setShowAdded(favouritesList === null || favouritesList === void 0 ? void 0 : favouritesList.includes(objectID));\n    }, [\n        favouritesList\n    ]);\n    async function favouritesClicked() {\n        if (showAdded) {\n            setFavourites(await (0,_lib_userData__WEBPACK_IMPORTED_MODULE_4__.removeFromFavourites)(objectID));\n            setShowAdded(false);\n        } else {\n            setFavourites(await (0,_lib_userData__WEBPACK_IMPORTED_MODULE_4__.addToFavourites)(objectID));\n            setShowAdded(true);\n        }\n    }\n    ;\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\".concat(objectID));\n    if (error) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n            children: [\n                (data === null || data === void 0 ? void 0 : data.primaryImage) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Img, {\n                    variant: \"top\",\n                    src: data.primaryImageSmall\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                    lineNumber: 38,\n                    columnNumber: 22\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Text, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Date: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                (data === null || data === void 0 ? void 0 : data.objectDate) || \"N/A\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 76\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Classification: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this),\n                                (data === null || data === void 0 ? void 0 : data.classification) || \"N/A\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 89\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Medium: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this),\n                                (data === null || data === void 0 ? void 0 : data.medium) || \"N/A\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 74\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 81\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Artist: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this),\n                                (data === null || data === void 0 ? void 0 : data.artistDisplayName) || \"N/A\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 84\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"CreditLine: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                (data === null || data === void 0 ? void 0 : data.creditLine) || \"N/A\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 81\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Dimensions: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this),\n                                (data === null || data === void 0 ? void 0 : data.dimensions) || \"N/A\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 82\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: showAdded ? \"primary\" : \"outline-primary\",\n                            onClick: favouritesClicked,\n                            children: showAdded ? \"+ Favourite (added)\" : \"+ Favourite\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kanwa\\\\BTI sem4\\\\Assignment6\\\\my-app\\\\components\\\\ArtworkCardDetail.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ArtworkCardDetail, \"bvOyrCagQWtcE+kmYfLsyPWtjZA=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ArtworkCardDetail;\nvar _c;\n$RefreshReg$(_c, \"ArtworkCardDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydHdvcmtDYXJkRGV0YWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNPO0FBQ3RCO0FBQ087QUFDVTtBQUNSO0FBQ3FDO0FBRXhELFNBQVNVLGtCQUFrQixLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ3RDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxjQUFjLEdBQUdSLDhDQUFPQSxDQUFDQyxrREFBY0E7SUFDOUQsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTNDTSxnREFBU0EsQ0FBQztRQUNOUSxhQUFhSCwyQkFBQUEscUNBQUFBLGVBQWdCSSxRQUFRLENBQUNMO0lBQzFDLEdBQUc7UUFBQ0M7S0FBZTtJQUVuQixlQUFlSztRQUNYLElBQUlILFdBQVc7WUFDWEQsY0FBYyxNQUFNSixtRUFBb0JBLENBQUNFO1lBQ3pDSSxhQUFhO1FBQ2pCLE9BQU87WUFDSEYsY0FBYyxNQUFNTCw4REFBZUEsQ0FBQ0c7WUFDcENJLGFBQWE7UUFDakI7SUFDSjs7SUFFQSxNQUFNLEVBQUVHLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdmLCtDQUFNQSxDQUFDLG9FQUE2RSxPQUFUTztJQUVuRyxJQUFJUSxPQUFPO1FBQ1AsT0FBTztJQUNYO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNqQixvRkFBSUE7O2dCQUNBZ0IsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNRSxZQUFZLGtCQUNmLDhEQUFDbEIsb0ZBQUlBLENBQUNtQixHQUFHO29CQUFDQyxTQUFRO29CQUFNQyxLQUFLTCxLQUFLTSxpQkFBaUI7Ozs7O3lDQUNsRCw4REFBQ0M7Ozs7OzhCQUNOLDhEQUFDQTs7Ozs7OEJBQ0QsOERBQUN2QixvRkFBSUEsQ0FBQ3dCLElBQUk7O3NDQUNOLDhEQUFDeEIsb0ZBQUlBLENBQUN5QixJQUFJOzs4Q0FDTiw4REFBQ0M7OENBQU87Ozs7OztnQ0FBZ0JWLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVcsVUFBVSxLQUFJO2dDQUFNOzhDQUFDLDhEQUFDSjs7Ozs7OENBQ3BELDhEQUFDRzs4Q0FBTzs7Ozs7O2dDQUEwQlYsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNWSxjQUFjLEtBQUk7OENBQU0sOERBQUNMOzs7Ozs4Q0FDakUsOERBQUNHOzhDQUFPOzs7Ozs7Z0NBQWtCVixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1hLE1BQU0sS0FBSTtnQ0FBTTs4Q0FBQyw4REFBQ047Ozs7O2dDQUFLOzhDQUFDLDhEQUFDQTs7Ozs7OENBRXpELDhEQUFDRzs4Q0FBTzs7Ozs7O2dDQUFrQlYsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNYyxpQkFBaUIsS0FBSTs4Q0FBTSw4REFBQ1A7Ozs7OzhDQUU1RCw4REFBQ0c7OENBQU87Ozs7OztnQ0FBc0JWLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWUsVUFBVSxLQUFJOzhDQUFNLDhEQUFDUjs7Ozs7OENBQ3pELDhEQUFDRzs4Q0FBTzs7Ozs7O2dDQUFzQlYsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNZ0IsVUFBVSxLQUFJO2dDQUFNOzhDQUFDLDhEQUFDVDs7Ozs7Ozs7Ozs7c0NBRTlELDhEQUFDdEIsc0ZBQU1BOzRCQUFDbUIsU0FBU1IsWUFBWSxZQUFZOzRCQUFtQnFCLFNBQVNsQjtzQ0FDaEVILFlBQVksd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdEO0dBakR3Qko7O1FBQ29CTCwwQ0FBT0E7UUFpQnZCRCwyQ0FBTUE7OztLQWxCVk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnR3b3JrQ2FyZERldGFpbC5qcz83MDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSAnam90YWknO1xyXG5pbXBvcnQgeyBmYXZvdXJpdGVzQXRvbSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhZGRUb0Zhdm91cml0ZXMsIHJlbW92ZUZyb21GYXZvdXJpdGVzIH0gZnJvbSBcIkAvbGliL3VzZXJEYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnR3b3JrQ2FyZERldGFpbCh7IG9iamVjdElEIH0pIHtcclxuICAgIGNvbnN0IFtmYXZvdXJpdGVzTGlzdCwgc2V0RmF2b3VyaXRlc10gPSB1c2VBdG9tKGZhdm91cml0ZXNBdG9tKTtcclxuICAgIGNvbnN0IFtzaG93QWRkZWQsIHNldFNob3dBZGRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTaG93QWRkZWQoZmF2b3VyaXRlc0xpc3Q/LmluY2x1ZGVzKG9iamVjdElEKSk7XHJcbiAgICB9LCBbZmF2b3VyaXRlc0xpc3RdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmYXZvdXJpdGVzQ2xpY2tlZCgpe1xyXG4gICAgICAgIGlmIChzaG93QWRkZWQpIHtcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlcyhhd2FpdCByZW1vdmVGcm9tRmF2b3VyaXRlcyhvYmplY3RJRCkpO1xyXG4gICAgICAgICAgICBzZXRTaG93QWRkZWQoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEZhdm91cml0ZXMoYXdhaXQgYWRkVG9GYXZvdXJpdGVzKG9iamVjdElEKSk7XHJcbiAgICAgICAgICAgIHNldFNob3dBZGRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvb2JqZWN0cy8ke29iamVjdElEfWApO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YT8ucHJpbWFyeUltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtkYXRhLnByaW1hcnlJbWFnZVNtYWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgKSA6ICg8YnIgLz4pfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGF0ZTogPC9zdHJvbmc+e2RhdGE/Lm9iamVjdERhdGUgfHwgJ04vQSd9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNsYXNzaWZpY2F0aW9uOiA8L3N0cm9uZz57ZGF0YT8uY2xhc3NpZmljYXRpb24gfHwgJ04vQSd9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWVkaXVtOiA8L3N0cm9uZz57ZGF0YT8ubWVkaXVtIHx8ICdOL0EnfSA8YnIgLz4gPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFydGlzdDogPC9zdHJvbmc+e2RhdGE/LmFydGlzdERpc3BsYXlOYW1lIHx8ICdOL0EnfTxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DcmVkaXRMaW5lOiA8L3N0cm9uZz57ZGF0YT8uY3JlZGl0TGluZSB8fCAnTi9BJ308YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EaW1lbnNpb25zOiA8L3N0cm9uZz57ZGF0YT8uZGltZW5zaW9ucyB8fCAnTi9BJ30gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtzaG93QWRkZWQgPyBcInByaW1hcnlcIiA6IFwib3V0bGluZS1wcmltYXJ5XCJ9IG9uQ2xpY2s9e2Zhdm91cml0ZXNDbGlja2VkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBZGRlZCA/IFwiKyBGYXZvdXJpdGUgKGFkZGVkKVwiIDogXCIrIEZhdm91cml0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiQnV0dG9uIiwidXNlU1dSIiwidXNlQXRvbSIsImZhdm91cml0ZXNBdG9tIiwidXNlRWZmZWN0IiwiYWRkVG9GYXZvdXJpdGVzIiwicmVtb3ZlRnJvbUZhdm91cml0ZXMiLCJBcnR3b3JrQ2FyZERldGFpbCIsIm9iamVjdElEIiwiZmF2b3VyaXRlc0xpc3QiLCJzZXRGYXZvdXJpdGVzIiwic2hvd0FkZGVkIiwic2V0U2hvd0FkZGVkIiwiaW5jbHVkZXMiLCJmYXZvdXJpdGVzQ2xpY2tlZCIsImRhdGEiLCJlcnJvciIsInByaW1hcnlJbWFnZSIsIkltZyIsInZhcmlhbnQiLCJzcmMiLCJwcmltYXJ5SW1hZ2VTbWFsbCIsImJyIiwiQm9keSIsIlRleHQiLCJzdHJvbmciLCJvYmplY3REYXRlIiwiY2xhc3NpZmljYXRpb24iLCJtZWRpdW0iLCJhcnRpc3REaXNwbGF5TmFtZSIsImNyZWRpdExpbmUiLCJkaW1lbnNpb25zIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArtworkCardDetail.js\n"));

/***/ })

});