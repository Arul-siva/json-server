import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

export const Mail = () => {
  const [formData, setFormData] = useState({name: "", email: "", phone: "",});

  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s.]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    const allSameDigit = /^(\d)\1{9}$/;
    return regex.test(phone) && !allSameDigit.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newErrors = {};
    // if (!validateName(formData.name)) newErrors.name = 'Name should only contain letters, spaces, and dots.';
    // if (!validateEmail(formData.email)) newErrors.email = 'Email should be in lowercase and follow the format: example@example.com';
    // if (!validatePhone(formData.phone)) newErrors.phone = 'Phone number should be 10 digits and not all the same digit.';
    // setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log("Form data:", formData);
      emailjs.send('service_zfvuz3t', 'template_9j1t11i', formData, 'DPaxvpxbEUxBsz-N2')
        .then((response) => {
          console.log('Email sent:', response.status, response.text);
        }, (error) => {
          console.error('Error sending email:', error);
        });

      alert("Form submitted successfully!");

      setFormData({name: "", email: "", phone: "",});
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,[name]: value,});
  };

  return (
    <div className="container mt-5">
      <style jsx>{`
       .container {
          max-width: 600px;
        }
        h1 {
          color: #007bff;
        }
      `}</style>
      <h1 className="text-center mb-4">Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};
