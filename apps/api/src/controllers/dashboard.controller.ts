// import { registerService } from '@/services/auth/register.service';
import prisma from '@/prisma';
import { createEventService } from '@/services/dashboard/create-event.service';
import { NextFunction, Request, Response } from 'express';
export class DashboardController {
  async getEventData(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prisma.event.findMany();
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createEventService(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createEventService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
