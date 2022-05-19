import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { ITasksInfo } from '../interfaces/tasksInter';
import { DELETE_TASK_QUERY, INSERT_TASKS_QUERY, UPDATE_STATUS_QUERY, USER_TASKS_QUERY } from '../Queries/tasksQueries';

class TasksModel {
  private _connection: Pool;

  constructor(connection: Pool) {
    this._connection = connection;
  }

  public allTasksFromUser = async (id: number) => {
    
    const [usersTask] = await this._connection.execute<RowDataPacket[]>(USER_TASKS_QUERY, [id]);
    console.log(usersTask);
    
    return usersTask;
  }

  public createTask = async ({ userId, task, status }: ITasksInfo) => {
    const [{ insertId }] = await this._connection.execute<ResultSetHeader>(INSERT_TASKS_QUERY,
      [userId, task, status]);
      return insertId;
  }

  public deleteTask = async (id: number) => {
    const deletedTask = await this._connection.execute(DELETE_TASK_QUERY, [id]);
    return deletedTask;
  }

  public updateStatus = async (id: number, status: string) => {
    const taskUpdated = await this._connection.execute(UPDATE_STATUS_QUERY, [status, id]);
    return taskUpdated; 
  }
};

export default TasksModel;