import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Reactform/navbar';
import Home from './Reactform/home';
import About from './Reactform/about';
import Contact from './Reactform/contact';
import Destination from './Reactform/destination';
import RegistrationForm from './Reactform/registration';
import SubmittedForm from './Reactform/submitted';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/submitted" element={<SubmittedForm />} />
        <Route path="/invalid" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;