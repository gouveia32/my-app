"use strict";
(() => {
var exports = {};
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (true) global.prisma = prisma;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assetHandler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.js");

async function assetHandler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.findMany();
        res.status(200).json(posts);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({
          error: "Error fetching posts"
        });
      }

      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/posts.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Bvc3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCLElBQUlELHdEQUFKLEVBQWhDO0FBRUEsSUFBSSxNQUF3Q0UsTUFBTSxDQUFDRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUU1QyxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFZSxlQUFlRSxZQUFmLENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDakQsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWFGLEdBQW5COztBQUVBLFVBQVFFLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUMsS0FBSyxHQUFHLE1BQU1OLDhEQUFBLEVBQXBCO0FBQ0FJLFFBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixLQUFyQjtBQUNILE9BSEQsQ0FHRSxPQUFNSyxDQUFOLEVBQVM7QUFDUEMsUUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZCxFQUErQkYsQ0FBL0I7QUFDQVAsUUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBckI7QUFDSDs7QUFDRDs7QUFDSjtBQUNJVCxNQUFBQSxHQUFHLENBQUNVLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBVixNQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTSxHQUFoQixDQUFxQixVQUFTVixNQUFPLGNBQXJDO0FBQ0E7QUFiUjtBQWVIOzs7Ozs7Ozs7O0FDcEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmV0c2NhbGUtcHJpc21hLW5leHQvLi9saWIvcHJpc21hLmpzIiwid2VicGFjazovL3BsYW5ldHNjYWxlLXByaXNtYS1uZXh0Ly4vcGFnZXMvYXBpL3Bvc3RzLmpzIiwid2VicGFjazovL3BsYW5ldHNjYWxlLXByaXNtYS1uZXh0L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiLCJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhc3NldEhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIHRyeSB7ICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRNYW55KCk7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlcXVlc3QgZXJyb3JcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIGZldGNoaW5nIHBvc3RzXCIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIkdFVFwiXSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiYXNzZXRIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicG9zdHMiLCJwb3N0IiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=