/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/DB/index.ts":
/*!********************************!*\
  !*** ./src/server/DB/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Query = exports.Connection = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nvar charity_1 = __webpack_require__(/*! ./queries/charity */ \"./src/server/DB/queries/charity.ts\");\r\nexports.Connection = mysql.createConnection(config_1.default.mysql);\r\nexports.Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        exports.Connection.query(query, values, function (err, results) {\r\n            if (err) {\r\n                return reject(err);\r\n            }\r\n            else {\r\n                return resolve(results);\r\n            }\r\n        });\r\n    });\r\n};\r\nexports.default = {\r\n    Charity: charity_1.default\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/DB/index.ts?");

/***/ }),

/***/ "./src/server/DB/queries/charity.ts":
/*!******************************************!*\
  !*** ./src/server/DB/queries/charity.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.post = exports.one = exports.all = void 0;\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/DB/index.ts\");\r\nvar rp = __webpack_require__(/*! request-promise */ \"request-promise\");\r\nexports.all = function () {\r\n    return index_1.Query(\"SELECT * from charities\");\r\n};\r\nexports.one = function (id) {\r\n    return index_1.Query(\"SELECT * from charities WHERE charities.id = ?\", [id]);\r\n};\r\nexports.post = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        try {\r\n            rp(\"https://api.data.charitynavigator.org/v2/Organizations?app_id=02dd71fc&app_key=2e6246f49b03b338c9a87646306bc87f&pageSize=1000&rated=true&state=AL\")\r\n                .then(function (res) { return JSON.parse(res); })\r\n                .then(function (res) {\r\n                return res.map(function (x) {\r\n                    index_1.Query(\"INSERT INTO charities (charity_name, category_name, category_id, cause_name, cause_id, city, streetAddress1, \\n               postal_code, websiteURL, mission, tagline, EIN, rating) \\n               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\", [\r\n                        x.charityName,\r\n                        x.category.categoryName,\r\n                        x.category.categoryID,\r\n                        x.cause.causeName,\r\n                        x.cause.causeID,\r\n                        x.mailingAddress.city,\r\n                        x.mailingAddress.streetAddress1,\r\n                        x.mailingAddress.postalCode,\r\n                        x.websiteURL,\r\n                        x.mission,\r\n                        x.tagLine,\r\n                        x.ein,\r\n                        x.rating\r\n                    ]);\r\n                });\r\n            });\r\n        }\r\n        catch (err) {\r\n            console.error(err);\r\n        }\r\n        ;\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nexports.default = {\r\n    all: exports.all,\r\n    one: exports.one,\r\n    post: exports.post\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/DB/queries/charity.ts?");

/***/ }),

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    mysql: {\r\n        host: 'localhost',\r\n        port: 3306,\r\n        user: 'root',\r\n        database: 'charitydb',\r\n        password: 'bluenile'\r\n    }\r\n};\r\n// import * as dotenv from 'dotenv';\r\n// const envFound =dotenv.config();\r\n// if(!envFound) {\r\n//     throw new Error('.env not found');\r\n// }\r\n// export default {\r\n//     mysql: {\r\n//     host: process.env.DB_HOST,\r\n//     user: process.env.DB_USER,\r\n//     password: process.env.DB_PASS,\r\n//     database: process.env.DB_SCHEMA\r\n// }\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/charities.ts":
/*!********************************************!*\
  !*** ./src/server/routes/api/charities.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar router = express_1.Router();\r\nvar DB_1 = __webpack_require__(/*! ../../DB */ \"./src/server/DB/index.ts\");\r\n// get all route is localhost:3000/charities\r\nrouter.get(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var orgs, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, DB_1.default.Charity.all()];\r\n            case 1:\r\n                orgs = _a.sent();\r\n                console.log(orgs);\r\n                res.json(orgs);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                next(err_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// get one route is localhost:3000/charities/id\r\nrouter.get(\"/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, org, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = Number(req.params.id);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, DB_1.default.Charity.one(id)];\r\n            case 2:\r\n                org = (_a.sent())[0];\r\n                res.json(org);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                err_2 = _a.sent();\r\n                next(err_2);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var err_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, DB_1.default.Charity.post()];\r\n            case 1:\r\n                _a.sent();\r\n                res.sendStatus(200);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _a.sent();\r\n                console.error(err_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// router.get('/:id?', async (req, res) => {\r\n//     const id = Number(req.params.id);\r\n//     try {\r\n//         if (id) {\r\n//             res.json({ id, msg: 'get one test'});\r\n//         } else {\r\n//             res.json({ msg: 'get all test'});\r\n//         }        \r\n//     } catch (error) {\r\n//         console.log(error);\r\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\r\n//     }\r\n// });\r\n// router.post('/', async (req, res) => {\r\n//     const newBody = { ... req.body };\r\n//     try {\r\n//         res.json({ msg: 'post test', bodyTest: newBody });\r\n//     } catch (error) {\r\n//         console.log(error);\r\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\r\n//     }\r\n// });\r\n// router.put('/:id', async (req, res) => {\r\n//     const id = Number(req.params.id);\r\n//     const editBody = { ... req.body };\r\n//     try {\r\n//         res.json({ msg: 'put test', testBody: editBody});\r\n//     } catch (error) {\r\n//         console.log(error);\r\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\r\n//     }\r\n// });\r\n// router.delete('/:id', async (req, res) => {\r\n//     const id = Number(req.params.id);\r\n//     try {\r\n//         res.json({ msg: 'delete test'})\r\n//     } catch (error) {\r\n//         console.log(error);\r\n//         res.status(500).json({ msg: 'internal server errrrrrr', error });\r\n//     }\r\n// });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/charities.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar charities_1 = __webpack_require__(/*! ./charities */ \"./src/server/routes/api/charities.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/charities', charities_1.default);\r\nexports.default = router;\r\n//this routes api index links to routes/index via api path\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar router = express_1.Router();\r\n//router.use();\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//copied code from router-template. CRUD typically not needed in indexes \r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/api', api_1.default);\r\nrouter.use('/auth', auth_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\nvar compression = __webpack_require__(/*! compression */ \"compression\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\n//compress req/res objects\r\napp.use(cors());\r\napp.use(compression());\r\napp.use(morgan('dev'));\r\napp.use(express.static(\"public\"));\r\napp.use(express.json());\r\napp.use(passport.initialize());\r\napp.use(routes_1.default);\r\n//front-end routes for server to catch\r\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ })

/******/ });