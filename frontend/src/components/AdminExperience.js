import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminExperince = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchFalseExperiences = async () => {
            try {
                const token = localStorage.getItem('token');
                const headers = {
                  'Authorization': `Bearer ${token}`
                };
                const response = await axios.get('http://localhost:800/api/falseExperiences',{ headers });
                setExperiences(response.data);
            } catch (error) {
                console.error('Error fetching false experiences:', error);
            }
        };
        fetchFalseExperiences();
    }, []);

    const handleAccept = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
              'Authorization': `Bearer ${token}`
            };
            await axios.put(`http://localhost:800/api/experiences/${id}/accept`,{ headers });
            setExperiences(experiences.filter(exp => exp._id !== id));
        } catch (error) {
            console.error('Error accepting experience:', error);
        }
    };

    const handleDecline = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
              'Authorization': `Bearer ${token}`
            };
            await axios.delete(`http://localhost:800/api/experiences/${id}`,{headers});
            setExperiences(experiences.filter(exp => exp._id !== id));
        } catch (error) {
            console.error('Error declining experience:', error);
        }
    };

    return (
        <div style={{height:"100vh"}}>
            <div className="container">
                {experiences.length === 0 ? (
                    <div className="alert alert-info mt-5 text-center fw-bold fs-2" role="alert">
                        Nothing to Accept or Decline.
                    </div>
                ) : (
                    experiences.map(experience => (
                        <div key={experience._id} className="card mt-5">
                            <div className="card-header">
                                <ul className="nav nav-pills card-header-pills">
                                    <li className="nav-item">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="currentColor"
                                            className="bi bi-person-circle"
                                            viewBox="0 0 16 16"
                                            color="#424242"
                                        >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                            />
                                        </svg>
                                        <i style={{ marginLeft: "5px", color: "#424242" }}>
                                            {experience.user.name}
                                        </i>
                                    </li>
                                    <li className="nav-item mx-3" style={{ color: "#424242" }}>
                                        PostedOn: {new Date(experience.date).toLocaleDateString()}
                                    </li>
                                    <li className="nav-item" style={{ color: "#424242" }}>
                                        4.4k VIEWS
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{experience.title}</h3>
                                <p className="card-text">{experience.description}</p>
                                <button className="btn btn-success mr-2" onClick={() => handleAccept(experience._id)}>Accept</button>
                                <button className="btn btn-danger ms-2" onClick={() => handleDecline(experience._id)}>Decline</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminExperince;
