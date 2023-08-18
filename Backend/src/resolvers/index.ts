// src/resolvers/index.ts
import UserResolver from './userResolvers';
import TaskResolver from './taskResolvers';

// Combine all the resolvers into a single object
const resolvers = {
    ...UserResolver,
    ...TaskResolver,
};

export default resolvers;