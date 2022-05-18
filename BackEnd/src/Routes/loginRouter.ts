import { Router } from 'express';
import { emailValid } from '../Middlewares/emailValid';
import { passValid } from '../Middlewares/passValid';

const loginRouter = Router();

loginRouter.post('/', emailValid, passValid)