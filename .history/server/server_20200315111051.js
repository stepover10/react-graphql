import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';

console.log(process.env.PORT)

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

const server = new GraphQLServer({ typeDefs, resolvers })

server.start({port}, () => `Sever Run ${port}`)