import { Container } from 'inversify';
import { TYPES } from './types';

import Logger from './interfaces/logger.interface';

import { CustomLogger } from './utils/logger';

const container = new Container();
container.bind<Logger>(TYPES.Logger).to(CustomLogger);
export { container };
