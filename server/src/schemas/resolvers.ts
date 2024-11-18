import { User } from "../models/index.js";
import { Task, TaskDocument } from "../models/index.js";
import { signToken, AuthenticationError } from "../utils/auth.js";
//import { Schema, model, Document } from "mongoose";

interface UserArgs {
    userId: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

interface User {
    _id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

interface AddUserArgs {
    input: {
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        password: string;
    };
}

// interface Task {
//     _id: number;
//     creator: string;
//     assignees: string[];
//     task_name: string;
//     description: string;
//     status: boolean;
//     created_at: Date;
//     due_date: Date;
//     date_completed: Date;
// }

interface AddTaskArgs {
    input: {
        creator: string;
        assignees: string[];
        task_name: string;
        description: string;
        status: boolean;
        created_at: Date;
        due_date: Date;
        date_completed: Date;
        user: string[];
    };
}

interface RemoveTaskArgs {
    input: {
        task_name: string;
        user: string;
    };
}

interface Context {
    user?: User;
  }

const resolvers = {
    Query: {
        user: async (): Promise<UserArgs[]> => {
            return await User.find();
        },
    },
    Mutation: {
        addUser: async (_parent: unknown, { input }: AddUserArgs): Promise<{ token: string; user: User }> => {
            const user = await User.create({ ...input });
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        login: async (_parent: unknown, { email, password }: { email: string; password: string }): Promise<{ token: string; user: User }> => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.comparePassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        addTask: async (_parent: unknown, { input }: AddTaskArgs, context: Context): Promise<TaskDocument> => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in to add a task.');
            }
            const task = await Task.create({ ...input });
            return task;
        },
        removeTask: async (_parent: unknown, { input: { task_name, user } }: RemoveTaskArgs, context: Context): Promise<TaskDocument | null> => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in to remove a task.');
            }
            const task = await Task.findOneAndDelete({ task_name, user });
            return task;
        },
    },
};
export default resolvers;
