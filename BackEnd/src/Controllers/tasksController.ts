import { NextFunction, Request, Response } from 'express';
import TasksService from '../Services/tasksService';
import Code from 'http-status-codes';

class TasksController {
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  public tasksFromUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const returnedTasks = await this.tasksService.tasksFromUser(+id);
      return res.status(Code.OK).json(returnedTasks);
    } catch(err) {
      return next(err);
    }
  }

  public createTask = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, task, status } = req.body;
    try {
      const taskCreated = await this.tasksService.createTasks({ userId, task, status });

      return res.status(Code.CREATED).json(taskCreated);
    } catch(err) {
      return next(err);
    }
  }

  public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    try {
      const taskDeleted = await this.tasksService.deleteTask(+id);
      return res.status(Code.OK).json({ message: 'Task deleted successfully' });
    } catch(err) {
      return next(err);
    }
  }
};

export default TasksController;