/**
 * File Name: App.jsx
 * Student's Name: Rona Emre Altug
 * Student ID: 301483434
 * Date: 01/27/2025
 * Description: Displays a list of services offered by the this web page with images, titles, and descriptions.
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

/**
 * App Component
 * Wraps the entire application in the Router to enable routing functionality.
 */
const App = () => {
 return (
 <Router>
 {/* Main routing logic */}
 <MainRouter />
 </Router>
 );
};
export default App;
