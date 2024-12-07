import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage'; // New landing page
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import MyProfile from './pages/MyProfile/MyProfile'; // Import MyProfile page


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for a token in local storage on app load
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myprofile" element={<MyProfile />} /> {/* Add MyProfile route */}
        
      </Routes>
    </Router>
  );
};

export default App;
