import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileBrowser.scss';
import profileList from './ProfileList.json'; // adjust path as needed
import { useNavigate } from 'react-router-dom';


export default function ProfileBrowser() {
  const [profiles, setProfiles] = useState([]);
  const [current, setCurrent] = useState(0);
  const [likes, setLikes] = useState([]);

  const navigate = useNavigate();

  // In your button onClick:
  const handlePlanDateClick = () => {
    navigate('/DatePlanner');
  };
  
  useEffect(() => {
    setProfiles(profileList);
  }, []);

//   useEffect(() => {
//     fetch('/ProfileList.json')
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch profiles');
//         console.log(res);
//         return res.json();
//       })
//       .then((data) => setProfiles(data))
//       .catch((err) => {
//         console.error('Error loading profiles:', err);
//         setProfiles([]);
//       });
//   }, []);

  const handleLike = () => {
    if (profiles[current]) {
      setLikes((prev) => [...prev, profiles[current]]);
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
      <div className="container text-center mt-5 no-more-profiles">
        <h2>No more profiles to show!</h2>
        <p>
          You liked {likes.length} {likes.length === 1 ? 'person' : 'people'}.
        </p>
      </div>
    );
  }

  return (
    <div className="container profile-browser mt-5">
      <div className="card shadow p-3">
        {/* Photo Carousel */}
        <div className="photo-carousel d-flex overflow-auto mb-3">
          {currentProfile.photos?.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`${currentProfile.name} photo ${idx + 1}`}
              className="rounded flex-shrink-0 me-3"
              style={{ width: '250px', height: '160px', objectFit: 'cover' }}
            />
          ))}
        </div>


        <div className="profile-header text-center mb-3">
          <h2 className="fw-bold">
            {currentProfile.name}, {currentProfile.age}
          </h2>
          <p className="text-muted mb-1">{currentProfile.university}</p>
          <p className="fst-italic text-muted">{currentProfile.degree}</p>
        </div>

        {/* Description */}
        <p className="mb-3">{currentProfile.description}</p>

        {/* Hobbies & Interests */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3 hobbies-interests">
          {[...currentProfile.hobbies, ...currentProfile.interests].map((item, i) => (
            <span key={i} className="badge rounded-pill bg-primary px-3 py-2">
              {item}
            </span>
          ))}
        </div>

        {/* Prompts */}
        <div className="prompts border rounded p-3 mb-3">
          {currentProfile.prompts?.map(({ question, answer }, i) => (
            <div key={i} className="mb-2">
              <h6 className="prompt-question fw-semibold">{question}</h6>
              <p className="prompt-answer mb-0">{answer}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4 action-buttons">
        <button
        className="btn btn-success btn-plan-date flex-grow-1"
      onClick={handlePlanDateClick}
      aria-label="Plan a Date"
    >
    Plan a Date
    </button>
    <button
    className="btn btn-danger btn-circle"
    onClick={handlePass}
    aria-label="Pass"
    >
    <span className="emoji-white">❌</span>
    </button>


                </div>``
            </div>
        </div>
    );

  
    }
