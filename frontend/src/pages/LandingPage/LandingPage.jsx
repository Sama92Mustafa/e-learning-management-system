import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to MERN Magic</h1>
        <p>Your ultimate e-learning platform to learn, grow, and achieve your goals!</p>
        
      </header>
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Interactive Courses</h3>
            <p>Access a variety of interactive courses designed by industry experts.</p>
          </div>
          <div className="feature">
            <h3>Track Progress</h3>
            <p>Keep track of your progress and achieve milestones efficiently.</p>
          </div>
          <div className="feature">
            <h3>Community Support</h3>
            <p>Join a community of learners and collaborate on projects.</p>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; 2024 MERN Magic. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
