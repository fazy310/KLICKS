import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  color: #ffffff;
  text-align: center;
  min-height: 60vh;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: fit-content;

  svg {
    font-size: 1.5rem;
    color: #6e45e2;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    color: #333333;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Header>Contact Us</Header>
      <ContactDetails>
        <ContactItem>
          <FaEnvelope />
          <p>Email: fazy.310@gmail.com</p>
        </ContactItem>
        <ContactItem>
          <FaPhone />
          <p>Phone: +92 313 0509386</p>
        </ContactItem>
        <ContactItem>
          <FaMapMarkerAlt />
          <p>Address: Warsak Road I-9/1 Islamabad, Pakistan</p>
        </ContactItem>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;
