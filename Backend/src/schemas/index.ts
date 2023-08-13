// src/schemas/index.ts
import { gql } from 'apollo-server-express';
import userSchema from './userSchema';
import taskSchema from './taskSchema';

const typeDefs = gql`
    ${userSchema}
    ${taskSchema}
`;

export default typeDefs;
