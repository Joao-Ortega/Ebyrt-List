import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import Code from 'http-status-codes';

export const emailValid = (req: Request, res: Response, next: NextFunction) => {
  const emailJoi = Joi.string().min(6).required();
  const emailRegex = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/;
  const { email } = req.body;
  if (email === undefined) return res.status(Code.UNAUTHORIZED).json({ message: '"email" is required' });
  
  if (!email.length) return res.status(Code.UNAUTHORIZED).json({ message: '"email" is not allowed to be empty' });

  if (!emailRegex.test(email) || emailJoi.validate(email).error) {
    return res.status(Code.UNAUTHORIZED)
      .json({ message: '"email" must be a valid email' });
  }
  next();
}