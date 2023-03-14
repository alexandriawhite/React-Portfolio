import React, { useState } from 'react';
import { validateEmail } from '../../utils/validators.js';
import '../assets/css/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevState) => ({ ...prevState, [name]: 'This field is required.' }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: null }));
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.name.trim() === '') {
      errors.name = 'This field is required.';
    }
    if (formData.email.trim() === '') {
      errors.email = 'This field is required.';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (formData.message.trim() === '') {
      errors.message = 'This field is required.';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Do something with the form data
      console.log(formData);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to get in touch, please fill out
        the form below or email me directly at alexandriawhitedev@gmail.com.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}
