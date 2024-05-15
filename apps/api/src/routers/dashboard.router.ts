import { DashboardController } from '@/controllers/dashboard.controller';
import { verifyToken } from '@/lib/jswt';
import { uploader } from '@/middlewares/uploader';
import { Router } from 'express';

export class DashboardRouter {
  private router: Router;
  private dashboardController: DashboardController;

  constructor() {
    this.dashboardController = new DashboardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/create-event',
      verifyToken,
      uploader('PIC', '/images').single('file'),
      this.dashboardController.createEventService,
    );

    this.router.get(
      '/get-event',
      verifyToken,
      this.dashboardController.getEventData,
    );
    // this.router.post()
  }

  getRouter(): Router {
    return this.router;
  }
}
