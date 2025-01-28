import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ronalogo.jpg';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Layout() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" width="50" height="50" />
          <Typography variant="h6" style={{ flexGrow: 1, marginLeft: 10 }}>
            Rona Web Page
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/education">Education</Button>
          <Button color="inherit" component={Link} to="/project">Project</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}