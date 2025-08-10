import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserProfile.scss';

export default function UserProfile() {
  const user = {
    name: "Alex Johnson",
    age: 26,
    height: "6'3\"",
    university: "Newcastle University",
    degree: "MEng Electrical Engineering",
    bio: "Passionate about technology, travel, and meeting new people. I enjoy hiking, photography, and exploring hidden coffee shops.",
    likes: ["Hiking", "Photography", "Jazz Music", "Italian Food"],
    dislikes: ["Loud Nightclubs", "Rainy Days", "Pineapple on Pizza"],
    photos: [
      "https://via.placeholder.com/400x250",
      "https://via.placeholder.com/400x250/ffcccc",
      "https://via.placeholder.com/400x250/ccffcc",
      "https://via.placeholder.com/400x250/ccccff"
    ]
  };

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };

  return (
    <div className="container user-profile p-4 bg-white shadow rounded">
      {/* Photo Carousel */}
      <div className="d-flex overflow-auto pb-2 photo-carousel">
        {user.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="rounded flex-shrink-0 border me-3"
            style={{ width: '250px', height: '160px', objectFit: 'cover' }}
          />
        ))}
      </div>

      {/* Profile Info */}
      <div className="d-flex align-items-center mt-3">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-circle border border-3 border-danger me-3"
        />
        <div>
          <h2 className="fw-bold mb-1">{user.name}</h2>
          <p className="text-muted mb-0">Age: {user.age} • Height: {user.height}</p>
          <p className="text-muted mb-0">{user.university}</p>
          <p className="fst-italic text-muted">{user.degree}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-3">
        <h4 className="fw-semibold">About Me</h4>
        <p>{user.bio}</p>
      </div>

      {/* Likes and Dislikes */}
      <div className="row">
        <div className="col">
          <h5 className="text-success">Likes</h5>
          <ul>
            {user.likes.map((like, index) => (
              <li key={index}>{like}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h5 className="text-danger">Dislikes</h5>
          <ul>
            {user.dislikes.map((dislike, index) => (
              <li key={index}>{dislike}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Like/Dislike */}
      <div className="d-flex gap-3 mt-3">
        <button onClick={() => setLikeCount(likeCount + 1)} className="btn btn-success">
          👍 Like ({likeCount})
        </button>
        <button onClick={() => setDislikeCount(dislikeCount + 1)} className="btn btn-danger">
          👎 Dislike ({dislikeCount})
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <h5>Comments</h5>
        {comments.map((comment, index) => (
          <div key={index} className="p-2 mb-2 bg-light rounded">
            {comment}
          </div>
        ))}
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCommentSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
}
