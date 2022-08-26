"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 2601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ Default_Default)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/modules/index.ts + 23 modules
var modules = __webpack_require__(3361);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/layouts/Default/Default.tsx




const Default = ({ children , pageName  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `${pageName} | ETH Boilerplate`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modules/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "container.lg",
                p: 3,
                marginTop: 100,
                as: "main",
                minH: "70vh",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modules/* Footer */.$_, {})
        ]
    });
/* harmony default export */ const Default_Default = (Default);

;// CONCATENATED MODULE: ./src/components/layouts/Default/index.ts



/***/ }),

/***/ 3361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$_": () => (/* reexport */ Footer_Footer),
  "h4": () => (/* reexport */ Header_Header),
  "aU": () => (/* reexport */ NFTCard_NFTCard)
});

// UNUSED EXPORTS: ConnectButton

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./src/components/elements/ColorModeButton/ColorModeButton.tsx



const ColorModeButton = ()=>{
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        size: "sm",
        onClick: toggleColorMode,
        children: colorMode === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {})
    });
};
/* harmony default export */ const ColorModeButton_ColorModeButton = (ColorModeButton);

;// CONCATENATED MODULE: ./src/components/elements/ColorModeButton/index.ts


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/elements/MoralisLogo/MoralisLogo.tsx



const MoralisLogo = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: colorMode === "dark" ? "/Moralis-DarkBG.svg" : "/Moralis-LightBG.svg",
        height: 45,
        width: 150,
        alt: "Moralis"
    });
};
/* harmony default export */ const MoralisLogo_MoralisLogo = (MoralisLogo);

;// CONCATENATED MODULE: ./src/components/elements/MoralisLogo/index.ts


// EXTERNAL MODULE: ./node_modules/@web3uikit/core/dist/index.js
var dist = __webpack_require__(5372);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/elements/navigation/SubNav/SubNav.tsx





const SubNav = ({ label , href , subLabel , logo  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href || "#",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            role: "group",
            display: "block",
            p: 2,
            rounded: "md",
            _hover: {
                bg: (0,react_.useColorModeValue)("green.50", "gray.900")
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                direction: "row",
                align: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist.I, {
                        logo: logo,
                        width: 46,
                        height: 46,
                        id: `${label}-navitem`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                transition: "all .3s ease",
                                _groupHover: {
                                    color: "green.400"
                                },
                                fontWeight: 500,
                                children: label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "sm",
                                children: subLabel
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        transition: "all .3s ease",
                        transform: "translateX(-10px)",
                        opacity: 0,
                        _groupHover: {
                            opacity: "100%",
                            transform: "translateX(0)"
                        },
                        justify: "flex-end",
                        align: "center",
                        flex: 1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Icon, {
                            color: "green.400",
                            w: 5,
                            h: 5,
                            as: icons_.ChevronRightIcon
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const SubNav_SubNav = (SubNav);

;// CONCATENATED MODULE: ./src/components/elements/navigation/SubNav/index.ts


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/elements/navigation/NavItem/NavItem.tsx






const NavItem = ({ label , children , href  })=>{
    const linkColor = (0,react_.useColorModeValue)("gray.600", "gray.400");
    const linkActiveColor = (0,react_.useColorModeValue)("gray.800", "white");
    const router = (0,router_.useRouter)();
    const isCurrentPath = router.asPath === href || href !== "/" && router.pathname.startsWith(href || "");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover, {
        trigger: "hover",
        placement: "bottom-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverTrigger, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        fontSize: 15,
                        fontWeight: 500,
                        color: isCurrentPath ? linkActiveColor : linkColor,
                        _hover: {
                            textDecoration: "none",
                            color: linkActiveColor
                        },
                        cursor: "pointer",
                        children: children ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                label,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {})
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: href || "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                _hover: {
                                    textDecoration: "none"
                                },
                                children: label
                            })
                        })
                    })
                })
            }),
            children && /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverContent, {
                border: 0,
                boxShadow: "xl",
                p: 4,
                rounded: "xl",
                minW: "sm",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                    children: children.map((child)=>/*#__PURE__*/ jsx_runtime_.jsx(SubNav_SubNav, {
                            ...child
                        }, child.label))
                })
            })
        ]
    });
};
/* harmony default export */ const NavItem_NavItem = (NavItem);

;// CONCATENATED MODULE: ./src/components/elements/navigation/NavItem/index.ts


;// CONCATENATED MODULE: ./src/components/elements/navigation/NavBar/paths.ts
const NAV_LINKS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Transactions",
        href: "/transactions"
    },
    {
        label: "Transfers",
        href: "/transfers",
        children: [
            {
                label: "ERC20",
                subLabel: "Get your ERC20 transfers",
                href: "/transfers/erc20",
                logo: "token"
            },
            {
                label: "NFT",
                subLabel: "Get your ERC721 an ERC1155 transfers",
                href: "/transfers/nft",
                logo: "lazyNft"
            }, 
        ]
    },
    {
        label: "Balances",
        href: "/balances",
        children: [
            {
                label: "ERC20",
                subLabel: "Get your ERC20 balances",
                href: "/balances/erc20",
                logo: "token"
            },
            {
                label: "NFT",
                subLabel: "Get your ERC721 an ERC1155 balances",
                href: "/balances/nft",
                logo: "pack"
            }, 
        ]
    }, 
];
/* harmony default export */ const paths = (NAV_LINKS);

;// CONCATENATED MODULE: ./src/components/elements/navigation/NavBar/NavBar.tsx




const NavBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
        gap: "15px",
        children: paths.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem_NavItem, {
                ...link
            }, `link-${link.label}`))
    });
};
/* harmony default export */ const NavBar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/components/elements/navigation/NavBar/index.ts


;// CONCATENATED MODULE: ./src/components/elements/navigation/index.ts




;// CONCATENATED MODULE: ./src/components/elements/index.ts




// EXTERNAL MODULE: external "wagmi/connectors/injected"
var injected_ = __webpack_require__(4738);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/utils/apiPost.ts

const apiPost = async (endpoint, params)=>{
    const result = await external_axios_default().post(`/api${endpoint}`, params, {
        headers: {
            "content-type": "application/json"
        }
    });
    return result.data;
};
/* harmony default export */ const utils_apiPost = (apiPost);

// EXTERNAL MODULE: ./src/utils/format.ts
var format = __webpack_require__(6767);
;// CONCATENATED MODULE: ./src/components/modules/ConnectButton/ConnectButton.tsx







const ConnectButton = ()=>{
    const { connectAsync  } = (0,external_wagmi_.useConnect)({
        connector: new injected_.InjectedConnector()
    });
    const { disconnectAsync  } = (0,external_wagmi_.useDisconnect)();
    const { isConnected  } = (0,external_wagmi_.useAccount)();
    const { signMessageAsync  } = (0,external_wagmi_.useSignMessage)();
    const toast = (0,react_.useToast)();
    const { data  } = (0,external_next_auth_react_.useSession)();
    const handleAuth = async ()=>{
        if (isConnected) {
            await disconnectAsync();
        }
        try {
            const { account , chain  } = await connectAsync();
            const userData = {
                address: account,
                chain: chain.id,
                network: "evm"
            };
            const { message  } = await utils_apiPost("/auth/request-message", userData);
            const signature = await signMessageAsync({
                message
            });
            await (0,external_next_auth_react_.signIn)("credentials", {
                message,
                signature,
                callbackUrl: "/"
            });
        } catch (e) {
            toast({
                title: "Oops, something is wrong...",
                description: e?.message,
                status: "error",
                position: "top-right",
                isClosable: true
            });
        }
    };
    const handleDisconnect = async ()=>{
        await disconnectAsync();
        (0,external_next_auth_react_.signOut)({
            callbackUrl: "/"
        });
    };
    if (data?.user) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            onClick: handleDisconnect,
            cursor: "pointer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                    size: "xs"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontWeight: "medium",
                    children: (0,format/* getEllipsisTxt */.e)(data.user.address)
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        size: "sm",
        onClick: handleAuth,
        colorScheme: "blue",
        children: "Connect Wallet"
    });
};
/* harmony default export */ const ConnectButton_ConnectButton = (ConnectButton);

;// CONCATENATED MODULE: ./src/components/modules/ConnectButton/index.ts


;// CONCATENATED MODULE: ./src/components/modules/Header/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        borderBottom: "1px",
        borderBottomColor: "chakra-border-color",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            maxW: "container.xl",
            p: "10px",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                justify: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MoralisLogo_MoralisLogo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar_NavBar, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                        gap: "10px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ConnectButton_ConnectButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(ColorModeButton_ColorModeButton, {})
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/modules/Header/index.ts


;// CONCATENATED MODULE: ./src/components/modules/Footer/Footer.tsx



const links = {
    github: "https://github.com/ethereum-boilerplate/ethereum-boilerplate/",
    forum: "https://forum.moralis.io/",
    moralis: "https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
};
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        textAlign: "center",
        w: "full",
        p: 6,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                children: [
                    "⭐️ Please star this",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        href: links.github,
                        isExternal: true,
                        alignItems: "center",
                        children: [
                            "boilerplate ",
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.ExternalLinkIcon, {})
                        ]
                    }),
                    ", every star makes us very happy!"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                children: [
                    "\uD83D\uDE4B You have questions? Ask them on the",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        href: links.forum,
                        isExternal: true,
                        alignItems: "center",
                        children: [
                            "Moralis forum ",
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.ExternalLinkIcon, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                children: [
                    "\uD83D\uDCD6 Read more about",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        href: links.moralis,
                        isExternal: true,
                        alignItems: "center",
                        children: [
                            "Moralis ",
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.ExternalLinkIcon, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/modules/Footer/index.ts


// EXTERNAL MODULE: ./node_modules/@web3uikit/icons/dist/index.es.js
var index_es = __webpack_require__(5821);
;// CONCATENATED MODULE: ./src/utils/resolveIPFS.ts
const resolveIPFS = (url)=>{
    if (!url || !url.includes("ipfs://")) {
        return url;
    }
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
};

;// CONCATENATED MODULE: ./src/components/modules/NFTCard/NFTCard.tsx




const NFTCard = ({ amount , contractType , name , symbol , metadata  })=>{
    const bgColor = (0,react_.useColorModeValue)("none", "gray.700");
    const borderColor = (0,react_.useColorModeValue)("gray.200", "gray.700");
    const descBgColor = (0,react_.useColorModeValue)("gray.100", "gray.600");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        bgColor: bgColor,
        padding: 3,
        borderRadius: "xl",
        borderWidth: "1px",
        borderColor: borderColor,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                maxHeight: "260px",
                overflow: "hidden",
                borderRadius: "xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: resolveIPFS(metadata?.image),
                    alt: "nft",
                    minH: "260px",
                    minW: "260px",
                    boxSize: "100%",
                    objectFit: "fill"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                mt: "1",
                fontWeight: "semibold",
                as: "h4",
                noOfLines: 1,
                marginTop: 2,
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "h4",
                        noOfLines: 1,
                        fontWeight: "medium",
                        fontSize: "smaller",
                        children: contractType
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(index_es/* Eth */.e8, {
                        fontSize: "20px"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: 2,
                spacing: 4,
                bgColor: descBgColor,
                padding: 2.5,
                borderRadius: "xl",
                marginTop: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "h4",
                                noOfLines: 1,
                                fontWeight: "medium",
                                fontSize: "sm",
                                children: "Symbol"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "h4",
                                noOfLines: 1,
                                fontSize: "sm",
                                children: symbol
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "h4",
                                noOfLines: 1,
                                fontWeight: "medium",
                                fontSize: "sm",
                                children: "Amount"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "h4",
                                noOfLines: 1,
                                fontSize: "sm",
                                children: amount
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const NFTCard_NFTCard = (NFTCard);

;// CONCATENATED MODULE: ./src/components/modules/NFTCard/index.ts



;// CONCATENATED MODULE: ./src/components/modules/index.ts






/***/ }),

/***/ 6767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getEllipsisTxt)
/* harmony export */ });
/**
 * Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @returns {string}
 */ const getEllipsisTxt = (str, n = 6)=>{
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
};


/***/ })

};
;