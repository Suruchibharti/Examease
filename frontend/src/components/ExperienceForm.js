 

import React, { useState } from 'react';
import axios from 'axios';

const ExperienceForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleTextareaKeyPress} // Handle Enter key press
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExperienceForm;
