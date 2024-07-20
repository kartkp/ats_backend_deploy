import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Kk.css';

function Response() {
  const location = useLocation();
  const navigate = useNavigate();
  const { atsScore, suggestions, profileSummary } = location.state || {
    atsScore: 'No ATS score available',
    suggestions: 'No suggestions available',
    profileSummary: 'No profile summary available'
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const getAtsScoreClass = () => {
    if (atsScore === 'No ATS score available') return 'score-no-data';
    const score = parseFloat(atsScore);
    if (score >= 70) return 'score-green';
    if (score >= 61) return 'score-yellow';
    if (score >= 45) return 'score-orange';
    return 'score-red';
  };

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Response and The Score</h1>

      <div className="sectionx">
        <h2 className="section-titlex">ATS Score</h2>
        <p className={`section-contentx ${getAtsScoreClass()}`}>{atsScore}</p>
      </div>

      <div className="section">
        <h2 className="section-title">Suggestions for Improvement</h2>
        <p className="section-content">{suggestions}</p>
      </div>

      <div className="section">
        <h2 className="section-title">Profile Summary</h2>
        <p className="section-content">{profileSummary}</p>
      </div>
      <br></br><br></br><br></br><br></br>
      <button type="button" onClick={() => navigate('/pref')} className="submit-button">
          Retake
        </button>
    </div>
  );
}

export default Response;
