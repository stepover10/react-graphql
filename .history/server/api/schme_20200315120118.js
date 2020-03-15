import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

/* fileLoader: Query 파일을 불러온다 */
const allTypes = fileLoader(path.join(__dirname, '/api/**/*.graphql'));