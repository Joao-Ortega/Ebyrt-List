import * as express from 'express';
import taskRouter from './Routes/tasksRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl, express.json());
    this.app.use('/tasks', taskRouter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))
  }
}

export { App };