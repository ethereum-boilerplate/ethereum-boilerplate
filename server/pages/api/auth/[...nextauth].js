"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 1544:
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
// EXTERNAL MODULE: external "moralis"
var external_moralis_ = __webpack_require__(1544);
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts



/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        credentials_default()({
            name: "MoralisAuth",
            credentials: {
                message: {
                    label: "Message",
                    type: "text",
                    placeholder: "0x0"
                },
                signature: {
                    label: "Signature",
                    type: "text",
                    placeholder: "0x0"
                }
            },
            async authorize (credentials) {
                try {
                    const { message , signature  } = credentials;
                    await external_moralis_default().start({
                        apiKey: process.env.MORALIS_API_KEY
                    });
                    const { address , profileId , expirationTime  } = (await external_moralis_default().Auth.verify({
                        message,
                        signature,
                        network: "evm"
                    })).raw;
                    const user = {
                        address,
                        profileId,
                        expirationTime,
                        signature
                    };
                    return user;
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    return null;
                }
            }
        }), 
    ],
    callbacks: {
        async jwt ({ token , user  }) {
            // eslint-disable-next-line no-unused-expressions
            user && (token.user = user);
            return token;
        },
        async session ({ session , token  }) {
            session.expires = token.user.expirationTime;
            session.user = token.user;
            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(409));
module.exports = __webpack_exports__;

})();