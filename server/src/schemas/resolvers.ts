import { User } from '../models/index.js';  // User model
import { signToken, AuthenticationError } from '../utils/auth.js'; // JWT utility for signing tokens
import bcrypt from 'bcryptjs'; // hash password

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
  }


  interface TaskType {
    _id: string;
    name: string;
    description: string;
    completed: boolean;
    createdBy: string;  // Refers to the user ID of the creator
    dueDate: string;
  }
  
  interface SignupInput {
    name: string;
    email: string;
    password: string;
  }

  interface TaskInput {
    name: string;
    description: string;
    completed: boolean;
    dueDate: string;
  }

  interface UpdateTaskInput {
    name?: string;
    description?: string;
    completed?: boolean;
    dueDate?: string;
  }
  
  interface Context {
    user?: { _id: string };  // The logged-in user's ID
  }
  
  const resolvers = {
    Query: {
      profiles: async (): Promise<Profile[]> => {
        return await Profile.find();
      },
      profile: async (_parent: any, { profileId }: ProfileArgs): Promise<Profile | null> => {
        return await Profile.findOne({ _id: profileId });
      },
      me: async (_parent: any, _args: any, context: Context): Promise<Profile | null> => {
        if (context.user) {
          return await Profile.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
    },
    Mutation: {
      addProfile: async (_parent: any, { input }: AddProfileArgs): Promise<{ token: string; profile: Profile }> => {
        const profile = await Profile.create({ ...input });
        const token = signToken(profile.name, profile.email, profile._id);
        return { token, profile };
      },
      login: async (_parent: any, { email, password }: { email: string; password: string }): Promise<{ token: string; profile: Profile }> => {
        const profile = await Profile.findOne({ email });
        if (!profile) {
          throw AuthenticationError;
        }
        const correctPw = await profile.isCorrectPassword(password);
        if (!correctPw) {
          throw AuthenticationError;
        }
        const token = signToken(profile.name, profile.email, profile._id);
        return { token, profile };
      },
      addSkill: async (_parent: any, { profileId, skill }: AddSkillArgs, context: Context): Promise<Profile | null> => {
        if (context.user) {
          return await Profile.findOneAndUpdate(
            { _id: profileId },
            {
              $addToSet: { skills: skill },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        }
        throw AuthenticationError;
      },
      removeProfile: async (_parent: any, _args: any, context: Context): Promise<Profile | null> => {
        if (context.user) {
          return await Profile.findOneAndDelete({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
      removeSkill: async (_parent: any, { skill }: RemoveSkillArgs, context: Context): Promise<Profile | null> => {
        if (context.user) {
          return await Profile.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { skills: skill } },
            { new: true }
          );
        }
        throw AuthenticationError;
      },
    },
  };
  
  export default resolvers;
  