"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
;// CONCATENATED MODULE: external "wagmi/providers/public"
const public_namespaceObject = require("wagmi/providers/public");
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/_app.tsx






const { provider , webSocketProvider  } = (0,external_wagmi_.configureChains)(external_wagmi_.defaultChains, [
    (0,public_namespaceObject.publicProvider)()
]);
const client = (0,external_wagmi_.createClient)({
    provider,
    webSocketProvider,
    autoConnect: true
});
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
};
const theme = (0,react_.extendTheme)({
    config
});
const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        resetCSS: true,
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_wagmi_.WagmiConfig, {
            client: client,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_auth_react_.SessionProvider, {
                session: pageProps.session,
                refetchInterval: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2039));
module.exports = __webpack_exports__;

})();