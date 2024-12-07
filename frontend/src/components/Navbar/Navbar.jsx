import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../logo.jpg';

const Navbar = ({ isAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Site Logo" className="site-logo" />
        <h1 className="site-title">e-Learning System</h1>
      </div>
      <div className="nav-links">
      <Link to="/landing" className={`nav-link ${location.pathname === '/landing' ? 'active' : ''}`}>
          <h2>Welcome</h2>
        </Link>
       
        {isAuthenticated ? (
          <>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <h2>Home</h2>
            </Link>
        
            <Link to="/myprofile" className={`nav-link ${location.pathname === '/myprofile' ? 'active' : ''}`}>
              <h2>My Profile</h2>
            </Link>
            
            <button onClick={handleSignOut} className="nav-link signout-button">
              <h2>Sign Out</h2>
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className={`nav-link ${location.pathname === '/signin' ? 'active' : ''}`}>
              <h2>Sign In</h2>
            </Link>
            <Link to="/signup" className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`}>
              <h2>Sign Up</h2>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
