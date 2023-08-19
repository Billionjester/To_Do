import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './schemas';
import resolvers from './resolvers';
import path from 'path';
import i18n from 'i18n';
import cors from 'cors';
import https from 'https';
import fs from 'fs';

dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT || '4000', 10);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({ schema });

async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app, cors: true });
}

i18n.configure({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    directory: path.join(__dirname, 'locales'),
    autoReload: true,
    syncFiles: true,
});

app.use(cors());
app.use(i18n.init);

// Specify absolute paths to SSL certificate and key files
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, '..', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'cert.pem')),
    passphrase: '1234',
    requestCert: false,
    rejectUnauthorized: false
};

startApolloServer()
    .then(() => {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/graphql_db', {
            dbName: process.env.MONGODB_NAME || 'graphql',
        }).then(() => {
            https.createServer(sslOptions, app).listen(PORT, () => {
                console.log(`Server running on https://192.168.100.227:${PORT}/graphql`);
            });
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error.message);
        });
    })
    .catch((error) => {
        console.error('Error starting Apollo Server:', error.message);
    });

app.use(express.static(path.join(__dirname, '../public')));
