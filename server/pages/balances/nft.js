"use strict";
(() => {
var exports = {};
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nft),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/layouts/Default/index.ts + 1 modules
var Default = __webpack_require__(2601);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/modules/index.ts + 23 modules
var modules = __webpack_require__(3361);
;// CONCATENATED MODULE: ./src/components/templates/balances/NFT/NFTBalances.tsx





const NFTBalances = ({ balances  })=>{
    (0,external_react_.useEffect)(()=>console.log("balances: ", balances), [
        balances
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                size: "lg",
                marginBottom: 6,
                children: "NFT Balances"
            }),
            balances?.length ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Grid, {
                templateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 6,
                children: balances.map((balance, key)=>/*#__PURE__*/ (0,external_react_.createElement)(modules/* NFTCard */.aU, {
                        ...balance,
                        key: key
                    }))
            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                children: "Looks Like you do not have any NFTs"
            })
        ]
    });
};
/* harmony default export */ const NFT_NFTBalances = (NFTBalances);

;// CONCATENATED MODULE: ./src/components/templates/balances/NFT/index.ts


// EXTERNAL MODULE: external "moralis"
var external_moralis_ = __webpack_require__(1544);
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_);
;// CONCATENATED MODULE: ./pages/balances/nft.tsx





const ERC20 = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Default/* Default */.g, {
        pageName: "NFT Balances",
        children: /*#__PURE__*/ jsx_runtime_.jsx(NFT_NFTBalances, {
            ...props
        })
    });
};
const getServerSideProps = async (context)=>{
    const session = await (0,react_.getSession)(context);
    await external_moralis_default().start({
        apiKey: process.env.MORALIS_API_KEY
    });
    if (!session?.user.address) {
        return {
            props: {
                error: "Connect your wallet first"
            }
        };
    }
    const balances = await external_moralis_default().EvmApi.account.getNFTs({
        address: session?.user.address,
        chain: process.env.APP_CHAIN_ID
    });
    // (balances.result).filter((balance)=> balance.result.)
    return {
        props: {
            balances: JSON.parse(JSON.stringify(balances.result))
        }
    };
};
/* harmony default export */ const nft = (ERC20);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1544:
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 5786:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 4738:
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,954,601], () => (__webpack_exec__(9125)));
module.exports = __webpack_exports__;

})();