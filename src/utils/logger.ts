import { injectable } from 'inversify';
import * as winston from 'winston';
import Logger from '../interfaces/logger.interface';

@injectable()
export class CustomLogger implements Logger {
  public logger;

  constructor() {
    this.logger = winston.createLogger({
      format: this.logFormat,
      transports: [new winston.transports.Console()]
    });
  }

  private logFormat = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: [PID:${process.pid}]:${info.message}`)
  );
}
