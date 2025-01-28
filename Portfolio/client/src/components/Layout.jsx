/**
 * File Name: Layout.js
 * Student's Name: Rona Emre Altug
 * Student ID: 301483434
 * Date: 01/27/2025
 * Description: Layout component for the portfolio website, including header, content, and footer sections.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ronalogopng.png';
import { AppBar, Toolbar, Typography, Button, Box, BottomNavigation } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


/**
 * Layout Component
 * Renders the primary structure of the portfolio website, including:
 * - Header with navigation links
 * - Content section for dynamic page content
 * - Footer with contact information
 */
export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      {/* Header Section */}
      <AppBar position="fixed">
        <Toolbar>
          <img src={logo} alt="logo" style={{ width: '110px', height: '110px', marginRight: '10px', padding: '5px', borderRadius: '14px' }} />
          {/* Title */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              color: 'pink', 
              textShadow: '0 0 5px cyan, 0 0 10px cyan, 0 0 15px cyan, 0 0 20px cyan, 0 0 25px cyan, 0 0 30px cyan, 0 0 35px cyan',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '2rem',
              fontFamily: 'Orbitron, sans-serif'
            }}
          >
             Portfolio
          </Typography>
          {/* Navigation Links */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/service">Service</Button>
          <Button color="inherit" component={Link} to="/project">Project</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
      {/* Content Section */}
      <Box sx={{ flex: '1 0 auto', marginTop: '50px', padding: '20px' }}>
        {children}
      </Box>
      {/* Footer Section */}
      <BottomNavigation sx={{ backgroundColor: '#1e1e1e', color: 'white', width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', width: '100%' }}>
          <LocationOnIcon sx={{ marginRight: '10px' }} />
          <Typography variant="body1">Address: 123 Main Street, Toronto, ON, Canada</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', width: '100%' }}>
          <PhoneIcon sx={{ marginRight: '10px' }} />
          <Typography variant="body1">Phone: (123) 456-7890</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', width: '100%' }}>
          <EmailIcon sx={{ marginRight: '10px' }} />
          <Typography variant="body1">Email: altugronaemre@gmail.com</Typography>
        </Box>
     
      </BottomNavigation>
    </Box>
  );
}