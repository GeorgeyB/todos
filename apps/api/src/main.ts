import * as express from 'express';
import addGraphQLRoute from './graphql';

const app = express();

addGraphQLRoute(app);

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
