export const FIND_USER_QUERY = `SELECT * FROM APP_TODO.Users
WHERE email = ?;`;
export const CREATE_USER_QUERY = `INSERT INTO APP_TODO.Users (username, email, password)
VALUES (?, ?, ?);`;
export const VERIFY_EMAIL_QUERY = `SELECT email FROM APP_TODO.Users
WHERE email = ?;`
export const VERIFY_USERNAME_QUERY =  `SELECT username FROM APP_TODO.Users
WHERE username = ?;`