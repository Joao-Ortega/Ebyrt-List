import LoginModel from '../Models/loginModel';
import Code from 'http-status-codes';
import * as bcrypt from 'bcryptjs';
import { IInfosToCreate, IUserFromDb } from '../interfaces/userInter';

class LoginService {
  private _loginModel: LoginModel;

  private _bcryptTester;

  constructor(loginModel: LoginModel) {
    this._loginModel = loginModel;
    this._bcryptTester = bcrypt;
  }

  public checkPassword = (password: string, dbPass: string) => {
    return this._bcryptTester.compareSync(password, dbPass);
  }

  public checkLogin = async (email: string, password: string):Promise<number | IUserFromDb> => {
    const isUserFound = await this._loginModel.checkLogin(email);
    if (!isUserFound.length) return Code.NOT_FOUND;
    console.log("USUÁRIO", isUserFound);
    if (!this.checkPassword(password, isUserFound[0].password)) {
      return Code.BAD_REQUEST;
    }
    return isUserFound[0];
  }

  public hashPass = (pass: string) => {
    const salt = this._bcryptTester.genSaltSync(10);
    return this._bcryptTester.hashSync(pass, salt);
  }

  public registerUser = async ({ username, email, password }: IInfosToCreate):Promise<object> => {
    const treatedPass = this.hashPass(password);
    const objToRegister = { username, email, password: treatedPass };
    const isCreated = await this._loginModel.registerUser(objToRegister);
    return isCreated;
  }
};

export default LoginService;