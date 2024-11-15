import { User } from "../models/index.js";

interface UserArgs {
    userId: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

const resolvers = {
    Query: {
        user: async (): Promise<UserArgs[]> => {
            return await User.find();
        },
    },
    Mutation: {
      addUser: async (_parent: any, { input }: AddUserArgs) => {
        // Create a new user with the provided username, email, and password
        const user = await User.create({ ...input });
        // Sign a token with the user's information
        const token = signToken(user.username, user.email, user._id);
        // Return the token and the user
        return { token, user };
      },
    }
};

export default resolvers;
