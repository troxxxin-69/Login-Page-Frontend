

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" />} />
        
        
        <Route path="/login" element={<LoginPage />} />
        
      
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;