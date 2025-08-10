import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.ac.uk$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const { email, username, password, confirmPassword } = form;

    if (
      isValidEmail(email) &&
      username.trim().length > 0 &&
      password.length >= 6 &&
      password === confirmPassword
    ) {
      const form = { email, username, password };
      const res = await axios.post('http://192.168.0.163:5000/api/auth/register', form);
      localStorage.setItem('token', res.data.token);

      window.location.href = '/home';
    }
  };

  const { email, username, password, confirmPassword } = form;

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary text-light">
      <div className="card shadow p-4" style={{ maxWidth: '450px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-primary mb-4">Create an Account</h3>
          <form noValidate onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                className={`form-control ${submitted && !isValidEmail(email) ? 'is-invalid' : ''}`}
                placeholder="you@example.com"
                value={email}
                onChange={handleChange}
              />
              {submitted && !isValidEmail(email) && (
                <div className="invalid-feedback">Enter a valid university email.</div>
              )}
            </div>

            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-secondary">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className={`form-control ${submitted && username.trim().length === 0 ? 'is-invalid' : ''}`}
                placeholder="Choose a username"
                value={username}
                onChange={handleChange}
              />
              {submitted && username.trim().length === 0 && (
                <div className="invalid-feedback">Username is required.</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-secondary">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className={`form-control ${submitted && password.length < 6 ? 'is-invalid' : ''}`}
                placeholder="At least 6 characters"
                value={password}
                onChange={handleChange}
              />
              {submitted && password.length < 6 && (
                <div className="invalid-feedback">Password must be at least 6 characters.</div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label text-secondary">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={`form-control ${submitted && confirmPassword !== password ? 'is-invalid' : ''}`}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={handleChange}
              />
              {submitted && confirmPassword !== password && (
                <div className="invalid-feedback">Passwords do not match.</div>
              )}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <small className="text-muted">
              Already have an account? <a href="/login" className="text-primary">Login</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
