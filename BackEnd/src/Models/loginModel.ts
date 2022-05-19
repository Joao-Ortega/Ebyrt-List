import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IInfosToCreate, IUserFromDb } from '../interfaces/userInter';
import { CREATE_USER_QUERY, FIND_USER_QUERY } from '../Queries/loginQueries';

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

  public registerUser = async ({ username, email, password }: IInfosToCreate): Promise<object> => {
    const isCreated = await this._connection.execute<ResultSetHeader>(CREATE_USER_QUERY,
      [username, email, password]);
    return isCreated;
  }
};

export default LoginModel;