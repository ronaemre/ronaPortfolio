/**
 * File Name: Contact.js
 * Student's Name: Rona Emre Altug
 * Student ID: 301483434
 * Date: 01/27/2025
 * Description: Contact page component for the portfolio website. Allows users to view contact information and send a message via a form.
 */
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * Contact Component
 * Displays:
 * - Contact information (address, phone, email)
 * - A form for users to send a message
 */

export default function Contact() {
  // Navigation hook
  const navigate = useNavigate();
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

    /**
   * Handle input change
   * Updates the state when a form field is modified.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

    /**
   * Handle form submission
   * Logs form data and redirects to the home page.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme kodu buraya gelecek
    console.log(formData);
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', padding: '40px 20px' }}>
       {/* Contact Information Section */}
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
        {/* Contact Header */}
        <Typography variant="h4" sx={{ marginBottom: '20px', color: 'black', textShadow: '0 0 5px pink, 0 0 10px pink' }}>
          Contact Information
        </Typography>
         {/* Contact Details */}
        <Typography variant="body1" sx={{ color: 'black', marginBottom: '20px' }}>
          Address: 123 Main Street, Anytown, USA
          <br />
          Phone: (123) 456-7890
          <br />
          Email: altugronaemre@gmail.com
        </Typography>
         {/* Form Header */}
        <Typography variant="h5" sx={{ marginBottom: '20px', color: 'black', textShadow: '0 0 5px pink, 0 0 10px pink' }}>
          Send Us a Message
        </Typography>
         {/* Message Form */}
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             {/* First Name Field */}
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
            {/* Last Name Field */}
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
             {/* Contact Number Field */}
            <TextField
              label="Contact Number"
              variant="outlined"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
              required
            />
            {/* Email Address Field */}
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            {/* Message Field */}
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
            />
             {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}