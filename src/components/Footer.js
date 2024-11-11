import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';

const FooterContainer = styled.footer`
  background-color: #FF6F61;
  padding: 20px 15px;
  text-align: center;
  width: 100%;
  box-sizing: border-box; /* Ensures padding doesn't increase the total width */
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactItem = styled.div`
  color: #FFFFFF;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #FFFFFF;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #FFDAB9;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FooterText = styled.p`
  margin-top: 10px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactItem>
          <FaPhone />
          <span>+1 (437) 226-3728</span>
        </ContactItem>
        <ContactItem>
          <SiWechat />
          <span>WeChat: lusanj02</span>
        </ContactItem>
        <ContactItem>
          <a href="https://www.instagram.com/a_lusanj02" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <span>lusanj02</span>
          </a>
        </ContactItem>
      </ContactInfo>
      <FooterText>© {new Date().getFullYear()} Shane Liu. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
