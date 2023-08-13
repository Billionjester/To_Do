import jwt from 'jsonwebtoken';

const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_SECRET || 'pwd123', {
        expiresIn: '1h', // Token will expire in 1 hour
    });
};

const verifyToken = (token: string): string | object => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || 'pwd123');
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export { generateToken, verifyToken };