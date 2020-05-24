/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Hello World, Im runing on Kubernetes and deployed via Azure Pipelines');
  res.send('Hello World, , Im runing on Kubernetes and deployed via Azure Pipelines');
});

app.get('/:name', (req, res) => {
  const name: string = req.param('name');
  console.log(`Hello ${name}`);
  res.send(`Hello ${name}`);
});

app.get('/message/:messages', (req, res) => {
  const { messages } = req.params;
  const primerrefactor = messages.split(',');
  console.info(`This are the messages to print ${messages}`);
  let response: any = {};

  for (const [i, message] of primerrefactor.entries()) {
    let index: number = i + 1;
    response[index] = message;
  }
  res.status(200).send(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
