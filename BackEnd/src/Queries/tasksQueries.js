"use strict";
exports.__esModule = true;
exports.UPDATE_STATUS_QUERY = exports.DELETE_TASK_QUERY = exports.INSERT_TASKS_QUERY = exports.USER_TASKS_QUERY = void 0;
exports.USER_TASKS_QUERY = "SELECT task, status FROM APP_TODO.Tasks\n  WHERE userId = ?";
exports.INSERT_TASKS_QUERY = "INSERT INTO APP_TODO.Tasks(userId, task, status)\n  VALUES(?, ?, ?)";
exports.DELETE_TASK_QUERY = "DELETE FROM APP_TODO.Tasks\n  WHERE id = ?;";
exports.UPDATE_STATUS_QUERY = "UPDATE APP_TODO.Tasks\n  SET status = ? WHERE id = ?;";
