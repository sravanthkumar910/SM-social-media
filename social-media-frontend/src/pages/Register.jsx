import { useState } from 'react';
import './Auth.css';

const Register = ({ onLoginSuccess, onSwitch }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user:', formData);
    onLoginSuccess(); // Simulate success
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>
        <div className="switch-link">
          Already have an account? <span onClick={onSwitch}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
