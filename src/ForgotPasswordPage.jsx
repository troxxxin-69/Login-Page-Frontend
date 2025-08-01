import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope } from 'react-icons/fa';

import './App.css'; 

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
     
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p className="instructions">Enter your email address and we'll send you a link to reset your password.</p>
        
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <FaEnvelope className="icon" />
        </div>
        
        <button type="submit" className="login-button">Submit</button>
        
        
        {message && <div className="message success">{message}</div>}
        
        <div className="back-to-login-link">
          <Link to="/">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;