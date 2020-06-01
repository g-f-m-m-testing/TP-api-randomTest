import * as express from 'express';
import Logger from './interfaces/logger.interface';
import { TYPES } from './types';
import 'reflect-metadata';
import envs from './utils/env';
import { container } from './inversify.config';

export class App {
  private app: express.Application;

  private injectedLogger = container.get<Logger>(TYPES.Logger).logger;

  constructor() {
    this.app = express();
  }

  public run(): void {
    const PORT = envs('PORT', 3001);
    this.app.listen(PORT, () => {
      this.injectedLogger.info(`App listening on port ${PORT}`);
    });
  }
}
