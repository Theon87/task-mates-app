import { Schema, model, type Document } from "mongoose";

// Define an interface for the Task document
export interface TaskDocument extends Document {
  _id: number;
  creator: string;
  assignees: string[];
  task_name: string;
  description: string;
  status: boolean;
  created_at: Date;
  due_date: Date;
  date_completed: Date;
}

// Define the Task schema
const taskSchema = new Schema<TaskDocument>({
  creator: { type: String, required: true },
  assignees: { type: [String], required: true },
  task_name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  due_date: { type: Date, required: true },
  date_completed: { type: Date, required: true },
});

// Create the Task model
const Task = model<TaskDocument>("Task", taskSchema);

export { Task };
