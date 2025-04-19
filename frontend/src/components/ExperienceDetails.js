import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ExperienceDetail.css"; 



const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(
          `http://localhost:800/api/experiences/${id}`
        );
        setExperience(response.data);
      } catch (error) {
        console.error("Error fetching experience:", error);
      }
    };
    fetchExperience();
  }, [id]);

  const formatDescription = (description) => {
    return description.replace(/\n/g, '<br>');
  };

  if (!experience) {
    return <div>Loading...</div>;
  }

  return (
    <div className="scrollable-component">
    <div
      className="container-fluid mt-4 "
      style={{ paddingLeft: "25px", paddingRight: "25px" }}
    >
      <div className="card">
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
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: formatDescription(experience.description) }}
          ></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExperienceDetail;
