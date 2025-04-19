import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "./Utils";
import background from "../photos/login.png";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError(false);
      }, 2000); 
      
      return () => clearTimeout(timeoutId); 
    }
  }, [error]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:800/api/login",
        loginData
      );
      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);
      setLoginData({ email: "", password: "" });
      setError("");
      navigate("/");
    } catch (error) {
      setLoginData({ email: "", password: "" });
      setError(error.response.data.message);
    }
  };

  return (
    <div 
      style={{
        backgroundImage: "linear-gradient(to right,  #325463, #88cce6)",        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="container">
          <div className="row">
            
            <div
              class=" col-sm-4 my-3"
              style={{ borderRadius: "1rem", backgroundColor: " #092635" }}
            >
              <div class="mb-md-5 mt-md-4 pb-5 text-center">
                <h2 class="fw-bold mb-2 text-uppercase text-center text-light ">
                  LOGIN
                </h2>
                <p class="text-white-50 mb-5 text-center">
                  Please enter your Email and password!
                </p>
                <form onSubmit={handleSubmit}>
                  <div class="form-outline form-white mb-4 mx-4">
                    <label htmlFor="email" className="form-label text-light">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      value={loginData.email}
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div
                    class="form-outline form-white mb-4 mx-4"
                    style={{ marginTop: "40px" }}
                  >
                    <label htmlFor="password" className="form-label text-light">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                      value={loginData.password}
                      name="password"
                      id="password"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-lg px-5"
                      style={{ marginTop: "40px" }}
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <p
                      className="mb-0 text-light"
                      style={{ marginTop: "30px" }}
                    >
                      Don't have an account?
                      <a class=" fw-bold " style={{color:"aliceblue"}} href="/signup">
                        Sign Up
                      </a>{" "}
                    </p>
                  </div>
                </form>
                {error && <p className="my-3 fw-bold" style={{color:"red" ,fontSize:"22px"}}>{error}</p>}
              </div>
              
            </div>
            <div class="col-sm-7">
              <div className="container">
                <img className="img-fluid" src={background} alt="book" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;