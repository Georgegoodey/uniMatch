import React, { useState } from 'react';
import Select from 'react-select';
import UniversitiesList from './UniversitiesList.json';
import Prompts from './Prompts.json';
import HobbiesList from './HobbiesList.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileCreation.scss';

export default function ProfileCreation() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    degree: '',
    university: null,
    hobbies: [],
    prompt: null,
    promptAnswer: '',
    photos: []
  });

  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [errors, setErrors] = useState({});

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  // Dropdown handlers
  const handleUniversityChange = (selected) => {
    setFormData((fd) => ({ ...fd, university: selected }));
  };

  const handlePromptChange = (selected) => {
    setFormData((fd) => ({ ...fd, prompt: selected, promptAnswer: '' }));
  };

  const handleHobbiesChange = (selected) => {
    setFormData((fd) => ({ ...fd, hobbies: selected || [] }));
  };

  // Photo upload + validation + preview
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    let newErrors = {};

    files.forEach((file) => {
      if (!validTypes.includes(file.type)) {
        newErrors.photos = 'Only JPG, PNG and GIF images are allowed.';
      }
      if (file.size > 5 * 1024 * 1024) {
        newErrors.photos = 'Each file must be less than 5MB.';
      }
    });

    if (files.length > 5) {
      newErrors.photos = 'You can upload up to 5 photos.';
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors((e) => ({ ...e, photos: undefined }));

    setFormData((fd) => ({ ...fd, photos: files }));

    const previews = files.map((file) => URL.createObjectURL(file));
    setPhotoPreviews(previews);
  };

  // Validate and submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age || formData.age < 18 || formData.age > 100)
      newErrors.age = 'Please enter a valid age between 18 and 100';
    if (!formData.degree.trim()) newErrors.degree = 'Degree is required';
    if (!formData.university) newErrors.university = 'University is required';
    if (formData.hobbies.length === 0) newErrors.hobbies = 'Select at least one hobby';
    if (!formData.prompt) newErrors.prompt = 'Prompt selection is required';
    if (!formData.promptAnswer.trim()) newErrors.promptAnswer = 'Answer to prompt is required';
    if (formData.photos.length === 0) newErrors.photos = 'Please upload at least one photo';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Prepare data for saving or API call
      const output = {
        ...formData,
        university: formData.university.label,
        prompt: formData.prompt.label,
        hobbies: formData.hobbies.map((h) => h.label),
        photos: formData.photos.map((f) => f.name),
      };

      console.log('Profile Created:', output);
      alert('Profile created! Check console for submitted data.');

      // Reset form if you want
      // setFormData({name:'', age:'', degree:'', university:null, hobbies:[], prompt:null, promptAnswer:'', photos: []});
      // setPhotoPreviews([]);
      // setErrors({});
    }
  };

  return (
    <div className="container mt-4 profile-creation">
      <h2 className="text-center mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Age */}
        <div className="mb-3">
          <label className="form-label">Age *</label>
          <input
            type="number"
            name="age"
            min="18"
            max="100"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>

        {/* Degree */}
        <div className="mb-3">
          <label className="form-label">Degree *</label>
          <input
            type="text"
            name="degree"
            className={`form-control ${errors.degree ? 'is-invalid' : ''}`}
            value={formData.degree}
            onChange={handleChange}
          />
          {errors.degree && <div className="invalid-feedback">{errors.degree}</div>}
        </div>

        {/* University Dropdown */}
        <div className="mb-3">
          <label className="form-label">University *</label>
          <Select
            options={UniversitiesList}
            value={formData.university}
            onChange={handleUniversityChange}
            isSearchable
            placeholder="Select your university"
            className={errors.university ? 'is-invalid' : ''}
          />
          {errors.university && <div className="invalid-feedback d-block">{errors.university}</div>}
        </div>

        {/* Hobbies Multi-select */}
        <div className="mb-3">
          <label className="form-label">Hobbies *</label>
          <Select
            options={HobbiesList}
            value={formData.hobbies}
            onChange={handleHobbiesChange}
            isMulti
            placeholder="Select your hobbies"
            className={errors.hobbies ? 'is-invalid' : ''}
          />
          {errors.hobbies && <div className="invalid-feedback d-block">{errors.hobbies}</div>}

          {/* Preview selected hobbies as bubbles with icons */}
          <div className="mt-2 hobbies-preview d-flex flex-wrap gap-2">
            {formData.hobbies.map((hobby) => (
              <span key={hobby.value} className="badge rounded-pill bg-primary d-flex align-items-center gap-1">
                <i className={`hobby-icon bi bi-${hobby.icon || 'star-fill'}`}></i> {/* Use Bootstrap Icons or custom */}
                {hobby.label}
              </span>
            ))}
          </div>
        </div>

        {/* Prompt Dropdown */}
        <div className="mb-3">
          <label className="form-label">Profile Prompt *</label>
          <Select
            options={Prompts}
            value={formData.prompt}
            onChange={handlePromptChange}
            placeholder="Select a prompt"
            className={errors.prompt ? 'is-invalid' : ''}
          />
          {errors.prompt && <div className="invalid-feedback d-block">{errors.prompt}</div>}
        </div>

        {/* Prompt Answer */}
        {formData.prompt && (
          <div className="mb-3">
            <label className="form-label">{formData.prompt.label} *</label>
            <input
              type="text"
              name="promptAnswer"
              className={`form-control ${errors.promptAnswer ? 'is-invalid' : ''}`}
              value={formData.promptAnswer}
              onChange={handleChange}
            />
            {errors.promptAnswer && <div className="invalid-feedback">{errors.promptAnswer}</div>}
          </div>
        )}

        {/* Photo Upload */}
        <div className="mb-3">
          <label className="form-label">Upload Photos (max 5) *</label>
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg, image/gif"
            onChange={handlePhotoChange}
            className={errors.photos ? 'is-invalid form-control' : 'form-control'}
          />
          {errors.photos && <div className="invalid-feedback d-block">{errors.photos}</div>}

          {/* Preview */}
          <div className="photo-previews mt-3 d-flex flex-wrap gap-3">
            {photoPreviews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Preview ${idx + 1}`}
                className="rounded"
                style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ddd' }}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Profile
        </button>
      </form>
    </div>
  );
}
