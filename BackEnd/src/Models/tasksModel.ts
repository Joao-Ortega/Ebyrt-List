import { Pool } from 'mysql2/promise';
import { USER_TASKS_QUERY } from '../Queries/tasksQueries';

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
};

export default TasksModel;