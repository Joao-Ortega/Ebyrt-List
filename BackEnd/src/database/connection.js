"use strict";
exports.__esModule = true;
var mysql = require("mysql2/promise");
var dotenv = require("dotenv");
dotenv.config();
var connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER || 'ortega',
    password: process.env.DB_PASSWORD || 'JpOrtega@123'
});
exports["default"] = connection;
