import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Options.css';
import Loading from './Loading';

const Options = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section__op">
      <br/><br/><br/>
      <h2>Choose Your Preference</h2><br/>
      <div className="imageContainer__op">
        <div
          className={`imageDiv__op ${hoveredImage === 'image1' ? 'hoveredImageDiv__op' : ''}`}
          onMouseEnter={() => handleMouseEnter('image1')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/score" className="linkButton__op"><br/><br/><br/>
            <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506363/score_myilwu.png" alt="Image 1" className="image__op" />
            <div className="imageText__op">Find Your ATS Score</div>
          </Link>
          <div className="subtitle__op">Discover how your resume aligns with ATS systems.</div>
          <div className="buttonContainer__op">
            <Link to="/score" className={`button__op ${hoveredImage === 'image1' ? 'hoveredButton__op' : ''}`}>
              Find Your ATS Score
            </Link>
          </div>
        </div>
        <div
          className={`imageDiv__op ${hoveredImage === 'image2' ? 'hoveredImageDiv__op' : ''}`}
          onMouseEnter={() => handleMouseEnter('image2')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/sugg" className="linkButton__op">
            <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506357/ats_img00_m17shv.avif" alt="Image 2" className="image__op" />
            <div className="imageText__op">Suggestions</div>
          </Link>
          <div className="subtitle__op">Get personalized suggestions to improve your resume.</div>
          <div className="buttonContainer__op">
            <Link to="/sugg" className={`button__op ${hoveredImage === 'image2' ? 'hoveredButton__op' : ''}`}>
              Suggestions
            </Link>
          </div>
        </div>
        <div
          className={`imageDiv__op ${hoveredImage === 'image3' ? 'hoveredImageDiv__op' : ''}`}
          onMouseEnter={() => handleMouseEnter('image3')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/bullet" className="linkButton__op"><br/><br/>
            <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506360/robot_oevagj.png" alt="Image 3" className="image__op" />
            <div className="imageText__op">Bullet Points</div>
          </Link>
          <div className="subtitle__op">Create impactful bullet points for your resume.</div>
          <div className="buttonContainer__op">
            <Link to="/bullet" className={`button__op ${hoveredImage === 'image3' ? 'hoveredButton__op' : ''}`}>
              Bullet Points
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
