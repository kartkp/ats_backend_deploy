import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Responce.css';

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
    if (atsScore === 'No ATS score available') return 'score-no-data__new';
    const score = parseFloat(atsScore);
    if (score >= 70) return 'score-green__new';
    if (score >= 61) return 'score-yellow__new';
    if (score >= 45) return 'score-orange__new';
    return 'score-red__new';
  };

  if (isLoading) {
    return (
      <div className="container__new">
        <h1 className="title__new">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container__new">
      <h1 className="title__new">Response and The Score</h1>

      <div className="sectionx__new">
        <h2 className="section-titlex__new">ATS Score</h2>
        <p className={`section-contentx__new ${getAtsScoreClass()}`}>{atsScore}</p>
      </div>

      <div className="section__new">
        <h2 className="section-title__new">Suggestions for Improvement</h2>
        <p className="section-content__new">{suggestions}</p><br/>
      </div>

      <div className="section__new">
        <h2 className="section-title__new">Profile Summary</h2>
        <p className="section-content__new">{profileSummary}</p>
      </div>
      <br></br>
      <button type="button" onClick={() => navigate('/pref')} className="submit-button__new">
          Retake
        </button>
    </div>
  );
}

export default Response;
