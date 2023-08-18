// src/index.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './schemas';
import resolvers from './resolvers';
// import { graphqlUploadExpress } from 'graphql-upload';
import path from 'path';
import i18n from 'i18n';
import cors from 'cors';
import https from 'https';
// import { HttpLink } from "@apollo/client";


dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT || '4000', 10);

// const link = new HttpLink({ uri: "/graphql" });


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({schema});

// Don't call applyMiddleware here. Instead, call server.start() and then apply middleware.
async function startApolloServer() {
    await server.start();
    // Apply Apollo Server middleware to Express app
    server.applyMiddleware({ app, cors: true });
}

// Configure i18n
i18n.configure({
    locales: ['en', 'fr'],
    defaultLocale: 'en', // Default locale can be overridden by the middleware
    directory: path.join(__dirname, 'locales'),
    autoReload: true,
    syncFiles: true,
});

app.use(cors());
app.use(i18n.init);

startApolloServer()
    .then(() => {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/graphql_db', {
            dbName: process.env.MONGODB_NAME || 'graphql',
        }).then(() => {
            app.listen(PORT, () => {
                console.log(`Server running on http://192.168.100.128:${PORT}/graphql`);
                console.log(`Server running on http://localhost:${PORT}/graphql`);
            });
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error.message);
        });
    })
    .catch((error) => {
        console.error('Error starting Apollo Server:', error.message);
    });

// app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

app.use(express.static(path.join(__dirname, '../public')));
