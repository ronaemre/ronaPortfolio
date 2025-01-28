/**
 * File Name: Project.js
 * Student's Name: Rona Emre Altug
 * Student ID: 301483434
 * Date: 01/27/2025
 * Description: Projects page showcasing different projects worked on by the developer. 
 * Each project is displayed with a title, description, and accompanying image.
 */
import React from 'react';
import { Container, Typography, Paper, Box, Grid2 } from '@mui/material';
import mesImage from '../assets/MES.jpg'; 
import graduationImage from '../assets/EXCHANGECOM.jpg'; 
import stockImage from '../assets/Stock.jpg';

/**
 * Project Component
 * Displays a list of projects with descriptions, titles, and images.
 */
export default function Project() {
  return (
     <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '40px 20px' }}>
       {/* Page Title */}
     <Typography variant="h4" sx={{ marginBottom: '10px', color: 'pink', textShadow: '0 0 5px cyan, 0 0 10px pink' }}>
          Projects
     </Typography>

     {/* Projects List */}
     <Grid2 container spacing={4}>
       {/* MES Project */}
       <Grid2 item xs={12}>
         <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
           {/* Image Section */}
           <Box sx={{ flex: '0 0 auto', marginRight: '20px' }}>
             <img src={mesImage} alt="MES Project" style={{ width: '400px', borderRadius: '10px' }} />
           </Box>
           <Box sx={{ flex: '1 1 auto', textAlign: 'left' }}>
             {/* Project Details */}
             <Typography variant="h6" sx={{ marginBottom: '10px', color: 'cyan' }}>
               MES Project (My current project)
             </Typography>
             <Typography variant="body1" sx={{ color: 'white' }}>
               • Collaborated within a team of four at a dynamic start-up, contributing to the development of Manufacturing Execution System (MES) and Enterprise Resource Planning (ERP) projects.
               <br />
               • Played an active role in designing and implementing projects from scratch, leveraging technologies such as React.js, MS SQL, and PHP.
               <br />
               • Gained hands-on experience in full-cycle development, actively exploring and applying innovative coding approaches to solve complex challenges.
             </Typography>
           </Box>
         </Paper>
       </Grid2>
        {/* Graduation Project */}
       <Grid2 item xs={12}>
         <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            {/* Image Section */}
           <Box sx={{ flex: '0 0 auto', marginRight: '20px' }}>
             <img src={graduationImage} alt="Graduation Project" style={{ width: '400px', borderRadius: '10px' }} />
           </Box>
           {/* Project Details */}
           <Box sx={{ flex: '1 1 auto', textAlign: 'left' }}>
             <Typography variant="h6" sx={{ marginBottom: '10px', color: 'cyan' }}>
               EXCHANGE.COM (Graduation Project)
             </Typography>
             <Typography variant="body1" sx={{ color: 'white' }}>
               For my graduation project, I undertook the development of an innovative platform called EXCHANGE.COM, where I combined my expertise in frontend development using React.js and backend development using Golang technology. This website is planned to serve as an interactive and user-friendly platform to facilitate the seamless exchange of information and resources. The aim of the project is to reduce today's excessive consumption habit.
             </Typography>
           </Box>
         </Paper>
       </Grid2>
        {/* Stock Management Project */}
       <Grid2 item xs={12}>
         <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
           {/* Image Section */}
           <Box sx={{ flex: '0 0 auto', marginRight: '20px' }}>
             <img src={stockImage} alt="Stock Management Project" style={{ width: '400px', borderRadius: '10px' }} />
           </Box>
           {/* Project Details */}
           <Box sx={{ flex: '1 1 auto', textAlign: 'left' }}>
             <Typography variant="h6" sx={{ marginBottom: '10px', color: 'cyan' }}>
               Stock Management Project
             </Typography>
             <Typography variant="body1" sx={{ color: 'white' }}>
             I am in the early stages of planning a comprehensive project aimed at delivering effective solutions for the management of inventory and accounting processes for a leather jacket store operating across two branches. The system will be designed to streamline stock tracking, improve financial record-keeping, and enhance overall operational efficiency. By integrating modern tools and technologies, this project will help the business achieve better visibility into its inventory levels, optimize resource allocation, and maintain accurate accounting records to support sustainable growth             </Typography>
           </Box>
         </Paper>
       </Grid2>
     </Grid2>
   </Container>
  );
}