import dotenv from 'dotenv';
import { GraphQlServer } from 'graphql-yoga';

const port = process.env.PORT || 1001;

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

const server = new GraphQlServer({typeDefs, resolvers})

server.start({port}, () => `Sever Run ${port}`)