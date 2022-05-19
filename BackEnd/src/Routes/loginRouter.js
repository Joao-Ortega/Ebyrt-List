"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginController_1 = require("../Controllers/loginController");
var connection_1 = require("../database/connection");
var emailValid_1 = require("../Middlewares/emailValid");
var passValid_1 = require("../Middlewares/passValid");
var loginModel_1 = require("../Models/loginModel");
var loginServices_1 = require("../Services/loginServices");
var loginRouter = (0, express_1.Router)();
var loginModel = new loginModel_1["default"](connection_1["default"]);
var loginService = new loginServices_1["default"](loginModel);
var loginController = new loginController_1["default"](loginService);
// POST Requests
loginRouter.post('/', emailValid_1.emailValid, passValid_1.passValid, loginController.checkLogin);
loginRouter.post('/register', emailValid_1.emailValid, passValid_1.passValid, loginController.registerUser);
exports["default"] = loginRouter;
