import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ isAuthenticated, onSignOut }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      {!isAuthenticated ? (
        <>
          <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>Sign Up</Link>
          <Link to="/signin" className={location.pathname === '/signin' ? 'active' : ''}>Sign In</Link>
        </>
      ) : (
        <>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>My Profile</Link>
          <button onClick={onSignOut}>Sign Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;