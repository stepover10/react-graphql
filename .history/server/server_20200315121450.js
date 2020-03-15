import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';
  
const port = process.env.PORT || 1010;
const server = new GraphQLServer({ schema });

server.express.use( logger('dev') );

server.start({port}, () => console.log(`😁 Sever Run localhost:${port}`));