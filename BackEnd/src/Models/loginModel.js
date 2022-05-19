"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var loginQueries_1 = require("../Queries/loginQueries");
var http_status_codes_1 = require("http-status-codes");
var LoginModel = /** @class */ (function () {
    function LoginModel(connection) {
        var _this = this;
        this.checkLogin = function (email) { return __awaiter(_this, void 0, void 0, function () {
            var isUserFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._connection.execute(loginQueries_1.FIND_USER_QUERY, [email])];
                    case 1:
                        isUserFound = (_a.sent())[0];
                        return [2 /*return*/, isUserFound];
                }
            });
        }); };
        this.checkUser = function (username, email) { return __awaiter(_this, void 0, void 0, function () {
            var checkEmail, checkUsername;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._connection.execute(loginQueries_1.VERIFY_EMAIL_QUERY, [email])];
                    case 1:
                        checkEmail = (_a.sent())[0];
                        if (checkEmail.length)
                            return [2 /*return*/, true];
                        return [4 /*yield*/, this._connection.execute(loginQueries_1.VERIFY_USERNAME_QUERY, [username])];
                    case 2:
                        checkUsername = (_a.sent())[0];
                        if (checkUsername.length)
                            return [2 /*return*/, true];
                        return [2 /*return*/, false];
                }
            });
        }); };
        this.registerUser = function (_a) {
            var username = _a.username, email = _a.email, password = _a.password;
            return __awaiter(_this, void 0, void 0, function () {
                var alreadyExist, isCreated;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.checkUser(username, email)];
                        case 1:
                            alreadyExist = _b.sent();
                            if (alreadyExist)
                                return [2 /*return*/, http_status_codes_1["default"].CONFLICT];
                            return [4 /*yield*/, this._connection.execute(loginQueries_1.CREATE_USER_QUERY, [username, email, password])];
                        case 2:
                            isCreated = _b.sent();
                            return [2 /*return*/, isCreated];
                    }
                });
            });
        };
        this._connection = connection;
    }
    return LoginModel;
}());
;
exports["default"] = LoginModel;
