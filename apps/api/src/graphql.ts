import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { mergeSchemas } from '@graphql-tools/schema';

import { toDoSchema } from './app/todos';

export default function addGraphQLRoute(app: express.Express) {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: mergeSchemas({
        schemas: [toDoSchema],
      }),
    })
  );
}
