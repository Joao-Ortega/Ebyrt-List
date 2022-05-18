export const USER_TASKS_QUERY = `SELECT task, status FROM APP_TODO.Tasks
  WHERE userId = ?`;
export const INSERT_TASKS_QUERY = `INSERT INTO APP_TODO.Tasks(userId, task, status)
  VALUES(?, ?, ?)`;
export const DELETE_TASK_QUERY = `DELETE FROM APP_TODO.Tasks
  WHERE id = ?;`
export const UPDATE_STATUS_QUERY = `UPDATE APP_TODO.Tasks
  SET status = ? WHERE id = ?;`