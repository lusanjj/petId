import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPaw, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #FF6F61, #FFDAB9);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
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

  a {
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
  }

  @media (max-width: 768px) {
    display: none; /* Hide the desktop navbar on smaller screens */
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  color: #FFFFFF;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #FF6F61;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  a {
    display: block;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.2rem;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #FFDAB9;
      color: #6B5B95;
    }
  }

  @media (min-width: 769px) {
    display: none; /* Ensure mobile menu doesn't show on larger screens */
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px 8px;
  }
`;

const Header = ({ toggleLanguage, currentLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Title>
        <FaPaw />
        {currentLanguage === 'en' ? 'Pet ID' : '宠物身份证'}
      </Title>
      <NavBar>
        <Link to="/">{currentLanguage === 'en' ? 'Home' : '首页'}</Link>
        <Link to="/contact">{currentLanguage === 'en' ? 'Contact' : '联系'}</Link>
        <LanguageButton onClick={toggleLanguage}>
          {currentLanguage === 'en' ? '中文' : 'EN'}
        </LanguageButton>
      </NavBar>
      <MobileMenuIcon onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
      <MobileNav open={menuOpen}>
        <Link to="/" onClick={handleMenuToggle}>
          {currentLanguage === 'en' ? 'Home' : '首页'}
        </Link>
        <Link to="/contact" onClick={handleMenuToggle}>
          {currentLanguage === 'en' ? 'Contact' : '联系'}
        </Link>
        <LanguageButton onClick={toggleLanguage}>
          {currentLanguage === 'en' ? '中文' : 'EN'}
        </LanguageButton>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
