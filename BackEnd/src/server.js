"use strict";
exports.__esModule = true;
var app_1 = require("./app");
require("dotenv/config");
var PORT = process.env.PORT || 3001;
new app_1.App().start(PORT);
