import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Import your logo image

const HeroContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, rgba(110, 69, 226, 0.6), rgba(136, 211, 206, 0.6));
  text-align: center;
  color: #ffffff;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack logo and text on smaller screens */
  }
`;

const LogoContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 500px;
    width: auto;

    @media (max-width: 1024px) {
      height: 400px; /* Scale down image on tablets */
    }

    @media (max-width: 768px) {
      height: 250px; /* Scale down image on mobile devices */
    }
  }
`;

const HeroText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Text shadow for better contrast */

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Smaller font size on mobile */
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0;
    color: #f0f8ff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Subtle shadow for paragraph */

    @media (max-width: 768px) {
      font-size: 1rem; /* Smaller font size on mobile */
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    align-items: center; /* Center-align text on smaller screens */
  }
`;

const Hero = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Logo Section */}
      <LogoContainer
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="Kicks Logo" />
      </LogoContainer>

      {/* Text Section */}
      <HeroText>
        <h1>Welcome to KLICKS</h1>
        <p>Your trusted partner in data analytics, AI, and cutting-edge development solutions.</p>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
