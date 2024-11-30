import React, { useState } from 'react';
import { loginUser } from '../api/api';

const SignIn = ({ onSignIn }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      await loginUser(userData);
      alert('User logged in successfully');
      onSignIn();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SignIn;