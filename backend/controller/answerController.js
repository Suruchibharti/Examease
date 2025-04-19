
import Answer from "../Models/Answer.js";
import Question from "../Models/Question.js";
export const postAnswer = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    const userId = req.user.id;
    const answer = new Answer({ text: req.body.text,user: userId, question: req.params.id });
    await answer.save();
    question.answers.push(answer);
    await question.save();
    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




export const getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find({ question: req.params.id }).populate('user', 'name email');
    res.json(answers);
  } catch (error) {
    console.error('Error fetching answers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

