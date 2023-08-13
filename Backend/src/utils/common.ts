import bcrypt from 'bcrypt';
import { Context, UserInput } from '../types/context';

const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const isValidPassword = (password: string): boolean => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/
    return passwordPattern.test(password)
};

export {
    isValidEmail,
    isValidPassword
}