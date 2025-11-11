import React, { useState } from 'react';
import HERO_IMG from '../../assets/hero-img.png';
import { useNavigate } from "react-router-dom";
import "../../styles/landing.css";
import Modal from "../../Components/Modal.jsx";
import Login from "../Auth/login";
import SignUp from "../Auth/signup";
import { FaPlus } from "react-icons/fa"; 

    

function LandingPage() {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");


  const handleCTA = () => {
    navigate('/builder'); 
  };

  return (
    <div className="landing-page">
      <div className="container">
        <header className="header">
          <div className="logo">Resume Builder</div>
          <button
            className="auth-btn"
            onClick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>

        <div className="hero">
          <div className="hero-text">
            <h1>
              Build Your <span className="gradient-text">Resume Effortlessly</span>
            </h1>
            <p>
              Craft a standout resume in minutes with our smart and <br /> intuitive resume builder.
            </p>
            <button className="cta-btn" onClick={handleCTA}>
              Get Started
            </button>
          </div>

          <div className="hero-image">
            <img src={HERO_IMG} alt="hero" />
          </div>
        </div>

        <section className='mt-5'>
          <h2>Features That makes you shine</h2>
          <div>
            <div>
              <h3>Easy Editing</h3>
              <p>Update your resume sections with live preview and instant formatting</p>
            </div>
            <div>
              <h3>Beautiful Templates</h3>
              <p>Choose from modern, professional templates that are easy to customize</p>
            </div>
            <div>
              <h3>One-click Export</h3>
              <p>Download instantly as a high-quality PDF with one click</p>
            </div>
          </div>
        </section>

        <div className="heart">
          Made with ❤️... Happy coding 
        </div>
<Modal
  isOpen={openAuthModal}
  onClose={() => {
    setOpenAuthModal(false);
    setCurrentPage("login");
  }}
  hideHeader
>
  <div>
    {currentPage === "login" && (
      <Login
        setCurrentPage={setCurrentPage}
        setOpenAuthModal={setOpenAuthModal}
      />
    )}
    {currentPage === "signup" && (
      <SignUp
        setCurrentPage={setCurrentPage}
        setOpenAuthModal={setOpenAuthModal}
      />
    )}
  </div>
</Modal>




      </div>
    </div>
  );
}

export default LandingPage;
