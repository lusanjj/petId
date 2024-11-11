import React from 'react';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #FF6F61, #FFDAB9);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: #FFFFFF;
  font-family: 'Lato', sans-serif; /* Updated font */
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 15px;
  font-family: 'Lato', sans-serif; /* Consistent font */
`;

const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #FFDAB9;
    color: #6B5B95;
  }
`;

const LanguageButton = styled.button`
  background-color: transparent;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  padding: 5px 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #FFDAB9;
    color: #6B5B95;
  }
`;

const Header = ({ toggleLanguage, currentLanguage }) => {
  return (
    <HeaderContainer>
      <Title>
        <FaPaw />
        {currentLanguage === 'en' ? 'Pet ID' : '宠物身份证'}
      </Title>
      <NavBar>
        <NavLink to="/">{currentLanguage === 'en' ? 'Home' : '首页'}</NavLink>
        <NavLink to="/contact">{currentLanguage === 'en' ? 'Contact' : '联系'}</NavLink>
        <LanguageButton onClick={toggleLanguage}>
          {currentLanguage === 'en' ? '中文' : 'EN'}
        </LanguageButton>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
