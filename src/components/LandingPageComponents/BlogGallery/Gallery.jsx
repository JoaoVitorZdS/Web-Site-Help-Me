import React from "react";
import { Post, StyledGalleryContainer } from "./style";
import cardBack from '../../../assets/imgs/pinkClouds3.jpg';
import cardFront from '../../../assets/imgs/Candle.jpg';
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";

export function Gallery() {
  const posts = [
    { id: 1, title: 'Post 1', image: '', content: 'Conteúdo do Post 1' },
    { id: 2, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
    { id: 3, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
    { id: 4, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
    { id: 5, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
    { id: 6, title: 'Post 2', image: 'url-da-imagem-2.jpg', content: 'Conteúdo do Post 2' },
  ];

  // const navigate = useNavigate();

  return (
    <StyledGalleryContainer>
      {posts.map(post => (
        
          <div class="card">

<div class="content">

    <div class="back">
    
        <div class="back-content">
        </div>
      
    </div>
    
    <div class="front">
    
      <div class="front-content">
      </div>
      
    </div>
    
</div>
</div>

        
      ))}
    </StyledGalleryContainer>
  );
}
