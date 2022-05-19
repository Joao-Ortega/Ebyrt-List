"use strict";
exports.__esModule = true;
exports.VERIFY_USERNAME_QUERY = exports.VERIFY_EMAIL_QUERY = exports.CREATE_USER_QUERY = exports.FIND_USER_QUERY = void 0;
exports.FIND_USER_QUERY = "SELECT * FROM APP_TODO.Users\nWHERE email = ?;";
exports.CREATE_USER_QUERY = "INSERT INTO APP_TODO.Users (username, email, password)\nVALUES (?, ?, ?);";
exports.VERIFY_EMAIL_QUERY = "SELECT email FROM APP_TODO.Users\nWHERE email = ?;";
exports.VERIFY_USERNAME_QUERY = "SELECT username FROM APP_TODO.Users\nWHERE username = ?;";
