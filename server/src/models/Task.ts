import { Schema, model, type Document } from "mongoose";

// Define an interface for the Task document
interface ITask extends Document {
  id: number;
  create: string;
  assignees: string[];
  descprtion: Text;
  status: boolean;
  created_at: Date;
  due_date: Date;
  date_completed: Date;
}
