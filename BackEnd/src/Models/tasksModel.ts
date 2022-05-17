import { Pool } from 'mysql2';

class TasksModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAllTasks = async () => {
    const 
  }
}