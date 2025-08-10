// import AboutMe from '../AboutMe';
// import Education from '../Educations';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact';
// import Experience from '../Experience/Experience';

import React, { useState, useEffect } from 'react';
import './DatingApp.scss';
import ProfileBrowser from '../ProfileBrowser/ProfileBrowser';
// import ProfileBrowser from '../ProfileBrowser/ProfileBrowser';

const Home = () => {
    return (
      <div className="container text-center mt-5">
        <ProfileBrowser />
      </div>
    );
  }

export default Home;
