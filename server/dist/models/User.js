import { Schema, model } from "mongoose";
// Define the User schema
const UserSchema = new Schema({
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
// // Middleware to create password
// UserSchema.pre<IUser>("save", async function (next) {
//   if (this.new || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
//   next();
// });
// // method to compare and validate password for login
// UserSchema.methods.comparePassword = async function (
//   password: string
// ): Promise<boolean> {
//   return bcrypt.compare(password, this.password);
// };
// Create the User model
const User = model("User", UserSchema);
export default User;
