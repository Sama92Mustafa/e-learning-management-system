import React, { useState } from 'react';
import { registerUser } from '../api/api';

const Register = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      await registerUser(userData);
      alert('User registered successfully');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
