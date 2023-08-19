// src/schemas/userSchema.ts
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    enum Role{
        user
        admin
        guest
    }
    type User {
        age: Int
        id: ID
        email: String
        name: String
        password: String
        role: String
        language: String
        deletedUser: Boolean
        jwtToken: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
        login(email: String!, password: String!): User
    }

    type Mutation {
        createUser(name: String, email: String!, password: String!, role: Role!, language: String): User
        updateUser(id: ID!, name: String, email: String, age: Int): User
        deleteUser(id: ID!): User
        updateLanguage(id: ID!, language: String!): String
    }
`;

export default typeDefs;
