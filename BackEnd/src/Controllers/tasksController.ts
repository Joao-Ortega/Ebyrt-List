import { NextFunction, Request, Response } from 'express';
import TasksService from '../Services/tasksService';

class TasksController {
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  public tasksFromUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const returnedTasks = await this.tasksService.tasksFromUser(+id);
      return res.status(200).json(returnedTasks);
    } catch(err) {
      return next(err);
    }
  }
};

export default TasksController;