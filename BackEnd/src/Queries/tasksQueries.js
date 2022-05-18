"use strict";
exports.__esModule = true;
exports.INSERT_TASKS_QUERY = exports.USER_TASKS_QUERY = void 0;
exports.USER_TASKS_QUERY = "SELECT task, status FROM APP_TODO.Tasks\nWHERE userId = ?";
exports.INSERT_TASKS_QUERY = "INSERT INTO APP_TODO.Tasks(userId, task, status)\n  VALUES(?, ?, ?)";
