import { NextFunction, Request, Response } from 'express';
import LoginService from '../Services/loginServices';
import Code from 'http-status-codes';
import { IUserFromDb } from '../interfaces/userInter';

class LoginController {
  private _loginService: LoginService;

  constructor(loginService: LoginService) {
    this._loginService = loginService;
  }

  public checkLogin = async (req: Request, res: Response, next: NextFunction):Promise<Response | void> => {
    const { email, password } = req.body;
    
    try {
      const userFromDb = await this._loginService.checkLogin(email, password);
      if (userFromDb === 404) {
        return res.status(userFromDb).json({ message: 'User not found' });
      }
      if (userFromDb === 400) {
        return res.status(userFromDb).json({ message: 'Wrong Passsword' });
      }
      const { id, username } = userFromDb as IUserFromDb;
      return res.status(Code.OK).json({ id, username, email });
    } catch(err) {
      return next(err);
    }
  }

  public registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
    ):Promise<Response | void> => {
      const { username, email, password } = req.body;
      try {
        const userCreated = await this._loginService.registerUser({ username, email, password });        
        typeof userCreated === 'number' ? res.status(Code.CONFLICT).json({ message: 'Email or Username already in use!' })
          : res.status(Code.CREATED).json(userCreated);
      } catch(err) {
        return next(err);
      }
  }
};

export default LoginController;