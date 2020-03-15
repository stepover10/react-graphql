import dotenv from 'dotenv';
import { GraphQlServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  hellog = () => 'HI'
}

const server = new GraphQlServer({typeDefs, resolvers})