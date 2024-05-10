import cors from 'cors';
import express, {
  Express,
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from 'express';
import { PORT } from './config';
import { DashboardRouter } from './routers/dashboard.router';
import { AuthRouter } from './routers/auth.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    // const sampleRouter = new SampleRouter();
    const dashboardRouter = new DashboardRouter();
    const authRouter = new AuthRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    // this.app.use('/api/samples', sampleRouter.getRouter());
    this.app.use('/api/dashboard', dashboardRouter.getRouter());
    this.app.use('/api/auth', authRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
