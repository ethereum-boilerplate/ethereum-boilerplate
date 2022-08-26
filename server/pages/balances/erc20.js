"use strict";
(() => {
var exports = {};
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 6477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ erc20),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/layouts/Default/index.ts + 1 modules
var Default = __webpack_require__(2601);
;// CONCATENATED MODULE: external "@moralisweb3/evm-utils"
const evm_utils_namespaceObject = require("@moralisweb3/evm-utils");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/utils/getErc20LogoAddress.ts
const getErc20LogoAddress = ({ blockchain ="ethereum" , address  })=>`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${blockchain}/assets/${address}/logo.png`;
/* harmony default export */ const utils_getErc20LogoAddress = (getErc20LogoAddress);

// EXTERNAL MODULE: external "moralis"
var external_moralis_ = __webpack_require__(1544);
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/format.ts
var format = __webpack_require__(6767);
;// CONCATENATED MODULE: ./src/components/templates/balances/ERC20/ERC20Balances.tsx




const ERC20Balances = ({ balances  })=>{
    const hoverTrColor = (0,external_chakra_ui_react_.useColorModeValue)("gray.100", "gray.700");
    (0,external_react_.useEffect)(()=>console.log("balances: ", balances), [
        balances
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                size: "lg",
                marginBottom: 6,
                children: "ERC20 Balances"
            }),
            balances?.length ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                border: "2px",
                borderColor: hoverTrColor,
                borderRadius: "xl",
                padding: "24px 18px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.TableContainer, {
                    w: "full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Table, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Thead, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Tr, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Token"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Value"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            isNumeric: true,
                                            children: "Address"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tbody, {
                                children: balances?.map(({ token , value  }, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Tr, {
                                        _hover: {
                                            bgColor: hoverTrColor
                                        },
                                        cursor: "pointer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.HStack, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Avatar, {
                                                            size: "sm",
                                                            src: token?.logo || "",
                                                            name: token?.name
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.VStack, {
                                                            alignItems: "flex-start",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                    as: "span",
                                                                    children: token?.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                                                                    fontSize: "xs",
                                                                    as: "span",
                                                                    children: token?.symbol
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                children: value
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Td, {
                                                isNumeric: true,
                                                children: (0,format/* getEllipsisTxt */.e)(token?.contractAddress || "")
                                            })
                                        ]
                                    }, `${token?.symbol}-${key}-tr`))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tfoot, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Tr, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Token"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            children: "Value"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Th, {
                                            isNumeric: true,
                                            children: "Address"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                children: "Looks Like you do not have any ERC20 tokens"
            })
        ]
    });
};
/* harmony default export */ const ERC20_ERC20Balances = (ERC20Balances);

;// CONCATENATED MODULE: ./src/components/templates/balances/ERC20/index.ts



;// CONCATENATED MODULE: ./pages/balances/erc20.tsx







const ERC20 = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Default/* Default */.g, {
        pageName: "ERC20 Balances",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ERC20_ERC20Balances, {
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
    const balances = await external_moralis_default().EvmApi.account.getTokenBalances({
        address: session?.user.address,
        chain: process.env.APP_CHAIN_ID
    });
    const tokensWithLogosAdded = balances.toJSON().map((balance)=>({
            ...balance,
            token: {
                ...balance.token,
                logo: utils_getErc20LogoAddress({
                    blockchain: "ethereum",
                    address: evm_utils_namespaceObject.EvmAddress.create(balance.token?.contractAddress || "").checksum
                })
            }
        }));
    return {
        props: {
            balances: JSON.parse(JSON.stringify(tokensWithLogosAdded))
        }
    };
};
/* harmony default export */ const erc20 = (ERC20);


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
var __webpack_exports__ = __webpack_require__.X(0, [952,954,601], () => (__webpack_exec__(6477)));
module.exports = __webpack_exports__;

})();