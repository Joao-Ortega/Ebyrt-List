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

taskRouter.get('/:id', tasksController.tasksFromUser);

export default taskRouter;