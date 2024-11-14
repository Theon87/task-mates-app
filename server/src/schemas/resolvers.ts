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
    // Fetch the currently authenticated user's profile
    me: async (_parent: any, _args: any, context: Context) => {
      if (context.user) {
        return await User.findById(context.user._id);  // Return user data based on ID
      }
      throw new AuthenticationError('You need to be logged in to view your profile');
    },

    // Fetch all tasks for the authenticated user
    tasks: async (_parent: any, _args: any, context: Context): Promise<TaskType[]> => {
      if (context.user) {
        return await Task.find({ createdBy: context.user._id });  // Return tasks for the logged-in user
      }
      throw new AuthenticationError('You need to be logged in to view your tasks');
    },

    // Fetch a single task by taskId, ensuring the user owns the task
    task: async (_parent: any, { taskId }: { taskId: string }, context: Context): Promise<TaskType | null> => {
      if (context.user) {
        return await Task.findOne({ _id: taskId, createdBy: context.user._id });  // Only allow users to view their own tasks
      }
      throw new AuthenticationError('You need to be logged in to view this task');
    },
  },

  Mutation: {
    // User signup (create a new user)
    signup: async (_parent: any, { input }: { input: SignupInput }, context: Context) => {
      // Check if the email already exists
      const existingUser = await User.findOne({ email: input.email });
      if (existingUser) {
        throw new Error('Email already in use');
      }

      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(input.password, salt);

      // Create the new user
      const user = await User.create({
        name: input.name,
        email: input.email,
        password: hashedPassword,  // Store the hashed password
      });

      // Generate JWT token
      const token = signToken(user.name, user.email, user._id);

      return { token, user };  // Return the JWT token and user info
    },
  export default resolvers;
  