// src/models/userModel.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    language: string;
    deletedUser: boolean;
    jwtToken: string;
}

const UserSchema: Schema = new mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null, required: true },
    password: { type: String, default: null, required: true },
    role: { type: String, default: 'guest', enum: ['admin', 'user', 'guest'], required: true },
    language: { type: String, default: 'en' },
    deletedUser: { type: Boolean, default: false },
    jwtToken: { type: String, default: null },
}, { versionKey: false, timestamps: true });

export default mongoose.model<UserDocument>('User', UserSchema);