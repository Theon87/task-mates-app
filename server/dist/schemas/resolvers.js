import { User } from "../models/index.js";
const resolvers = {
    Query: {
        user: async () => {
            return await User.find();
        },
    },
};
export default resolvers;
