import dotenv from 'dotenv';
import { GraphQlServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hellog = () => 'HI'
  }
}

const server = new GraphQlServer({typeDefs, resolvers, port})

server.start({port})