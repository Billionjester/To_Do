// import i18n, { __ } from 'i18n';
import bcrypt from 'bcrypt';
import { UserModel, TaskModel, UserDocument, TaskDocument } from '../models';
import { TaskInput } from '../types/context';
import { GraphQLError } from 'graphql';
import mongoose from 'mongoose';

// (parent, args, contextValue, info)
const resolvers = {
    Query: {
        tasks: async (_: any, { userId }: { userId: string }) => {
            try {
                // Fetch tasks based on the userId
                const userIdObjectId = new mongoose.Types.ObjectId(userId);
                const tasks: TaskDocument[] = await TaskModel.find({ userId: userIdObjectId });
                return tasks;
            } catch (error) {
                throw new GraphQLError('Failed to fetch tasks');
            }
        },
        task: async (_: any, { id }: { id: string }) => {
            try {
                const task: TaskDocument | null = await TaskModel.findById(id);
                return task;
            } catch (error) {
                throw new GraphQLError('Failed to fetch task');
            }
        },
    },
    Mutation: {
        createTask: async (_: any, { input, userId }: { input: TaskInput, userId: string }) => {
            try {
                // Create a new task associated with the userId
                const newTask: TaskDocument = new TaskModel({ ...input, userId });
                await newTask.save();
                return newTask;
            } catch (error) {
                throw new GraphQLError('Failed to create a new task');
            }
        },
        updateTask: async (_: any, { id, input }: { id: string; input: TaskInput }) => {
            try {
                const updatedTask: TaskDocument | null = await TaskModel.findByIdAndUpdate(
                    id,
                    input,
                    { new: true }
                );
                return updatedTask;
            } catch (error) {
                throw new GraphQLError('Failed to update the task');
            }
        },
        deleteTask: async (_: any, { id }: { id: string }) => {
            try {
                const deletedTask: TaskDocument | null = await TaskModel.findByIdAndRemove(id);
                return deletedTask;
            } catch (error) {
                throw new GraphQLError('Failed to delete the task');
            }
        },
    },
};

export default resolvers;
