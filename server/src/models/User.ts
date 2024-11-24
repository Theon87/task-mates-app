import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

// Define an interface for the User document
interface IUser extends Document {
  _id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  tasks: string|number[];
  comparePassword: (password: string) => Promise<boolean>;
}

// Define the User schema
const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: { type: String, required: true, minlength: 8 },
  tasks: [
    {
      taskName: { type: String, required: true, minlength: 1 },
      description: { type: String, required: true, minlength: 1 },
      dueDate: { type: Date, required: true },
    },
  ],
},
{
  timestamps: true,
  toJSON: {getters: true},
  toObject: {getters: true},
}
);

// Middleware to create password
UserSchema.pre<IUser>("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// method to compare and validate password for login
UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// Create the User model
const User = model<IUser>("User", UserSchema);

export default User;
