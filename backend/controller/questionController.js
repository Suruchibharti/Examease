

import Question from "../Models/Question.js";


export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('user', 'name email');
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




export const postQuestion = async (req, res) => {
    try {

        const userId = req.user.id;
        // const userId='6603f8ff1425a1721567e644';


        const question = new Question({ text: req.body.text, user: userId });



        await question.save();


        res.status(201).json(question);
        // console.log(req.user.id);
        // res.status(201).json({msg:'ha ha ha ha'});

    } catch (error) {

        console.error('Error posting question:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
