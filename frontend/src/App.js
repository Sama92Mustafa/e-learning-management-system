import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp2 from './pages/SignUp';
import SignIn2 from './pages/SignIn';
import Profile from './pages/Profile';
import CourseDetail from './pages/CourseDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp2 />} />
          <Route path="/signin" element={<SignIn2 onSignIn={handleSignIn} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;