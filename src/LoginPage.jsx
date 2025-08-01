import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';


import './App.css'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      setMessage(response.data.message);
      setIsSuccess(true);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Could not connect to server.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <FaUser className="icon" />
        </div>
        
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <FaLock className="icon" />
        </div>

        <div className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        
        <button type="submit" className="login-button">Login</button>
        
        {message && <div className={`message ${isSuccess ? 'success' : 'error'}`}>{message}</div>}
      </form>
    </div>
  );
}

export default LoginPage;