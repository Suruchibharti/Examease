import express from "express";
const router = express.Router();
import { uploadLink } from "../controller/courseController.js";
import { getLinks } from "../controller/courseController.js";
import { login } from "../controller/authController.js";
import { signup } from "../controller/authController.js";

import { postAnswer } from "../controller/answerController.js";
import { getAllAnswers } from "../controller/answerController.js";
import { postQuestion } from "../controller/questionController.js";
import { getAllQuestions } from "../controller/questionController.js";
// import { fetchNotice } from "../controller/noticeController.js";
import { addNotice } from "../controller/noticeController.js";
import isAdmin from "../Middleware/isadmin.js";
import { check } from "../controller/check.js";

import { addInterview } from "../controller/interviewController.js";
import { fetchInterview } from "../controller/interviewController.js";

import { getExperienceById } from "../controller/interviewController.js";

import { fetchfasleInterview } from "../controller/interviewController.js";

import { acceptExperience } from "../controller/interviewController.js";

import { declineExperience } from "../controller/interviewController.js";

import { getAllNotices } from "../controller/noticeController.js";

import { getTopNotices } from "../controller/noticeController.js";

import { verifyOTP } from "../controller/authController.js";

import protectRoute from "../Middleware/authMiddleware.js";




router.post('/upload', uploadLink);


router.get('/links/:year/:branch', getLinks);


router.get('/questions', protectRoute, getAllQuestions);
router.post('/questions', protectRoute, postQuestion);
router.post('/questions/:id/answers', protectRoute, postAnswer);

router.get('/questions/:id/answers', protectRoute, getAllAnswers);




router.post('/experiences', protectRoute, addInterview);
router.get('/experiences', fetchInterview);
router.get('/experiences/:id', getExperienceById);

router.get('/falseExperiences',protectRoute,isAdmin,fetchfasleInterview);

router.put('/experiences/:id/accept',acceptExperience);

router.delete('/experiences/:id',protectRoute,isAdmin,declineExperience)









router.post('/signup', signup);
router.post('/login', login);
router.post('/verifyOTP',verifyOTP);


router.get('/userData', protectRoute, isAdmin, check);

router.post('/notices', protectRoute, isAdmin, addNotice);

// router.get('/getnotices', protectRoute, fetchNotice);

router.get('/notices/top', getTopNotices);
router.get('/notices', getAllNotices);


export default router;