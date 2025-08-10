import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = { email, password };
      const res = await axios.post('http://192.168.0.163:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/home';
    } catch (err) {
      console.error(err);
      alert('Invalid credentials');
    }
  };

  const isValidEmail = (email) => {
    // Basic email pattern
    return /^[^\s@]+@[^\s@]+\.ac.uk/.test(email);
  };

  const emailInvalid = submitted && !isValidEmail(email);
  const passwordInvalid = submitted && password.length === 0;

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary text-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-primary mb-4">Enter Login Details</h3>
          
          <form noValidate onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary">Email address</label>
              <input
                type="email"
                className={`form-control ${emailInvalid ? 'is-invalid' : ''}`}
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched({ ...touched, email: true })}
              />
              {emailInvalid && (
                <div className="invalid-feedback">Please enter a valid email.</div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-secondary">Password</label>
              <input
                type="password"
                className={`form-control ${passwordInvalid ? 'is-invalid' : ''}`}
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched({ ...touched, password: true })}
              />
              {passwordInvalid && (
                <div className="invalid-feedback">Password is required.</div>
              )}
            </div>

            {/* Submit */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <small className="text-muted">
              Don’t have an account? <a href="/register" className="text-primary">Register</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;