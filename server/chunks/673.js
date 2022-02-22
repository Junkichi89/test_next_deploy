"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DetailCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "@chakra-ui/button"
var button_ = __webpack_require__(692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(652);
;// CONCATENATED MODULE: ./src/components/atoms/button/EditButton.jsx





const EditButton = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
        backgroundColor: "green.300",
        borderRadius: "50px",
        border: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.8)",
        w: "112px",
        h: "40px",
        variant: "solid",
        _hover: {
            backgroundColor: 'green.400'
        },
        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
            as: bi_.BiPencil
        }),
        children: "Edit"
    }));
};
/* harmony default export */ const button_EditButton = (EditButton);

;// CONCATENATED MODULE: ./src/components/organisms/Todo/DetailCard.jsx



function DetailCard() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        p: 3,
        borderRadius: "15",
        border: "1px",
        borderColor: "blackAlpha.800",
        mr: "2",
        h: "480",
        w: "xl",
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                w: "full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h2",
                        size: "md",
                        bg: "green.300",
                        px: 3,
                        my: 1,
                        children: "Title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "lg",
                        children: "Text"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                w: "full",
                h: "full",
                minHeight: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h2",
                        size: "md",
                        bg: "green.300",
                        px: 3,
                        my: 1,
                        children: "Detail"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        h: "100%",
                        overflow: "scroll",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontSize: "lg",
                            children: "Text"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                pt: 3,
                w: "full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    justifyContent: "flex-end",
                    w: "full",
                    p: 4,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(button_EditButton, {
                            })
                        }),
                        "‌ ",
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stat, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.StatLabel, {
                                    fontSize: "sm",
                                    children: "Updated at"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.StatNumber, {
                                    fontSize: "md",
                                    children: "2022-01-01 18:55"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stat, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.StatLabel, {
                                    fontSize: "sm",
                                    children: "Created at"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.StatNumber, {
                                    fontSize: "md",
                                    children: "2022-01-01 18:55"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ })

};
;