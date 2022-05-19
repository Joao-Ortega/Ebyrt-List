"use strict";
exports.__esModule = true;
exports.passValid = void 0;
var Joi = require("joi");
var http_status_codes_1 = require("http-status-codes");
var passValid = function (req, res, next) {
    var passwordTest = Joi.string().min(6).required();
    var password = req.body.password;
    if (password === undefined) {
        return res.status(http_status_codes_1["default"].UNAUTHORIZED).json({ message: '"password" is required' });
    }
    if (!password.length) {
        return res.status(http_status_codes_1["default"].UNAUTHORIZED).json({ message: '"password" is not allowed to be empty' });
    }
    if (passwordTest.validate(password).error) {
        return res.status(http_status_codes_1["default"].UNAUTHORIZED).json({ message: '"password" length must be 6 characters long' });
    }
    next();
};
exports.passValid = passValid;
