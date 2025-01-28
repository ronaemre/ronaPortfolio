/**
 * File Name: Services.js
 * Student's Name: Rona Emre Altug
 * Student ID: 301483434
 * Date: 01/27/2025
 * Description: Displays a list of services offered by the this web page with images, titles, and descriptions.
 */
import React from 'react';
import { Container, Typography, Grid2, Paper, Box } from '@mui/material';
import webDevImage from '../assets/webDevImage.jpg'; // Web Development için resim
import mobileAppImage from '../assets/mobileAppImage.jpg'; // Mobile App Development için resim
import customSoftwareImage from '../assets/custom.jpg'; // Custom Software Solutions için resim
import eCommerceImage from '../assets/eCommerce.jpg'; // E-Commerce Development için resim
import consultingImage from '../assets/consulting.jpg'; // General Programming and Consulting için resim

export default function Services() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '70px 20px' }}>
      {/* Title Section */}
      <Typography variant="h4" sx={{ marginBottom: '10px', color: 'pink', textShadow: '0 0 5px cyan, 0 0 10px pink' }}>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', color: 'white' }}>
        Welcome to our services page! We are dedicated to providing high-quality solutions tailored to your unique needs. Explore the range of services we offer:
      </Typography>
      {/* Services Section */}
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
            <img src={webDevImage} alt="Web Development" style={{ width: '100%', borderRadius: '10px' }} />
            <Typography variant="h6" sx={{ marginTop: '20px', color: 'cyan' }}>
              Web Development
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'left' }}>
              Create stunning, user-friendly websites that deliver seamless experiences across all devices. From landing pages to complex web applications, we bring your vision to life.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
            <img src={mobileAppImage} alt="Mobile App Development" style={{ width: '100%', borderRadius: '10px' }} />
            <Typography variant="h6" sx={{ marginTop: '20px', color: 'cyan' }}>
              Mobile App Development
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'left' }}>
              Transform ideas into interactive and powerful mobile applications. Whether for iOS or Android, our apps are designed to engage users and drive results.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
            <img src={customSoftwareImage} alt="Custom Software Solutions" style={{ width: '100%', borderRadius: '10px' }} />
            <Typography variant="h6" sx={{ marginTop: '20px', color: 'cyan' }}>
              Custom Software Solutions
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'left' }}>
              Streamline your business processes with bespoke software designed to meet your specific requirements. We deliver efficient and scalable solutions that adapt as you grow.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
            <img src={eCommerceImage} alt="E-Commerce Development" style={{ width: '100%', borderRadius: '10px' }} />
            <Typography variant="h6" sx={{ marginTop: '20px', color: 'cyan' }}>
              E-Commerce Development
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'left' }}>
              Build robust online stores to reach more customers and boost your sales. Our e-commerce solutions include user-friendly interfaces, secure payment gateways, and scalable platforms.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
            <img src={consultingImage} alt="General Programming and Consulting" style={{ width: '100%', borderRadius: '10px' }} />
            <Typography variant="h6" sx={{ marginTop: '20px', color: 'cyan' }}>
              General Programming and Consulting
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'left' }}>
              Need help with coding challenges or technical consulting? We provide expert programming services and guidance to help you achieve your goals.
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
      {/* Why Choose Us Section */}
      <Typography variant="h5" sx={{ marginTop: '40px', color: 'cyan', textShadow: '0 0 5px pink, 0 0 10px pink' }}>
        Why Choose Us?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', color: 'white' }}>
        Expert Team
        <br />
        Reliable Solutions
        <br />
        Customer-Centric Approach
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '20px', color: 'cyan' }}>
        Let’s bring your ideas to life! Contact us today to learn more about how we can help.
      </Typography>
    </Container>
  );
}