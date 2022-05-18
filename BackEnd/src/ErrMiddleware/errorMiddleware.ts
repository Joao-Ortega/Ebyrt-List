import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import StatusCode from 'http-status-codes';

const errorMiddleware = async (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: err });
}

export default errorMiddleware;