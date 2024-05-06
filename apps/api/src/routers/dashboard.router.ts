import { DashboardController } from '@/controllers/dashboard.controller';
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
      this.dashboardController.createEventService,
    );
    this.router.get('/get-event', this.dashboardController.getEventData);
  }

  getRouter(): Router {
    return this.router;
  }
}
