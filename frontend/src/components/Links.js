import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Pdf from './Pdf';
import '../App.css';

function Links({  }) {
    const { year, branch } = useParams();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`http://localhost:800/api/links/${year}/${branch}`);
        setLinks(response.data);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, [year, branch]);

  return (
    <div className="text-center scrollable-component"
      
    >
      <h2 className="my-3 text-center" style={{  fontFamily: "-apple-system,system-ui,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI' Emoji"
}}>
        Study Materials for {branch} Branch ({year} Year):
      </h2>
      <br />
      <ul style={{ listStyleType: "none", marginLeft: "0px" }}>
        {links.map((link, index) => (
          <li key={index}>
            {/* <a href={link.link} target="_blank" rel="noopener noreferrer">{link.topic}</a> */}
            <Pdf topic={link.topic} link={link.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
