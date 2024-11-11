import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDog, FaPaw, FaBone, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import idPhoto from '../assets/images/id_photo.jpg';
import photo1 from '../assets/images/pet1.jpg';
import photo2 from '../assets/images/pet2.jpg';
import photo3 from '../assets/images/pet3.jpg';

// Sample image data
const additionalImages = [
  { src: idPhoto, alt: 'master' },
  { src: photo1, alt: 'photo 1' },
  { src: photo2, alt: 'photo 2' },
  { src: photo3, alt: 'photo 3' },
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const InfoContainer = styled.div`
  padding: 20px;
  background: #F7CAC9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const ImageStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const StackedImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 10px;
  margin: 5px;
  transform: rotate(${() => Math.floor(Math.random() * 15) - 7}deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(0deg) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
  }
`;

const InfoList = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 350px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    padding: 10px;
  }
`;
const InfoItem = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.15rem;
  color: #333333;
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Ensures the text wraps within the container */
  word-break: break-word; /* Breaks long words to prevent overflow */
  line-height: 1.5; /* Adds space between lines for better readability */

  strong {
    color: #6B5B95;
    margin-left: 5px;
  }

  svg {
    margin-right: 10px;
    color: #FF6F61;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 8px 0;
  }
`;


const ConnectButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  background-color: #88B04B;
  color: #FFFFFF;
  border-radius: 25px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-top: 15px;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #6B5B95;
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 8px 15px;
  }
`;

const PetInfo = () => {
  const [mainImage, setMainImage] = useState(idPhoto);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <InfoContainer>
      <MainImage src={mainImage} alt="Main Pet" />
      <ImageStackContainer>
        {additionalImages.map((image, index) => (
          <StackedImage
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </ImageStackContainer>
      <InfoList>
        <InfoItem><FaStar /><strong>Name:&nbsp;</strong> (银)圆宝</InfoItem>
        <InfoItem><FaDog /><strong>Type:&nbsp;</strong> Cat</InfoItem>
        <InfoItem><FaPaw /><strong>Breed:&nbsp;</strong> 多伦多深情纯种银渐层</InfoItem>
        <InfoItem><FaCalendarAlt /><strong>Birthday:&nbsp;</strong> 2024.6.28</InfoItem>
        <InfoItem><FaBone /><strong>Special Markings:&nbsp;</strong> Super cute with blue-green pupils!</InfoItem>
        <InfoItem><FaMapMarkerAlt /><strong>Address:&nbsp;</strong> 159 Wellesley St E</InfoItem>
      </InfoList>
      <ConnectButton to="/contact">
        <FaEnvelope /> Connect with Owner
      </ConnectButton>
    </InfoContainer>
  );
};

export default PetInfo;
