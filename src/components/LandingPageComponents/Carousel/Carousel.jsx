import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import slide1 from '../../../assets/imgs/banners/1.webp';
import slide2 from '../../../assets/imgs/banners/2.webp';
import slide3 from '../../../assets/imgs/banners/3.webp';
import ProfessionalConsultationInteractionButton from '../../StyledButtons/SeeMoreAnimatedButton';
import { FaBook } from 'react-icons/fa6';
import GlobalStyleDefault from '../../../GlobalStyles';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 90%;
  height: 100%;
  position: relative;
  top: 0;
  z-index: 0;
  border-radius: 25px;

@media (max-width: 991px) {
  width: 100%;
  
  
}


`;

const Slide = styled.div`
  height: 100%;
  display: flex;
  width: 100%; /* Width based on number of slides */
  transition: transform 2.8s cubic-bezier(0.19, 1, 0.22, 1); /* Smooth transition */
  transform: ${({ translateValue }) => `translateX(${translateValue}%)`};
  border-radius: 25px;
  
`;

const SlideItem = styled.div`
  flex: 1 0 100%;
  
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%; /* Alteração: Utilizando 100% para largura e altura */
  padding-bottom: 1%;
  z-index: 3;
  border-width: 4px;
  border-radius: 25px;
`;



const Button = styled.button`
  position: absolute;
  bottom: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  z-index: 2;
  background: rgba(0, 0, 0, 0.19);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.3px);
  -webkit-backdrop-filter: blur(10.3px);
  color: ${GlobalStyleDefault.colors.textwhite};
  border: 1px solid white;
  ${({ direction }) => (direction === 'prev' ? 'left: 0;' : 'right: 0;')}
`;

const Carousel = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideCount = 6; // Adjust the number of slides here
  const autoAdvanceTimeout = 6000; // Adjust the time interval for auto-advance (in milliseconds)
 

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
        style={{ backgroundImage: `url(${slide1})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ProfessionalConsultationInteractionButton destiny={"/consultation"} text={"Agende Agora sua Consulta!"} icon={<FaBook/>} />
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${slide2})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <ProfessionalConsultationInteractionButton destiny={"/consultation"} text={"Ver Profissionais!"} icon={<FaBook/>} />
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${slide3})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
       <ProfessionalConsultationInteractionButton destiny={"/blog"} text={"Ver Blog"} icon={<FaBook/>} />
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${slide1})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ProfessionalConsultationInteractionButton destiny={"/consultation"} text={"Agende Agora sua Consulta!"} icon={<FaBook/>} />
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${slide2})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <ProfessionalConsultationInteractionButton destiny={"/consultation"} text={"Ver Profissionais"} icon={<FaBook/>} />
        </SlideItem>
        <SlideItem 
        style={{ backgroundImage: `url(${slide3})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
       <ProfessionalConsultationInteractionButton destiny={"/blog"} text={"Ler postagens mais recentes!"} icon={<FaBook/>} />
        </SlideItem>
       
      </Slide>
      <Button className='NextPrev' direction="prev" onClick={prevSlide}>
        Anterior
      </Button>
      <Button className='NextPrev' direction="next" onClick={nextSlide}>
       
        Próximo
       
      </Button>
    </CarouselContainer>
  );
};

export default Carousel;
