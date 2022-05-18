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
};

export default TasksService;