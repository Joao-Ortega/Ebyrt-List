export const FIND_USER_QUERY = `SELECT * FROM APP_TODO.Users
WHERE email = ?;`;
export const CREATE_USER_QUERY = `INSERT INTO Users (username, email, password)
VALUES (?, ?, ?);`;