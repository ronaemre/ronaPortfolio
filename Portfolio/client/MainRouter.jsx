/**
 * File: MainRouter.js
 * Student's Name: Rona Emre Altug
 * StudentID: 301483434
 * Date: 01/27/2025
 * 
 * Description: This file defines the main routing structure for the React application.
 * It contains all the routes and components that the application uses to navigate between 
 * different pages such as Home, About, Services, Project, and Contact.
 * 
 * Sections:
 * 1. Imports: Import necessary components and react-router-dom for routing.
 * 2. MainRouter: Defines the routing for different paths and elements.
 */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/about'
import Contact from './src/components/contact'
import Project from './src/components/project'
import Layout from './src/components/Layout'
import Services from './src/components/services'

/**
 * MainRouter Component:
 * This component contains all the routes for navigating between pages in the app.
 */
const MainRouter = () => {
 return (
 <div>
  {/* Layout component that wraps the page structure */}
 <Layout/>
  {/* Routes for different page components */}
 <Routes>
 
 <Route exact path="/" element={<Home />} /> {/* Home Page Route */}
 <Route exact path="/about" element={<About />} /> {/* About Page Route */}
 <Route exact path="/service" element={<Services />} /> {/* Services Page Route */}
 <Route exact path="/project" element={<Project />} /> {/* Project Page Route */}
 <Route exact path="/contact" element={<Contact />} /> {/* Contact Page Route */}
 
 </Routes>
 </div>
)
}
export default MainRouter
