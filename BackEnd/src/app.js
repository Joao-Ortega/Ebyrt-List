"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var tasksRouter_1 = require("./Routes/tasksRouter");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        var accessControl = function (_req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl, express.json());
        this.app.use('/tasks', tasksRouter_1["default"]);
    };
    App.prototype.start = function (PORT) {
        this.app.listen(PORT, function () { return console.log("Listening on Port: ".concat(PORT)); });
    };
    return App;
}());
exports.App = App;
