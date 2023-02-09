import { NextFunction, Request, Response } from 'express';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  if (err) {
    if (process.env.NODE_ENV === 'dev') {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ mensage: 'internal server error' });
    }
  }
}