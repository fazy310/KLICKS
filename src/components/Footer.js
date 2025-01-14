import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  color: #fff;
  text-align: center;
  padding: 1rem 0;

  a {
    color: #61dafb;
    margin: 0 0.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} KLICKS. All rights reserved.</p>
      <div>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
