import { Pool } from 'mysql2/promise';
import { ITasksInfo } from '../interfaces/tasksInter';
import { INSERT_TASKS_QUERY, USER_TASKS_QUERY } from '../Queries/tasksQueries';

class TasksModel {
  private _connection: Pool;

  constructor(connection: Pool) {
    this._connection = connection;
  }

  public allTasksFromUser = async (id: number) => {
    
    const [usersTask] = await this._connection.execute(USER_TASKS_QUERY, [id]);
    console.log(usersTask);
    
    return usersTask;
  }

  public createTask = async ({ userId, task, status }: ITasksInfo) => {
    const [taskInserted] = await this._connection.execute(INSERT_TASKS_QUERY,
      [userId, task, status]);
      return taskInserted;
  }
};

export default TasksModel;