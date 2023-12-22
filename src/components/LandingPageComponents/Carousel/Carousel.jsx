import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import blue from '../../../assets/imgs/banners/1.png';
import candle from '../../../assets/imgs/banners/2.png';
import mandalah from '../../../assets/imgs/banners/3.png';
import fem from '../../../assets/imgs/banners/4.png';
import dev from '../../../assets/imgs/banners/5.png';
import { useNavigate } from 'react-router-dom';
import { StyledButtonBanner } from '../../StyledButtons/ButtonsBanners';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  z-index: 2;
  
`;

const Slide = styled.div`
  height: 100%;
  display: flex;
  width: 100%; /* Width based on number of slides */
  transition: transform 2.8s cubic-bezier(0.19, 1, 0.22, 1); /* Smooth transition */
  transform: ${({ translateValue }) => `translateX(${translateValue}%)`};
`;

const SlideItem = styled.div`
  flex: 1 0 100%; /* Each slide takes full width */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-repeat: no-repeat;
  background-position: center; /* Center the background image */
  background-size: contain; /* Cover the entire area */
  z-index: 3;
  border-width: 4px;
  border-radius: 25px;
  
`;


const Button = styled.button`
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  z-index: 2;
  border-radius: 2px;

  ${({ direction }) => (direction === 'prev' ? 'left: 0;' : 'right: 0;')}
`;

const Carousel = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideCount = 6; // Adjust the number of slides here
  const autoAdvanceTimeout = 3000; // Adjust the time interval for auto-advance (in milliseconds)


  useEffect(() => {
    let interval;
    const handleAutoAdvance = () => {
      if (!isHovered) {
        interval = setInterval(() => {
          if (translateValue > -100 * (slideCount - 2)) {
            setTranslateValue(prevValue => prevValue - 100);
          } else {
            setTranslateValue(0);
          }
        }, autoAdvanceTimeout);
      }
    };


    handleAutoAdvance();

    return () => clearInterval(interval);
  }, [translateValue, slideCount, isHovered, autoAdvanceTimeout]); // eslint-disable-line react-hooks/exhaustive-deps

  const nextSlide = () => {
    clearInterval();
    if (translateValue > -100 * (slideCount -2)) {
      setTranslateValue(prevValue => prevValue - 100);
    } else {
      setTranslateValue(0);
    }
  };

  const prevSlide = () => {
    clearInterval();
    if (translateValue !== 0) {
      setTranslateValue(prevValue => prevValue + 100);
    } else {
      setTranslateValue(-100 * (slideCount - 4));
    }
  };
  

  return (
    <CarouselContainer>
      <Slide translateValue={translateValue} slideCount={slideCount}>
        <SlideItem 
        style={{ backgroundImage: `url(${blue})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <StyledButtonBanner label="Blog" destinyClass="card"/>
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${mandalah})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
           {/* Conteúdo do slide (opcional) */}
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${candle})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          {/* Conteúdo do slide (opcional) */}
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${fem})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          {/* Conteúdo do slide (opcional) */}
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${mandalah})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          {/* Conteúdo do slide (opcional) */}
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${dev})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          {/* Conteúdo do slide (opcional) */}
        </SlideItem>
      </Slide>
      <Button direction="prev" onClick={prevSlide}>
        Anterior
      </Button>
      <Button direction="next" onClick={nextSlide}>
        Próximo
      </Button>
    </CarouselContainer>
  );
};

export default Carousel;
