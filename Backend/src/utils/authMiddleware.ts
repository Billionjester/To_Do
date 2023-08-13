import { MiddlewareFn } from 'type-graphql';
import { Context } from '../types/context';
import { verifyToken } from './jwtUtils';

export const authMiddleware: MiddlewareFn<Context> = async ({ context }, next) => {
    const authorization = context.req.headers.authorization;

    if (!authorization) {
        throw new Error('Authorization header not provided');
    }

    try {
        const token = authorization.split(' ')[1];
        const decodedToken = verifyToken(token);
        context.userId = (decodedToken as any).userId; // Assuming your JWT payload has userId field

        return next();
    } catch (error) {
        throw new Error('Authentication failed');
    }
};