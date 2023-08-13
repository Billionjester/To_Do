// src/schemas/userSchema.ts
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar Date
        
    type Task {
        id: ID
        userId: String
        title: String
        description: String
        dueDate: Date
        completed: Boolean
    }

    input TaskInput {
        userId: String
        title: String
        description: String
        dueDate: Date
        completed: Boolean
    }

    type Query {
        tasks(userId: String!): [Task]
        task(id: ID!): Task
    }

    type Mutation {
        createTask(input: TaskInput!, userId: String): Task
        updateTask(id: ID!, input: TaskInput!): Task
        deleteTask(id: ID!): Task
    }
`;

export default typeDefs;
