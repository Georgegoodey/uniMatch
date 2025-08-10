import './App.scss';
import React from 'react';
import LandingPage from './components/Landing Page/LandingPage';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
      <div className="App">
        {/* <header>
          <Nav />
        </header> */}
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </main>
        {/* <Footer /> */}
      </div>
  );
}

export default App;