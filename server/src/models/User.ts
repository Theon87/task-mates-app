import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

// Define an interface for the User document
interface IUser extends Document {
  _id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

// Define the User schema
const UserSchema = new Schema<IUser>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true, minlength: 8 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: { type: String, required: true, minlength: 8 },
});
