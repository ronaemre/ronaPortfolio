/**
 * File: index.js
 * Student's Name: Rona Emre Altug
 * StudentID: 301483434
 * Date: 01/27/2025
 * 
 * Description: This is the main entry point for the React application. It renders 
 * the App component into the root element of the HTML.
 * 
 * Sections:
 * 1. Imports: Import React, ReactDOM, the App component, and the global styles.
 * 2. Rendering: The App component is rendered within React.StrictMode to check for potential problems in the application.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 

// Rendering the App component inside the StrictMode for better development environment practices
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);