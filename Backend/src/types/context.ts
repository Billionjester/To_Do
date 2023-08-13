// types/context.ts
import { Request } from 'express';
import { ObjectId } from "mongodb";

export interface Context {
    req: Request;
    userId?: string; // This could be the authenticated user's ID
    // Add other properties as needed
}
export interface UserInput {
    id: ObjectId;
    name: string;
    email: string;
    password: string;
    role: string;
    language: string;
}
export interface TaskInput {
    id: ObjectId;
    role: string;
    dueDate: Date;
    language: string;
}