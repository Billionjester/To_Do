// src/index.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './schemas';
import resolvers from './resolvers';
// import { graphqlUploadExpress } from 'graphql-upload';
import path from 'path';
import i18n from 'i18n';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

// Don't call applyMiddleware here. Instead, call server.start() and then apply middleware.
async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
}

// Configure i18n
i18n.configure({
    locales: ['en', 'fr'],
    defaultLocale: 'en', // Default locale can be overridden by the middleware
    directory: __dirname + '/locales',
    autoReload: true,
    syncFiles: true,
});

app.use(i18n.init);

startApolloServer()
    .then(() => {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/graphql_db', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: process.env.MONGODB_NAME || 'graphql',
        }).then(() => {
            app.listen(PORT, () => {
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
