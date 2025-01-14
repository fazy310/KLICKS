import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.jpeg'; // Placeholder image paths
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.jpeg';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #88d3ce, #6e45e2);
  color: #ffffff;
  min-height: 100vh;
`;

const Header = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 150px; /* Fixed height for all images */
    object-fit: cover; /* Ensure image fits nicely */
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #6e45e2;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555555;
    line-height: 1.6;
    text-align: justify; /* Ensures text is justified */
  }
`;

const projects = [
  {
    title: 'Amazon Keyword Optimization Tool',
    description: 'Enables you to analyze search volume, clicks, purchases, impressions and other KPIs on a weekly basis. User can analyze any week, month or quarter and optimize keyword campaigns.',
    image: project1,
  },
  {
    title: 'Monthly Sales Performance Tracker',
    description: 'Monitors cart sales, ROI, profits, and costs to optimize sales performance and revenue growth.',
    image: project2,
  },
  {
    title: 'Workplace Safety Insights Dashboard',
    description: 'Monitors safety metrics like alcohol tests, safety walkthroughs, and equipment inspections while tracking annual savings.',
    image: project3,
  },
  {
    title: 'Construction Progress and Cost Dashboard',
    description: 'Provides comprehensive tracking of real-time job progress, allowing users to monitor the status and performance of ongoing projects. It also delivers detailed monthly trend analysis for costs incurred, the number of houses completed.',
    image: project4,
  },
  {
    title: 'Amazon Product Performance analysis Tool',
    description: 'Amazon Product Performance Analysis Tool that provides insights into Ad Spend, ACOS, Margin, Net Profit, Ad Conversion Rates, and other KPIs across weekly, monthly, quarterly, and daily intervals',
    image: project5,
  },
  {
    title: 'Real estate Income and Loans Management tool',
    description: 'This tool provides comprehensive analysis of loans, rental income, and credit and debit summaries across multiple properties. Generate customized reports on annual income and savings, tailored to specific projects, investors, income types, and date ranges',
    image: project6,
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Projects
      </Header>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
