import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IInfosToCreate, IUserFromDb } from '../interfaces/userInter';
import { CREATE_USER_QUERY, FIND_USER_QUERY, VERIFY_EMAIL_QUERY, VERIFY_USERNAME_QUERY } from '../Queries/loginQueries';
import Code from 'http-status-codes';

class LoginModel {
  private _connection: Pool;

  constructor(connection: Pool) {
    this._connection = connection;
  }

  public checkLogin = async (email: string): Promise<IUserFromDb[]> => {
    const [isUserFound] = await this._connection.execute<RowDataPacket[]>(FIND_USER_QUERY,
      [email]);
    return isUserFound as IUserFromDb[];
  }

  public checkUser = async (username: string, email: string):Promise<boolean> => {
    const [checkEmail] = await this._connection.execute<RowDataPacket[]>(VERIFY_EMAIL_QUERY, [email]);
    if (checkEmail.length) return true;
    const [checkUsername] = await this._connection.execute<RowDataPacket[]>(VERIFY_USERNAME_QUERY, [username]);
    if (checkUsername.length) return true;
    return false;
  }

  public registerUser = async ({ username, email, password }: IInfosToCreate): Promise<object | number> => {
    const alreadyExist = await this.checkUser(username, email);
    if (alreadyExist) return Code.CONFLICT;
    const isCreated = await this._connection.execute<ResultSetHeader>(CREATE_USER_QUERY,
      [username, email, password]);
    return isCreated;
  }
};

export default LoginModel;