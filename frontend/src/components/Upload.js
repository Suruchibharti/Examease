import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Upload.css";
import "../App.css";
import {useNavigate } from 'react-router-dom';


function Upload() {
  const navigate = useNavigate(); 
  const[e,setE]=useState(false);
  const[s,setS]=useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    } else {
      navigate('/upload');
    }
  }, [navigate]); 
  useEffect(() => {
    if (s) {
      const timeoutId = setTimeout(() => {
        setS(false);
      }, 2000); 
      
      return () => clearTimeout(timeoutId); 
    }
  }, [s]);
  useEffect(() => {
    if (e) {
      const timeoutId = setTimeout(() => {
        setE(false);
      }, 2000); 
      
      return () => clearTimeout(timeoutId); 
    }
  }, [e]);
  const [formData, setFormData] = useState({
    year: "",
    branch: "",
    topic: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:800/api/upload", formData);
      
      setFormData({
        year: "",
        branch: "",
        topic: "",
        link: "",
      });
      setS(true);
    } catch (error) {
      console.error("Error uploading data:", error);
      setE(true);

    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
    
    >
        <div className="container bg-light my-3 h-10" style={{ width:"400px",height:"89vh",borderRadius:"5px"}}>
          <div class="mb-md-5 mt-md-4 pb-5 text-center">
            <h2
              class="fw-bold mb-2 text-uppercase text-center text-dark "
              style={{ paddingTop: "20px" }}
            >
              Upload Data
            </h2>
            <form onSubmit={handleSubmit}>
              <div class="form-outline form-white  mx-4">
                <label
                  className="form-label text-dark"
                  style={{ paddingTop: "20px" }}
                >
                  Year:
                </label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  value={formData.year}
                  name="year"
                >
                  <option value="">Select Year</option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>
              </div>
              <div
                class="form-outline form-white  mx-4"
                style={{ marginTop: "35px" }}
              >
                <label className="form-label text-dark">Branch:</label>
                <select
                  type="text"
                  className="form-control"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                >
                  <option value="">Select Your Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EE">ELECTRICAL</option>
                  <option value="ME">ME</option>
                  <option value="PE">PE</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="CHEMICAL">CHEMICAL</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                </select>
              </div>
              <div
                class="form-outline form-white  mx-4"
                style={{ marginTop: "35px" }}
              >
                <label className="form-label text-dark">Topic:</label>
                <input
                  type="text"
                  classsName="form-control"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                />
              </div>
              <div
                class="form-outline form-white  mx-4"
                style={{ marginTop: "35px" }}
              >
                <label className="form-label text-dark">Link:</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-light btn-lg px-5"
                  style={{ marginTop: "35px" }}
                >
                  Submit
                </button>
              </div>
              <div>
                <p className="mb-0 text-dark" style={{ marginTop: "30px" }}>
                  Didn't Logged In?
                  <a class=" fw-bold" href="/signup">
                    Login
                  </a>{" "}
                </p>
              </div>
            </form>
            {e && <p className="my-3 fw-bold" style={{color:"red", fontSize:"22px"}}>Please fill the required fields</p>}
            {s && <p className="my-2 fw-bold" style={{color:"green", fontSize:"22px"}}>Successfully uploaded</p>}

          </div>
        </div>
      </div>
   
  );
}

export default Upload;