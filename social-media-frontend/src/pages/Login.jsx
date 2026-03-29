import { useState } from 'react';
import './Auth.css';

const Login = ({ onLoginSuccess, onSwitch }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    onLoginSuccess(); // Simulate success
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} required />

          <button type="submit">Login</button>
        </form>
        <div className="switch-link">
          Don’t have an account? <span onClick={onSwitch}>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
