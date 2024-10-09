import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('x-auth-token');

  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });
}