import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';

const port = process.env.PORT || 1010;

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'HI'
  }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use( logger('dev') );

server.start({port}, () => console.log(`Sever Run localhost:${port}`));