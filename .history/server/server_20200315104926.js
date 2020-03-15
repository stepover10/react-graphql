import dotenv from 'dotenv';
import { GraphQlServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello: String!
  }
`

const server = new GraphQlServer({})