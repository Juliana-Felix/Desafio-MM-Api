import { NextFunction, Request, Response } from 'express';

export default function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  res.status(404).json();
}