import  mongoose, { Schema, Document } from "mongoose";

enum Status {
  Pending = "Pending",
  Active = "Active"
}

export interface Event extends Document {
  email: string
  date: string
  time: string
}

const EventSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: String,
    default: Date.now()
  },
  time: {
    type: String,
    default: Date.now()
  }
}, { timestamps: true });

export default mongoose.model<Event>("Event", EventSchema);
