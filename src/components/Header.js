import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #88d3ce, #6e45e2); /* Reverse gradient */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the logo and nav on smaller screens */
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 100px; /* Default logo size for large screens */
    width: auto;
    margin-right: 10px; /* Space between logo and text */

    @media (max-width: 1024px) {
      height: 80px; /* Smaller logo size for tablets */
    }

    @media (max-width: 768px) {
      height: 60px; /* Smaller logo size for mobile */
      margin-bottom: 0.5rem;
    }
  }

  h1 {
    font-size: 1.8rem;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.5rem; /* Smaller text size on mobile */
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    justify-content: center; /* Center the logo and text on smaller screens */
    flex-direction: column; /* Stack the logo and text */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: bold;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700; /* Highlighted color on hover */
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #ffd700; /* Gold underlining */
      transition: width 0.3s ease;
      position: absolute;
      bottom: -4px;
      left: 0;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem; /* Reduce gap between links on mobile */
  }

  @media (max-width: 480px) {
    flex-wrap: wrap; /* Allow links to wrap on very small screens */
    justify-content: center;
    gap: 0.8rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="Kicks Logo" />
        <h1>KLICKS</h1>
      </LogoContainer>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
