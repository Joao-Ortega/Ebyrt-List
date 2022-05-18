import { ITasksInfo } from '../interfaces/tasksInter';
import TasksModel from '../Models/tasksModel';
import status from 'http-status-codes';

class TasksService {
  private tasksModel: TasksModel;

  constructor(tasksModel: TasksModel) {
    this.tasksModel = tasksModel;
  }

  public tasksFromUser = async (id: number) => {
    const usersTasks = await this.tasksModel.allTasksFromUser(id);
    return usersTasks;
  }

  public createTasks = async (tasksInfos: ITasksInfo) => {
    const isInserted = await this.tasksModel.createTask(tasksInfos);
    if (!isInserted) return status.INTERNAL_SERVER_ERROR;
    return isInserted;
  }

  public deleteTask = async (id: number) => {
    const isDeleted = await this.tasksModel.deleteTask(id);
    return isDeleted;
  }
};

export default TasksService;