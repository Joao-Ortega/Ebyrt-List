"use strict";
exports.__esModule = true;
var express_1 = require("express");
var tasksController_1 = require("../Controllers/tasksController");
var connection_1 = require("../database/connection");
var tasksModel_1 = require("../Models/tasksModel");
var tasksService_1 = require("../Services/tasksService");
var taskRouter = (0, express_1.Router)();
var tasksModel = new tasksModel_1["default"](connection_1["default"]);
console.log(process.env.DB_USER);
var tasksService = new tasksService_1["default"](tasksModel);
var tasksController = new tasksController_1["default"](tasksService);
// GET Requests
taskRouter.get('/:id', tasksController.tasksFromUser);
// POST Requests
taskRouter.post('/', tasksController.createTask);
// DELETE Requests
taskRouter["delete"]('/', tasksController.deleteTask);
exports["default"] = taskRouter;
