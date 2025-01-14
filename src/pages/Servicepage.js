import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import excelImg from '../assets/excel.png';
import googleSheetsImg from '../assets/googlesheets.png';
import appSheetImg from '../assets/appsheet.png';
import powerBIImg from '../assets/power-bi.png';
import powerAutomateImg from '../assets/powerautomate.png';
import pythonImg from '../assets/python.png';
import zapierImg from '../assets/zapier.png';
import htmlCssImg from '../assets/htmlcss.png';
import reactImg from '../assets/react.png';
import bootstrapImg from '../assets/bootstrap.png';
import bubbleImg from '../assets/bubble.png';
import nodeJsImg from '../assets/nodejs.png';
import chatbotImg from '../assets/chatbot.png';
import forecastingImg from '../assets/forecastingmodel.png';
import javascriptImg from '../assets/javascript.png';
import flutterImg from '../assets/flutter.png';
import phpImg from '../assets/php.png';
import sqlImg from '../assets/sql.png';

// Styled components
const ServiceContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  color: #ffffff;
  min-height: 100vh;
  text-align: center;
`;

const Header = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const TechnologyList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TechnologyCard = styled(motion.div)`
  background: #ffffff;
  color: #333333;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h4 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #6e45e2;
  }

  svg {
    font-size: 2rem;
    color: #88d3ce;
  }
`;

// Technology Data
const servicesData = {
  'Data Analytics': [
    { name: 'Excel', image: excelImg },
    { name: 'Google Sheets', image: googleSheetsImg },
    { name: 'App Sheet', image: appSheetImg },
    { name: 'PowerBI', image: powerBIImg },
    { name: 'Power Automate',  image: powerAutomateImg },
    { name: 'Python', image: pythonImg },
    { name: 'Zapier Integration', image: zapierImg },
  ],
  'Website Development': [
    { name: 'HTML/JavaScript',  image: htmlCssImg },
    { name: 'React', image: reactImg },
    { name: 'Bootstrap', image: bootstrapImg },
    { name: 'Bubble', image: bubbleImg },
    { name: 'Node.js',image: nodeJsImg },
  ],
  'Artificial Intelligence': [
    { name: 'Customized Chatbots',image: chatbotImg },
    { name: 'PowerBI AI Analytics', image: powerBIImg },
    { name: 'Python',  image: pythonImg },
    { name: 'Forecasting Models',  image: forecastingImg },
  ],
  'App Development': [
    { name: 'JavaScript',  image: javascriptImg },
    { name: 'Flutter',  image: flutterImg },
    { name: 'Python', image: pythonImg },
    { name: 'PHP',  image: phpImg },
    { name: 'SQL',  image: sqlImg },
  ],
};

const ServicePage = () => {
  const { serviceName } = useParams(); // Get the service name from the URL
  const technologies = servicesData[serviceName] || []; // Get related technologies

  return (
    <ServiceContainer>
      <Header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {serviceName}
      </Header>
      <TechnologyList>
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <img src={tech.image} alt={tech.name} />
            {tech.icon}
            <h4>{tech.name}</h4>
          </TechnologyCard>
        ))}
      </TechnologyList>
    </ServiceContainer>
  );
};

export default ServicePage;
