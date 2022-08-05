import { makeExecutableSchema } from '@graphql-tools/schema';

import prisma from '../prisma';

const typeDefs = `
  type ToDo {
    id: Int
    body: String
    done: Boolean
  }

  type Query {
    toDos: [ToDo!]!
  }

  type Mutation{
    createToDo(body: String!): ToDo!
    updateToDo(id: Int! body: String!): ToDo!
    markToDoDone(id: Int!): ToDo!
    markToDoUndone(id: Int!): ToDo!
    deleteToDo(id: Int!): ToDo!
  }
`;

const resolvers = {
  Query: {
    toDos: () => prisma.toDo.findMany(),
  },
  Mutation: {
    createToDo: (_, { body }) => prisma.toDo.create({ data: { body } }),
    updateToDo: (_, { id, body }) =>
      prisma.toDo.update({
        where: { id },
        data: { body },
      }),
    markToDoDone: (_, { id }) =>
      prisma.toDo.update({
        where: { id },
        data: { done: true },
      }),
    markToDoUndone: (_, { id }) =>
      prisma.toDo.update({
        where: { id },
        data: { done: false },
      }),
    deleteToDo: (_, { id }) => prisma.toDo.delete({ where: { id } }),
  },
};

export const toDoSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
