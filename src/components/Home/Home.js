// import AboutMe from '../AboutMe';
// import Education from '../Educations';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact';
// import Experience from '../Experience/Experience';

import React, { useState, useEffect } from 'react';
// import './DatingApp.scss';

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [current, setCurrent] = useState(0);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetch('/profiles.json')
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);

  const handleLike = () => {
    if (profiles[current]) {
      setLikes([...likes, profiles[current]]);
    }
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    setCurrent((prev) => prev + 1);
  };

  const currentProfile = profiles[current];

  if (!currentProfile) {
    return (
      <div className="container text-center mt-5">
        <h2>No more profiles!</h2>
        <p>You liked {likes.length} {likes.length === 1 ? 'person' : 'people'}.</p>
      </div>
    );
  }

  return (
    <div className="container profile-card mt-5">
      <div className="card shadow">
        <img
          src={currentProfile.image}
          alt={currentProfile.name}
          className="card-img-top profile-image"
        />
        <div className="card-body">
          <h3 className="card-title">
            {currentProfile.name}, {currentProfile.age}
          </h3>
          <p className="card-subtitle text-muted">
            {currentProfile.location} | {currentProfile.university} — {currentProfile.major}
          </p>
          <p className="mt-2">{currentProfile.description}</p>

          <div className="tags">
            <strong>Hobbies:</strong> {currentProfile.hobbies.join(', ')}<br />
            <strong>Interests:</strong> {currentProfile.interests.join(', ')}
          </div>

          <div className="prompts mt-4">
            {currentProfile.prompts.map((prompt, idx) => (
              <div className="prompt" key={idx}>
                <h6 className="prompt-question">{prompt.question}</h6>
                <p className="prompt-answer">{prompt.answer}</p>
              </div>
            ))}
          </div>

          <div className="buttons mt-4 d-flex justify-content-between">
            <button className="btn btn-outline-danger btn-lg rounded-circle" onClick={handlePass}>
              ❌
            </button>
            <button className="btn btn-outline-success btn-lg rounded-circle" onClick={handleLike}>
              💖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
