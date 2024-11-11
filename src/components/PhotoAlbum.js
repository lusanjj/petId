import React from 'react';
import styled from 'styled-components';

// Sample image data - replace with your own or use an API to fetch images
const petImages = [
  { src: '/assets/images/pet1.jpg', alt: 'Pet 1' },
  { src: '/assets/images/pet2.jpg', alt: 'Pet 2' },
  { src: '/assets/images/pet3.jpg', alt: 'Pet 3' },
  { src: '/assets/images/pet4.jpg', alt: 'Pet 4' },
  { src: '/assets/images/pet5.jpg', alt: 'Pet 5' },
];

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f0f4f8;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:hover img {
    filter: brightness(0.8);
  }

  &:hover .caption {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PetImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  transition: filter 0.3s;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;
`;

const PhotoAlbum = () => {
  return (
    <AlbumContainer>
      {petImages.map((image, index) => (
        <ImageWrapper key={index}>
          <PetImage src={image.src} alt={image.alt} />
          <Caption className="caption">{image.alt}</Caption>
        </ImageWrapper>
      ))}
    </AlbumContainer>
  );
};

export default PhotoAlbum;
