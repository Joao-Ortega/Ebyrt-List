import { Pool } from 'mysql2/promise';
import { USER_TASKS_QUERY } from '../Queries/tasksQueries';

class TasksModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public allTasksFromUser = async (id: number) => {
    const [usersTask] = await this.connection.execute(USER_TASKS_QUERY, [id]);
    return usersTask;
  }
};

export default TasksModel;