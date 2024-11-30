import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', formData)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
      })
      .catch(error => console.error('Error during login:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
