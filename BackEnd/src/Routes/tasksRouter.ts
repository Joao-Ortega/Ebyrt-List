import { Router } from 'express';
import TasksController from '../Controllers/tasksController';
import connection from '../database/connection';
import TasksModel from '../Models/tasksModel';
import TasksService from '../Services/tasksService';

const taskRouter = Router();
const tasksModel = new TasksModel(connection);
console.log(process.env.DB_USER);
const tasksService = new TasksService(tasksModel);
const tasksController = new TasksController(tasksService);
// GET Requests
taskRouter.get('/:id', tasksController.tasksFromUser);
// POST Requests
taskRouter.post('/', tasksController.createTask);
// PUT Requests
taskRouter.put('/', tasksController.updateStatus);
// DELETE Requests
taskRouter.delete('/', tasksController.deleteTask);

export default taskRouter;