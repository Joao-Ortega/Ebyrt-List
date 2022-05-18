import { ITasksInfo } from "../interfaces/tasksInter";
import TasksModel from "../Models/tasksModel";

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
    return isInserted;
  }
};

export default TasksService;