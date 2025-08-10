import './App.scss';
import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills/Skills';
import Canvas from './components/Canvas/Canvas';

function App() {
  return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/canvas" element={<Canvas />} />
              <Route path="/blog" element={<Blog />} />
              </Routes>
          </BrowserRouter>
        </main>
        {/* <Footer /> */}
      </div>
  );
}

export default App;