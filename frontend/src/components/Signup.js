import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background from "../photos/signup.png";

const SignupPage = () => {
  // const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  // const [error, setError] = useState('');
  const [e, setE] = useState(false);
  // const navigate = useNavigate();
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [otpData, setOtpData] = useState({ otp: '' });
  const [error, setError] = useState('');
  const [requiresOtp, setRequiresOtp] = useState(false);
  const[sign,setSign]=useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };


  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:800/api/signup', signupData);
      if (response.data.requiresOtp) {
        setRequiresOtp(true);
        setSign(false);
      }
     
    } catch (error) {
      setError(error.response.data.message);
      setE(true);

    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:800/api/verifyOTP', {
        email: signupData.email,
        otp: otpData.otp
      });
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (

    <div style={{
      backgroundImage: "linear-gradient(to right,  #325463, #88cce6)", width: "100vw",
      height: "100vh",
    }}>
      <div className="container">
        <div className="container">
          <div className="row" >


            <div class=" col-sm-4 my-3" >
              <div className="mb-md-5 mt-md-4  pb-5 text-center" style={{ borderRadius: "1rem", background: "white" }} >
                <h2 class="fw-bold mb-2 my-2 text-center text-dark">Sign In</h2>
                <p class="text-dark mb-5 text-center">Please create your account!</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline form-white mb-4 mx-4">
                    <input type="text" className="form-control form-control-lg" id="name" name="name" value={signupData.name} onChange={handleChange}
                      placeholder="Enter Name"
                      aria-describedby="emailHelp" />
                    <label htmlFor="name" className="form-label text-dark">Name</label>

                  </div>
                  <div className="form-outline form-white mb-4 mx-4">
                    <input type="email" className="form-control form-control-lg " id="email" name="email" value={signupData.email} onChange={handleChange} placeholder="Enter Email" aria-describedby="emailHelp" />
                    <label htmlFor="email" className="form-label text-dark">Email </label>
                  </div>
                  <div className="form-outline form-white mb-4 mx-4">
                    <input type="password" className="form-control form-control-lg" id="password" name="password" value={signupData.password} onChange={handleChange} placeholder="Enter password" minLength={8} required />
                    <label htmlFor="password" className="form-label text-dark">Password</label>

                  </div>

                  {requiresOtp && (
                    <div>
                      <label>Enter OTP:</label>
                      <input type="text" name="otp" value={otpData.otp} onChange={handleOtpChange} />
                      <button onClick={handleVerifyOtp}>Verify OTP</button>
                    </div>
                  )}

                  {sign&&( <button type="submit" className="btn btn-outline-light btn-lg px-5">SignUp</button>)}
                 
                </form>
                {error && <p>{error}</p>}
                {e && <h1>please enter valid credentials......</h1>}
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

export default SignupPage;
