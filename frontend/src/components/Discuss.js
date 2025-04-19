

import "./Discuss.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Discuss() {
  const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchQuestions();
    }
  }, [navigate]);

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:800/api/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:800/api/questions',
        { text: newQuestionText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewQuestionText('');
      fetchQuestions();
    } catch (error) {
      console.error('Error posting question:', error);
    }
  };

  
    return (
      <div 
      style={{
        backgroundImage: "linear-gradient(to right,  #325463, #88cce6)",  
        width: "100vw",
        height: "100vh",
        paddingTop:"10px"
      }}>
       
      <div className="discuss-container container" style={{"marginTop":"10px"}}>
     
        <div className="discuss-content">
          <h2 className="fw-bold text-center">Discuss All Your Doubts!</h2>
          <ul>
            {questions.map((question) => (
              <li key={question._id}>
                <div className="questions">
                  <h3>PostedBy: {question.user.name}</h3>
                  <p> {question.text}</p>
                </div>
                <button className="reply">
                  <Link style={{"color":"black"}} to={`/answer/${question._id}`}>Reply</Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="discuss-post-question-container">
          <form onSubmit={handleSubmit} className="discuss-post-question-form">
            <textarea
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="Enter your question..."
              required
            ></textarea>
            <button type="submit" style={{ backgroundColor: " rgb(103, 147, 153)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </form>
        </div>
        
      </div>
      
      </div>
      
    );
}

export default Discuss;



