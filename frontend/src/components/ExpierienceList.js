import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ExperienceList.css';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('http://localhost:800/api/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchExperiences();
  }, []);

  const toggleForm = () => {
    setIsFormOpen(prevState => !prevState);
  };
// form backend post code
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      await axios.post(
        'http://localhost:800/api/experiences',
        { title, description },
        { headers }
      );
      alert('Experience added successfully!');
      setTitle('');
      setDescription('');
      setIsFormOpen(false); 
    } catch (error) {
      console.error('Error submitting experience:', error);
    }
  };
  const handleTextareaKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Insert a newline character
      setDescription(description + '\n');
    }
  };

  return (
    <div className="scrollable-component">
      {isFormOpen && <div className="backdrop" onClick={toggleForm}></div>}
      <div className="d-flex justify-content-end mb-3">
        <p className='fs-3 mt-4 text-white  '>Add Your Experience</p>
        <button className="buttonaddnote btn mt-2 " onClick={toggleForm} ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
      </div>
      <div className="container">
        <h1 className="text-center mb-4 text-white fw-bold my-3">Interview Experiences</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {experiences.map(experience => (
            <div className="col" key={experience._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{experience.title}</h5>
                  <p className="card-text"><strong>PostedBy:</strong> {experience.user.name}</p>
                  <p className="card-text"><strong>PostedOn:</strong> {new Date(experience.date).toLocaleDateString()}</p>
                  <Link to={`/experience/${experience._id}`} className="btn btn-outline-primary">Read Experience</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* form pop up code */}
      {isFormOpen && (
        <div className="form-container">
                    <div className="d-flex justify-content-end">
            <button type="button" className="btn-close" aria-label="Close" onClick={toggleForm}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} onKeyDown={handleTextareaKeyPress} // Handle Enter key press
              placeholder="Description" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExperienceList;
