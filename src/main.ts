import { App } from './server';

async function start() {
  const server = new App();

  server.run();
}
start();
