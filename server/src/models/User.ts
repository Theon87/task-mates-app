import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

// Define an interface for the User document
interface IUser extends Document {
  _id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}
