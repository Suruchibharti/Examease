import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Branches from "./components/Branches";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload"
import Links from "./components/Links";
import Discuss from "./components/Discuss";
import Answer from "./components/Answer";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import NoticesPage from "./components/NoticePage";
import AdminPage from "./components/AdminPage";
import ExperienceForm from "./components/ExperienceForm";
import ExperienceList from "./components/ExpierienceList";
// import Detail from "./components/Detail";
import ExperienceDetail from "./components/ExperienceDetails";

import AdminExperince from "./components/AdminExperience";




function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/links/:year/:branch" element={<Links />} />
        <Route path="/" element={<Home />} />
        <Route path="/branches/:year" element={<Branches />} />
        <Route path="/Discuss" element={<Discuss />} />
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/nn" element={<NoticesPage />} />
       {/* { <Route path="/e_form" element={<ExperienceForm />} /> } */}
        <Route path="/interview" element={<ExperienceList />} />
        <Route path="/experience/:id"  element={<ExperienceDetail />}/>
        <Route path="/admin/experiences"  element={<AdminExperince />}/>
      </Routes>

    </Router>
  );
}

export default App;
