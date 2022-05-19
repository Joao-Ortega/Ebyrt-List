import { Router } from 'express';
import LoginController from '../Controllers/loginController';
import connection from '../database/connection';
import { emailValid } from '../Middlewares/emailValid';
import { passValid } from '../Middlewares/passValid';
import LoginModel from '../Models/loginModel';
import LoginService from '../Services/loginServices';

const loginRouter = Router();

const loginModel = new LoginModel(connection);
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);

loginRouter.post(
  '/',
  emailValid,
  passValid,
  loginController.checkLogin
);

export default loginRouter;