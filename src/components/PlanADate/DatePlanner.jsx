import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DatePlanner.scss';

export default function PlanDate({ onSend }) {
  const [activity, setActivity] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const activities = [
    'Coffee',
    'Dinner',
    'Walk in the park',
    'Movie',
    'Museum visit',
    'Beach day',
    'Live music',
    'Cooking class',
  ];

  const validate = () => {
  const newErrors = {};
  if (!activity) newErrors.activity = 'Please select an activity';
  if (!dateTime) newErrors.dateTime = 'Please select date and time';
  // Message is optional, so no error if empty
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Here you can send data to backend or pass to parent component
    const invitationData = { activity, dateTime, message };
    alert(`Date planned!\n\nActivity: ${activity}\nDate & Time: ${dateTime}\nMessage: ${message}`);

    if (onSend) onSend(invitationData);

    // Reset form if you want:
    setActivity('');
    setDateTime('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="container plan-date-page mt-5">
      <h2 className="mb-4 text-center">Plan a Date</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Activity */}
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">
            Activity
          </label>
          <select
            id="activity"
            className={`form-select ${errors.activity ? 'is-invalid' : ''}`}
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="">Select an activity...</option>
            {activities.map((act, idx) => (
              <option key={idx} value={act}>
                {act}
              </option>
            ))}
          </select>
          {errors.activity && <div className="invalid-feedback">{errors.activity}</div>}
        </div>

        {/* Date and Time */}
        <div className="mb-3">
          <label htmlFor="dateTime" className="form-label">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            className={`form-control ${errors.dateTime ? 'is-invalid' : ''}`}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          {errors.dateTime && <div className="invalid-feedback">{errors.dateTime}</div>}
        </div>

        {/* Message */}
        <div className="mb-4">
        <label htmlFor="message" className="form-label">
            Message <small className="text-muted">(optional)</small>
        </label>
        <textarea
            id="message"
            className="form-control"
            rows="4"
            placeholder="Write something to your match..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        </div>


        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg">
            Send Invitation
          </button>
        </div>
      </form>
    </div>
  );
}
