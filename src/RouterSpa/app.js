import React from 'react';
import Home from './RouterSpa/home';
import Singers from './RouterSpa/singers';
import Albumslist from './RouterSpa/albumlist';
import Navbar from './RouterSpa/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singers" element={<Singers />} />
          <Route path="/albums" element={<Albumslist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
