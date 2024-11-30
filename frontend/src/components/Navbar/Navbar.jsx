import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../logo.jpg'; // Adjust the path if needed

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate user authentication
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For navigation on signout

  // Simulate login status (replace with actual logic later)
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  // Handle Signout
  const handleSignOut = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsLoggedIn(false); // Update login state
    navigate('/signin'); // Redirect to SignIn page
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Site Logo" className="site-logo" />
      </div>
      <div className="nav-links">
        {/* Links visible to all users */}
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>

        {/* Links for logged-in users */}
        {isLoggedIn ? (
          <>
            <Link
              to="/myprofile"
              className={`nav-link ${location.pathname === '/myprofile' ? 'active' : ''}`}
            >
              My Profile
            </Link>
            <button onClick={handleSignOut} className="nav-link signout-button">
              Sign Out
            </button>
          </>
        ) : (
          // Links for logged-out users
          <>
            <Link
              to="/signin"
              className={`nav-link ${location.pathname === '/signin' ? 'active' : ''}`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
