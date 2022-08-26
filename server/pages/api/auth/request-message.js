"use strict";
(() => {
var exports = {};
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 1544:
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ 1751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1544);
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);

const config = {
    domain: process.env.APP_DOMAIN || "ethereum.boilerplate",
    statement: "Please sign this message to confirm your identity.",
    uri: process.env.NEXTAUTH_URL || "http://localhost:3000",
    timeout: 60
};
async function handler(req, res) {
    const { address , chain , network  } = req.body;
    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({
        apiKey: process.env.MORALIS_API_KEY
    });
    try {
        const message = await moralis__WEBPACK_IMPORTED_MODULE_0___default().Auth.requestMessage({
            address,
            chain,
            network,
            ...config
        });
        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({
            error
        });
        console.error(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1751));
module.exports = __webpack_exports__;

})();