webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/Guido/Desktop/final-project/frontend/pages/index.js";






var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var vendors = this.props.vendors; // decustructing the object

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-791524420" + " " + "title-hero container text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        className: "jsx-791524420",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Lorem. Ipsum. Doloret."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        className: "jsx-791524420",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Where next generations of ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-791524420",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "vendors"), " meet"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "jsx-791524420",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", " ")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-791524420" + " " + "vendors-wrapper container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, vendors.map(function (vendor) {
        var backgroundImage = {
          // backgroundImage: `url('/static/images/${vendor.shop_url}.jpeg')`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          backgroundSize: "cover",
          background: "linear-gradient( to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url('/static/images/".concat(vendor.shop_url, ".jpeg')")
        };
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: vendor.vendor_id,
          style: backgroundImage,
          className: "jsx-791524420" + " " + "vendor-box text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
          className: "jsx-791524420",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, vendor.name), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "".concat(vendor.shop_url),
          href: "/shop/?vendor_id=".concat(vendor.vendor_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-791524420",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "> Vendor Shop")));
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "791524420",
        __self: this
      }, "h1.jsx-791524420{text-transform:capitalize;}h2.jsx-791524420{color:white;font-weight:700;text-align:center;margin-top:240px;}h3.jsx-791524420{font-size:18px;color:#899095;position:relative;top:10px;font-weight:600;}.vendors-wrapper.jsx-791524420{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:60px;margin-bottom:180px;}.vendor-box.jsx-791524420{margin:8px;width:100%;border-radius:4px;box-shadow:0px 0px 10px 0px rgba(12,5,5,0.6);}.vendor-box.jsx-791524420 p.jsx-791524420{color:#fff !important;padding:0px 20px;}.title-hero.jsx-791524420{margin-top:120px;padding:40px;}.title-hero.jsx-791524420 span.jsx-791524420{font-size:32px;font-family:\"Dancing Script\",cursive;position:relative;bottom:5px;}.title-hero.jsx-791524420 p.jsx-791524420{width:70%;margin:0 auto;}a.jsx-791524420{color:#fff;}a.jsx-791524420:hover{-webkit-text-decoration:none;text-decoration:none;}@media only screen and (min-width:1200px){.vendor-box.jsx-791524420{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRXLEFBR3lDLEFBR2QsQUFNRyxBQVFGLEFBT0YsQUFNVyxBQUtMLEFBSUYsQUFNTCxBQUtDLEFBR1UsQUFLVCxVQVpFLEFBYWQsQ0FsQ1csQUEwQmIsQ0EvQ2tCLEdBTUYsQUE4QndCLEVBSnpCLEtBVkssQUFNRCxFQWVuQixFQTlDQSxFQUlvQixDQU1BLENBMEJwQixTQUpBLENBTmtELE1BckIvQixDQU1SLEdBMENYLEVBYm9CLElBNUJGLE9BTmxCLE9BbUNhLEVBNUJiLEVBSWlCLE9BeUJqQixJQWZBLDhDQVR5QixtR0FDUCxnQkFDSSxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL0d1aWRvL0Rlc2t0b3AvZmluYWwtcHJvamVjdC9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdmVuZG9yc1wiKTsgLy8gZ2V0IHRoZSB2ZW5kb3JzIEFQSSBmcm9tIGJhY2tlbmQgcm91dGVzL2luZGV4LmpzXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7IC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICByZXR1cm4geyB2ZW5kb3JzOiBkYXRhIH07IC8vIHJldHVybiB0aGUgcmVzdWx0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2ZW5kb3JzIH0gPSB0aGlzLnByb3BzOyAvLyBkZWN1c3RydWN0aW5nIHRoZSBvYmplY3RcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7Lyogc2hvdyBhbGwgdmVuZG9ycyBpbmZvcm1hdGlvbiAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGUtaGVybyBjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDM+TG9yZW0uIElwc3VtLiBEb2xvcmV0LjwvaDM+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgV2hlcmUgbmV4dCBnZW5lcmF0aW9ucyBvZiA8c3Bhbj52ZW5kb3JzPC9zcGFuPiBtZWV0XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUue1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlbmRvcnMtd3JhcHBlciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICB7dmVuZG9ycy5tYXAodmVuZG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IHtcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvc3RhdGljL2ltYWdlcy8ke3ZlbmRvci5zaG9wX3VybH0uanBlZycpYCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoIHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjApLCByZ2JhKDAsIDAsIDAsIDAuOCkpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzLyR7XG4gICAgICAgICAgICAgICAgdmVuZG9yLnNob3BfdXJsXG4gICAgICAgICAgICAgIH0uanBlZycpYFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17dmVuZG9yLnZlbmRvcl9pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2ZW5kb3ItYm94IHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17YmFja2dyb3VuZEltYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXt2ZW5kb3IubG9nb30gd2lkdGg9XCIxNTBweFwiIC8+ICovfVxuICAgICAgICAgICAgICAgIDxoMj57dmVuZG9yLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICB7LyogPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgey8qIGxpbmsgdG8gcmVsYXRpdmUgc2hvcCBwYWdlIGluZm9ybWF0aW9uICovfVxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBhcz17YCR7dmVuZG9yLnNob3BfdXJsfWB9XG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3Nob3AvP3ZlbmRvcl9pZD0ke3ZlbmRvci52ZW5kb3JfaWR9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YT4+IFZlbmRvciBTaG9wPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODk5MDk1O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZlbmRvcnMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZlbmRvci1ib3gge1xuICAgICAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDEyLCA1LCA1LCAwLjYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZlbmRvci1ib3ggcCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUtaGVybyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlLWhlcm8gc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZS1oZXJvIHAge1xuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgICAgLnZlbmRvci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:5000/vendors");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  vendors: data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.215b89fba48cf8a0e7af.hot-update.js.map