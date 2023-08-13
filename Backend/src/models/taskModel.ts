// src/models/tasktModel.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface TaskDocument extends Document {
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;
    userId: string; // Reference to the User model
}

const TasksSchema: Schema = new mongoose.Schema({
    title: { type: String, default: null },
    description: { type: String, default: null },
    dueDate: { type: Date, },
    completed: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
}, { versionKey: false, timestamps: true });

export default mongoose.model<TaskDocument>('Task', TasksSchema);