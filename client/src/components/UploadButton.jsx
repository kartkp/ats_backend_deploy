import React, { useState, useRef } from 'react';
import './UploadButton.css';

const Hero = () => {
  const handleRedirect = () => {
    window.location.href = '/pref';
  };

  return (
    <div className="containers">
      <div className="rectangle">
        <button onClick={handleRedirect}> 
          <label className="custom-file-upload">
            <span className="button">Analyze Your Resume</span>
          </label>
        </button>

      </div>
    </div>
  );
};


export default Hero;

