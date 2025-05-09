// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css'; // optional for styling
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Trim and convert to lowercase for email comparison
    const validEmail = 'zomato@gmail.com';
    const validPassword = 'zomato@123';

    if (
      email.trim().toLowerCase() === validEmail.toLowerCase() &&
      password === validPassword
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <form className="login-form p-4 border rounded bg-light shadow" onSubmit={handleLogin}>
        <h2 className="mb-4 text-center">Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-danger w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
