import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';

const FooterContainer = styled.footer`
  background-color: #FF6F61;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ContactItem = styled.div`
  color: #FFFFFF;
  font-size: 1.5rem;
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
`;
const FooterText = styled.p`
  margin: 10;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
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
            <span> lusanj02</span>
          </a>
        </ContactItem>
      </ContactInfo>
      <FooterText>© {new Date().getFullYear()} Shane Liu. All rights reserved.</FooterText>

    </FooterContainer>
  );
};

export default Footer;
