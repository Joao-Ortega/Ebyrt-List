export const USER_TASKS_QUERY = `SELECT task, status FROM APP_TODO.Tasks
WHERE userId = ?`;
export const INSERT_TASKS_QUERY = `INSERT INTO APP_TODO.Tasks(userId, task, status)
  VALUES(?, ?, ?)`;