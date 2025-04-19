
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Discuss.css";


function Answer() {
    const { id } = useParams();
    const [answerText, setAnswerText] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                const response = await axios.get(`http://localhost:800/api/questions/${id}/answers`);
                setAnswers(response.data);
            } catch (error) {
                console.error('Error fetching answers:', error);
            }
        };

        fetchAnswers();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            await axios.post(`http://localhost:800/api/questions/${id}/answers`, { text: answerText });
            setAnswerText('');
            const response = await axios.get(`http://localhost:800/api/questions/${id}/answers`);
            setAnswers(response.data);
        } catch (error) {
            console.error('Error posting answer:', error);
        }
    };

    return (
      <div 
      style={{
        backgroundImage: "linear-gradient(to right,  #325463, #88cce6)",  
        width: "100vw",
        height: "100vh",
      }}>
      <div className="discuss-container my-4">
        <div className="discuss-content">
          <h2>Reply</h2>
          <ul>
            {answers.map((answer) => (
              <li key={answer._id}>
                <div className="questions">
                  <h3>PostedBy: {answer.user.name}</h3>
                  <p>{answer.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="discuss-post-question-container">
          <form onSubmit={handleSubmit}>
            <textarea
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              placeholder="Enter your answer..."
              required
            ></textarea>
            <button type="submit">
              {" "}
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

export default Answer;
