import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending Sign-Up Request:', { name, email, password });
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      console.log('Response:', response.data);
      alert('User registered successfully!');
    } catch (err) {
      console.error('Error in Sign-Up:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.error || 'Failed to register. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p className="alternate-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
