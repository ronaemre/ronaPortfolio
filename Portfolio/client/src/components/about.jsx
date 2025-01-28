// File name: about.jsx
// Student's Name: Rona Emre Altug
// StudentID: 301483434
// Date: 01/27/2025
import React from 'react';
import { Box, Typography, Container, Paper, Avatar, List, ListItem, ListItemText, Button } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import profileImage from '../assets/profile.jpeg'; 
import IconButton from '@mui/material/IconButton';
import resume from '../assets/RonaCV.pdf';

// About Component
export default function About() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '40px 20px' }}>
      <Paper elevation={3} sx={{ padding: '40px', backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
        <Avatar
          alt="Rona Emre Altug"
          src={profileImage}
          sx={{ width: 150, height: 180, margin: '0 auto 20px' }}
        />
        <Typography variant="h4" sx={{ marginBottom: '20px', color: 'pink', textShadow: '0 0 5px cyan, 0 0 10px pink' }}>
          Rona Emre Altug
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', marginBottom: '20px' }}>
          I am a passionate web developer with a strong background in creating dynamic and responsive web applications. I have a keen interest in learning new technologies and improving my skills. My goal is to build user-friendly and efficient applications that solve real-world problems.
        </Typography>
        <List sx={{ color: 'white', textAlign: 'center', display: 'inline-block', margin: '0 auto' }}>
          <ListItem sx={{textAlign: 'center' }}>
            <ListItemText primary="• Experienced in developing and designing web applications using React.js, CSS, JavaScript, and PHP." />
          </ListItem>
          <ListItem sx={{textAlign: 'center' }}>
            <ListItemText primary="• Skilled in frontend development, web services, and database management, with a strong focus on building and deploying complex solutions." />
          </ListItem>
        </List>
        <Box sx={{ marginTop: '20px' }}>
          <IconButton component="a" href="https://github.com/ronaemre" target="_blank" sx={{ color: 'white',fontSize: '3rem'  }}>
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/rona-emre-altuğ-rea123/" target="_blank" sx={{ color: 'white',fontSize: '3rem'  }}>
            <LinkedIn  fontSize="inherit"/>
          </IconButton>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" component="a" href={resume} target="_blank">
            Download Resume
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}