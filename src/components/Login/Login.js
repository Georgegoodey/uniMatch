import React from 'react';

import React from 'react';

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary text-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-primary mb-4">Welcome Back</h3>
          
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-secondary">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="••••••••"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <small className="text-muted">
              Don’t have an account? <a href="#" className="text-primary">Register</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

