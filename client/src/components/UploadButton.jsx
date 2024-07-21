import React, { useState, useRef } from 'react';
import './UploadButton.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleRedirect = () => {
    window.location.href = '/pref';
  };

  return (
    <div className="containers">
      <div className="rectangle"><Link activeClassName="active" to="/pref">
        <button> 
          <label className="custom-file-upload">
            <span className="button">Analyze Your Resume</span>
          </label>
        </button></Link>
    
      </div>
    </div>
  );
};


export default Hero;
