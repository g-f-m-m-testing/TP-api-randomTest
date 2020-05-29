import * as express from 'express';
import envs from './utils/env';

const app = express();

const port = envs('port', 3000);

app.listen(port, () => {
  console.info(`App listening on port ${port}`);
});
