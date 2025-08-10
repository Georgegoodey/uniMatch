import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="vh-100 bg-primary text-light d-flex flex-column justify-content-center align-items-center px-3 text-center">
      <div className="mb-4">
        <h1 className="display-4 fw-bold">Find Your Perfect Match</h1>
        <p className="lead mt-3">
          Welcome to <strong>UniMatch</strong> — dating tailored to your degree.  
          Whether you're looking for friendship, love, or something in between, you're in the right place.
        </p>
      </div>

      <div className="d-flex gap-3">
        <button className="btn btn-light text-primary fw-semibold px-4 py-2" onClick={() => navigate('/login')}>
          Log In
        </button>
        <button className="btn btn-secondary px-4 py-2" onClick={() => navigate('/register')}>
          Sign Up
        </button>
      </div>

      <footer className="mt-5 text-light-50 small">
        © {new Date().getFullYear()} UniMatch. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
