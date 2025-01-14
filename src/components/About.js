import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChartBar, FaCode, FaMobileAlt, FaRobot } from 'react-icons/fa';

// Styled Components
const AboutContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  color: #ffffff;
`;

const Header = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const Description = styled(motion.p)`
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 3rem auto;
  font-size: 1.2rem;
  color: #f0f8ff;
`;

const FeaturesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, #f0f8ff, #e6e6fa);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(135deg, #e6e6fa, #dcdcdc);
  }

  h3 {
    font-size: 1.5rem;
    color: #6e45e2;
    margin-bottom: 1rem;
  }

  p {
    color: #333333;
    font-size: 1rem;
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #6e45e2;
    background: #ffffff;
    border-radius: 50%;
    padding: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Feature data
const features = [
  {
    icon: <FaChartBar />,
    title: 'Data Analytics',
    description: 'Transforming complex datasets into actionable insights to drive informed decision-making.',
  },
  {
    icon: <FaCode />,
    title: 'Website Development',
    description: 'Creating modern, responsive websites tailored to enhance your online presence.',
  },
  {
    icon: <FaRobot />,
    title: 'Artificial Intelligence',
    description: 'Delivering cutting-edge AI solutions to automate processes and unlock new opportunities.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'App Development',
    description: 'Developing intuitive mobile applications to keep your business connected and innovative.',
  },
];

// Main About Component
const About = () => {
  const navigate = useNavigate();

  return (
    <AboutContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </Header>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        KLICKS is a dynamic company specializing in data analytics, website development, artificial intelligence, and app development. We combine cutting-edge technologies with industry expertise to deliver innovative solutions tailored to meet our clients' unique needs.
      </Description>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </Header>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/service/${feature.title}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.5 }}
          >
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </AboutContainer>
  );
};

export default About;
