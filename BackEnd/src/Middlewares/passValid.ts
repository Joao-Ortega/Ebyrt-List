import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import Code from 'http-status-codes';

export const passValid = (req: Request, res: Response, next: NextFunction) => {
  const passwordTest = Joi.string().min(6).max(15).required();
  const { password } = req.body;
  
  if (password === undefined) {
    return res.status(Code.UNAUTHORIZED).json({ message: '"password" is required' });
  }

  if (!password.length) {
    return res.status(Code.UNAUTHORIZED).json({ message: '"password" is not allowed to be empty' });
  }

  if (passwordTest.validate(password).error) {
    return res.status(Code.UNAUTHORIZED).json({ message: '"password" length must be 6 characters long' });
  }

  next();
}