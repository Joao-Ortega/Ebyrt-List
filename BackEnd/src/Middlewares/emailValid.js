"use strict";
exports.__esModule = true;
exports.emailValid = void 0;
var Joi = require("joi"); // PROBLEMA NA TRANSPILAÇÃO
var http_status_codes_1 = require("http-status-codes");
var emailValid = function (req, res, next) {
    var emailJoi = Joi.string().min(6).required();
    var emailRegex = /(.*)@(.*)\.(com)/;
    var email = req.body.email;
    if (email === undefined)
        return res.status(http_status_codes_1["default"].UNAUTHORIZED).json({ message: '"email" is required' });
    if (!email.length)
        return res.status(http_status_codes_1["default"].UNAUTHORIZED).json({ message: '"email" is not allowed to be empty' });
    if (!emailRegex.test(email) || emailJoi.validate(email).error) {
        return res.status(http_status_codes_1["default"].UNAUTHORIZED)
            .json({ message: '"email" must be a valid email' });
    }
    next();
};
exports.emailValid = emailValid;
