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

// Define the User schema
const UserSchema = new Schema<IUser>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true, minlength: 8 },
  password: { type: String, required: true, minlength: 8 },
});
