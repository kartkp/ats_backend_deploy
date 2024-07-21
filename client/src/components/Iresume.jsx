import React, { useState, useRef } from 'react';
import './Iresume.css';
import { Link } from 'react-router-dom';

const Ir = () => {
  const handleRedirect = () => {
    window.location.href = './pref';
  };

  return (
    <div className="containers">
      <div className="rectangle">
      <Link activeClassName="active" to="/pref">
        <button> 
          <label className="custom-file-upload">
            <span className="button">Analyze Your Resume</span>
          </label>
        </button></Link>

      </div>
      <div style={styles.container}><br></br><br></br><br></br>
          <img 
            src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506390/ss00_fqqmoz.png" 
            alt="Left Image" 
            style={styles.image}
            onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506391/ss01_krhdoa.png"
            alt="Right Image"
            style={styles.image}
            onMouseOver={(e) => e.currentTarget.style.transform = styles.imageHover.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
            autoPlay
            muted
          /><br></br><br></br><br></br>
        </div>
    </div>

  );
};
const styles = {
  section: {
    padding: '50px 20px',
    textAlign: 'left',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  image: {
    width: '36%',
    height: 'auto',
    marginTop: '20px',
    transition: 'transform 0.8s ease-in-out',
    borderRadius: '15px',
    border: '1px solid #202020',
  },
  imageHover: {
    transform: 'scale(1.03)',
  },
  
};

export default Ir;




