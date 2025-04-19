import { React, useState } from "react";
import "./Home.css";
import "../App.css";
import About from './About';

import { Link } from "react-router-dom";
import photo1 from '../photos/d_photo.png';
import photo2 from '../photos/announce.png';
import photo3 from '../photos/u_notes.png';
import photo4 from '../photos/i_photo.png';
import Footer from './Footer';



const Home = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="scrollable-component " >
      <div className="home-container">
        <div className="home-header">
          <div className="content">
            <h1 className="fw-bold mt-3 text-center" style={{ color: "white", fontSize: "50px" }}>Exam Ease</h1>
            <p className="fw-bolder text-white " style={{ fontSize: "30px" }}>
              Get your doubts cleared through discussions, previous year
              questions (PYQ), and access to comprehensive notes.
            </p>
            <p className="fw-semibold  my-3" style={{ color: "white", height: "30px", fontSize: "25px" }}><i>
              Embark on your academic journey with confidence as you access our
              valuable resources. Let's elevate your learning experience
              together!</i>
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-4 mt-5">
                <div className="col-md-3">
                  <Link
                    to="/Discuss"
                    className="card h-100 shadow-sm"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card h-100 shadow-sm"
                      onMouseEnter={() => setIsHovered1(true)}
                      onMouseLeave={() => setIsHovered1(false)}>
                      <div className="card-body">
                        {isHovered1 && (
                          <div className="text-overlay">
                            <p className="overlay-text fs-3 fw-bold">Discuss</p>
                          </div>
                        )}
                        <img src={photo1} alt="Upload" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '100%' }} />


                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    className="card h-100 shadow-sm"
                    style={{ textDecoration: "none" }}
                    to="/upload"
                  >
                    <div className="card h-100 shadow-sm"
                      onMouseEnter={() => setIsHovered2(true)}
                      onMouseLeave={() => setIsHovered2(false)}>
                      <div className="card-body">
                        {isHovered2 && (
                          <div className="text-overlay">
                            <p className="overlay-text fs-3 fw-bold">Upload Notes</p>
                          </div>
                        )}
                        <img src={photo3} alt="Upload" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '100%' }} />


                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to="/nn"
                    className="card h-100 shadow-sm"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card h-100 shadow-sm"
                      onMouseEnter={() => setIsHovered3(true)}
                      onMouseLeave={() => setIsHovered3(false)}>
                      <div className="card-body">
                        {isHovered3 && (
                          <div className="text-overlay">
                            <p className="overlay-text fs-3 fw-bold">Announcement</p>
                          </div>
                        )}
                        <img src={photo2} alt="Upload" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '100%' }} />


                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-3">
                  <Link
                    to="/interview"
                    className="card h-100 shadow-sm"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card h-100 shadow-sm"
                      onMouseEnter={() => setIsHovered4(true)}
                      onMouseLeave={() => setIsHovered4(false)}>
                      <div className="card-body">
                        {isHovered4 && (
                          <div className="text-overlay">
                            <p className="overlay-text fs-3 fw-bold">Interview Experiences</p>
                          </div>
                        )}
                        <img src={photo4} alt="Upload" className="card-img-top img-fluid" style={{ objectFit: 'cover', height: '100%' }} />


                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="yearsection bg-dark mt-5"
          style={{ borderRadius: "3px" }}
        >
          <h1 className="fw-bold text-center mt-5 text-white">
            Select your year
          </h1>
          
          <div className="cards" style={{ padding: "30px", margin: "auto" }}>
          <Link
                  to="/branches/1"
                  className=" card year-link text-center"
                  style={{ textDecoration: "none" }}
                >
            <div className="card">
              <div className="tip">
                
                  <div
                    className="year-card my-3.5 fw-bold"
                    style={{ color: "black" }}
                  >
                    <i className="fas fa-graduation-cap"></i>
                    <span>1st Year</span>
                  </div>
                
              </div>
            </div>
            </Link>
            <Link
                  to="/branches/2"
                  className=" card year-link text-center"
                  style={{ textDecoration: "none" }}
                >
            <div className="card ">
              <div className="tip">
                
                  <div
                    className="year-card my-3.5 fw-bold "
                    style={{ color: "black" }}
                  >
                    <i className="fas fa-graduation-cap"></i>
                    <span>2nd Year</span>
                  </div>
                
              </div>
            </div>
            </Link>
            <Link
                  to="/branches/3"
                  className=" card year-link text-center"
                  style={{ textDecoration: "none" }}
                >
            <div className="card ">
              <div className="tip fw-bold ">
                
                  <div className="year-card my-3.5" style={{ color: "black" }}>
                    <i className="fas fa-graduation-cap"></i>
                    <span>3rd Year </span>
                  </div>
                
              </div>
            </div>
            </Link>
            <Link
                  to="/branches/4"
                  className="card year-link text-center"
                  style={{ textDecoration: "none" }}
                >
            <div className="card ">
              <div className="tip card-body fw-bold">
                
                  <div className="year-card my-3.5" style={{ color: "black" }}>
                    <i className="fas fa-graduation-cap"></i>
                    <span>4th Year</span>
                  </div>
               
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <About />
        </div>
        <div>
          <Footer />
        </div>
        <div className="bg-light">
                <div className="row">
    <div className="col-md-3">
        <p className=" text-left fs-3 my-3 fw-bold border-end border-dark hide-on-mobile" style={{ color: 'black', fontFamily: "Poppins, sans-serif" }}>ExamEase</p>
    </div>
    <div className="col-md-3">
        <p className=" text-left my-3 " style={{ color: '#111827', fontFamily: "Poppins, sans-serif",fontSize:"18px" }}>Copyright 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blackr" className="bi bi-c-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
            </svg>ExamEase.com
            
        </p>
    </div>
    <div class="col-md-3 text-center my-3 d-flex offset-md-3 " style={{fontSize:"18px",color:"black"}}>
        
          Follow us on: 
          
          <a href="https://www.linkedin.com/in/gargi-jaiswal-455617246" target="_blank"style={{marginRight: "10px",color:"black",marginLeft:"10px"}}>
            <i class="fab fa-linkedin" style={{fontSize: "25px", color:"#125D98"}}></i>
          </a>
          <a href="https://github.com/Gargi-jais11" target="_blank" style={{marginRight: "10px"}}>
            <i class="fab fa-github" style={{fontSize: "25px"}}></i>
          </a>
          <a href="https://instagram.com/gargi_jaisss?igshid=MzNlNGNkZWQ4Mg==" target="_blank" style={{marginRight: "10px"}}>
            <i class="fab fa-instagram" style={{fontSize: "25px",color:"magenta"}}></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100030824889804&mibextid=ZbWKwL" target="_blank" style={{marginRight: "10px"}}>
            <i class="fab fa-facebook" style={{fontSize: "25px",color:"blue"}}></i>
          </a>
          
      
        
      </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Home;