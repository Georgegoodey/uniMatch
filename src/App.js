import './App.scss';
import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <div className="App">
        {/* <header>
          <Nav />
        </header> */}
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              </Routes>
          </BrowserRouter>
        </main>
        {/* <Footer /> */}
      </div>
  );
}

export default App;