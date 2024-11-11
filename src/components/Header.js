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
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #FFFFFF;
  font-family: 'Lato', sans-serif;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const NavBar = styled.nav`
  display: flex;
  gap: 15px;
  font-family: 'Lato', sans-serif;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
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

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 5px 8px;
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

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 5px 8px;
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
