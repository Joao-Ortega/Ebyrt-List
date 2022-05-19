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
// POST Requests
loginRouter.post(
  '/',
  emailValid,
  passValid,
  loginController.checkLogin
);

loginRouter.post(
  '/register',
  emailValid,
  passValid,
  loginController.registerUser
);

export default loginRouter;