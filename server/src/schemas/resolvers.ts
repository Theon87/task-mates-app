import { User } from "../models/index.js";
import { signToken } from "../utils/auth.js";

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
    }
    },
};
export default resolvers;
