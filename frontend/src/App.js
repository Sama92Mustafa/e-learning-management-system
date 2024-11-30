import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

const App = () => {
  return (
    <Router>
      {/* Add Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myprofile" element={<div>My Profile Page</div>} /> {/* Placeholder for MyProfile */}
      </Routes>
    </Router>
  );
};

export default App;
