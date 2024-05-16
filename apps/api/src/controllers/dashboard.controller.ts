// import { registerService } from '@/services/auth/register.service';
import prisma from '@/prisma';
import { createEventService } from '@/services/dashboard/create-event.service';
import { getCategoriEvent } from '@/services/dashboard/get-category.services';
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
  // createevent controller
  async createEventService(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];
      console.log(files);

      if (!files) {
        throw new Error('No file uploaded');
      }
      if (files && files.length > 0) {
        const result = await createEventService(req.body, files[0]);
        console.log(result);
        res.status(200).send(result);
      }
    } catch (error) {
      next(error);
    }
  }

  async getEventCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getCategoriEvent(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
