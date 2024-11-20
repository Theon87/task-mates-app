import { User } from "../models/index.js";
// import { Task, TaskDocument } from "../models/index.js";
import { signToken, AuthenticationError } from "../utils/auth.js";

interface User {
    _id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

interface UserArgs {
    userId: string;
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

interface AddTaskArgs {
    userId: string;
    taskName: string;
    description: string;
    dueDate: Date;

}

// interface RemoveTaskArgs {
//     input: {
//         task_name: string;
//         user: string;
//     };
// }

interface Context {
    user?: User;
  }

const resolvers = {
    Query: {
        user: async (): Promise<User[]> => {
            return await User.find();
        },
        userById: async (_parent: unknown, { userId }: UserArgs): Promise<User | null> => {
            return await User.findOne({ _id: userId });
        },
        me: async (_parent: unknown, _args: unknown, context: Context): Promise<User | null> => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        }
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
        addTask: async (_parent: unknown, { userId, taskName, description, dueDate }: AddTaskArgs, context: Context): Promise<User | null> => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in to add a task.');
            }
            
            if (!userId || !taskName || !description || !dueDate) {
                throw new Error('You need to provide a user ID, task name, description, and due date.');
            }

            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $addToSet: {
                            tasks: { taskName, description, dueDate },
                        },
                    },
                    { 
                        new: true,
                        runValidators: true
                    }
                );

                if (!updatedUser) {
                    throw new Error('No user found with this id!');
                }
                return updatedUser;
            } catch (error) {
                console.error(error);
                throw new Error('Error updating user!');                                
            }
        },
        // removeTask: async (_parent: unknown, { input: { task_name, user } }: RemoveTaskArgs, context: Context): Promise<TaskDocument | null> => {
        //     if (!context.user) {
        //         throw new AuthenticationError('You need to be logged in to remove a task.');
        //     }
        //     const task = await Task.findOneAndDelete({ task_name, user });
        //     return task;
        // },
    },
};
export default resolvers;
