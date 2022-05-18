import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER || 'ortega',
  password: process.env.DB_PASSWORD || 'JpOrtega@123',
});

export default connection;