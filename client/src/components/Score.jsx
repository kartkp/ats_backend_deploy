import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Score.css';

function Score() {
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handlePdfChange = (event) => setPdfFile(event.target.files[0]);

  const handleJobDescriptionChange = (event) => setJobDescription(event.target.value);

  const handleJobRoleChange = (event) => setJobRole(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('resume', pdfFile);
    formData.append('jd', jobDescription);
    formData.append('role', jobRole);

    fetch('https://ats-deploy.onrender.com/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitting(false);
        console.log('Response:', data);

        navigate('/response', {
          state: {
            atsScore: data.atsScore,
            suggestions: data.suggestions,
            profileSummary: data.profileSummary,
          },
        });
      })
      .catch((error) => {
        setSubmitting(false);
        console.error('Error:', error);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="loading__two">
          <div className="spinner__two"></div>
        </div>
      ) : (
        <div className="container__two">
          <h1 className="title__two">Find Your Resume Score</h1>
          <form onSubmit={handleSubmit} className="form__two">
            <label className="label__two">
              Upload Your Resume Here:
              <input
                type="file"
                accept=".pdf"
                onChange={handlePdfChange}
                className="input-file__twoY"
                required
              />
            </label>
            <br />
            <label className="label__two">
              Job Description:<br /><br />
              <textarea
              
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                placeholder="Job Description"
                
                required
              />
            </label>
            <br />
            
            <label className="label__twoX">
              Job Role:
              <input
                type="text"
                value={jobRole}
                onChange={handleJobRoleChange}
                className="input-file__two"
                placeholder="Job Role"
              />
            </label>
            <br />
            <button type="submit" className="submit-button__two" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Score;
