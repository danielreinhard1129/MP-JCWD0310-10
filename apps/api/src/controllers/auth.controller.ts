import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import { registerService } from '@/services/auth/register.service';
import { loginService } from '@/services/auth/login.service';

export class AuthController {
  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}