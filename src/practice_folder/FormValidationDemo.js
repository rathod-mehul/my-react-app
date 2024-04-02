// FormValidationDemo.js

import React, { useState } from 'react';

function FormValidationDemo() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let errors = {};

    // Simple validation
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    console.log(Object.keys(errors))
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Form submission logic
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete='on'
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" autoComplete='on' name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormValidationDemo;
