import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Userr', required: true },
  date: { type: Date, default: Date.now }, 
  approved: { type: Boolean, default: false }
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
