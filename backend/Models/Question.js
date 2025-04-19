
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Userr',
    required: true
  },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

