/**
 * File Name: Home.js
 * Student's Name: Rona Emre Altug
 * Student ID: 301483434
 * Date: 01/27/2025
 * Description: Home page component for the portfolio website. Displays a welcome message and navigation buttons to key sections.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

/**
 * Home Component
 * Displays:
 * - A welcome message with styling
 * - Navigation buttons to "About Me", "My Projects", and "Contact Me" sections
 */

// Home Component
export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '40px 20px' }}>
      {/* Header Section */}
      <Paper elevation={3} sx={{ padding: '40px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
        {/* Welcome Message */}
        <Typography variant="h2" sx={{ marginBottom: '20px', color: 'pink', textShadow: '0 0 5px cyan, 0 0 10px pink' }}>
          Welcome to Rona's Portfolio
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '40px', color: 'white' }}>
          Our mission is to showcase the best projects and achievements.
        </Typography>
        {/* Navigation Buttons Section */}
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item>
            {/* About Me Button */}
            <Button variant="contained" color="primary" component={Link} to="/about" sx={{ padding: '10px 20px', fontSize: '1rem' }}>
              About Me
            </Button>
          </Grid2>
          <Grid2 item>
            {/* My Projects Button */}
            <Button variant="contained" color="secondary" component={Link} to="/project" sx={{ padding: '10px 20px', fontSize: '1rem' }}>
              My Projects
            </Button>
          </Grid2>
          <Grid2 item>
            {/* Contact Me Button */}
            <Button variant="contained" color="success" component={Link} to="/contact" sx={{ padding: '10px 20px', fontSize: '1rem' }}>
              Contact Me
            </Button>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
}