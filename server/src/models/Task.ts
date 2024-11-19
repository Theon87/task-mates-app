import { Schema, model, type Document } from "mongoose";

// Define an interface for the Task document
export interface TaskDocument extends Document {
  _id: number;
  task_name: string;
  description: string;
  due_date: Date;
}

// Define the Task schema
const taskSchema = new Schema<TaskDocument>({
  task_name: { type: String, required: true },
  description: { type: String, required: true },
  due_date: { type: Date, required: true },
});

// Create the Task model
const Task = model<TaskDocument>("Task", taskSchema);

export { Task };
