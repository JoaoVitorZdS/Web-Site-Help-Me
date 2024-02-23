import React, { useState } from "react";
import { FixedButtons } from "../../StyledButtons/FixedButtonsAllScreens";
import { TestsButtonsLandingPage } from "../../StyledButtons/TestsButtons";
import { Gallery } from "../BlogGallery/Gallery";
import Carousel from "../Carousel/Carousel";
import { StyledBodyContainer } from "./style";
import "../../../App.css";
import consultationImage from "../../../assets/imgs/woman-talking-with-psychologist.png";
import OnlineTesting from "../../../assets/imgs/online-testing.png";

import AnimatedPlantButton from "../../StyledButtons/AnimatedPlantButton";
import { useNavigate } from "react-router-dom";
import GlobalStyleDefault from "../../../GlobalStyles";
import Quiz from "../../Quiz";

export function Body() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledBodyContainer>
      <div id="firstContainer">
        <Carousel />
      </div>
      <div
        id="secondContainer"
        onMouseOver={handleMouseEnter}
        onMouseEnter={handleMouseEnter}
        onLoad={handleMouseEnter}

      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            className={isHovered ? "animate-on-scroll-left" : "none"}
            src={OnlineTesting}
            alt=""
            style={{ width: "300px" }}
          />
          <h4
          className={isHovered ? "animate-on-scroll-left" : "none"}
            style={{
              width: "280px",
              fontFamily: "DolceVita",
              textAlign: "center",
              color: `${GlobalStyleDefault.colors.text}`,
            }}
          >
            Responda a algumas perguntas e descubra qual é o melhor atendimento
            para você!
          </h4>
          <div
          
          className={isHovered ? "animate-on-scroll-left" : "none"}
          >

          <AnimatedPlantButton
            name="Faça um teste"
            destiny={"quiz"}
            />
            </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            className={isHovered ? "animate-on-scroll" : "none"}
            src={consultationImage}
            alt=""
            style={{ width: "300px" }}
          />
          <h4
           className={isHovered ? "animate-on-scroll" : "none"}
            style={{
              width: "280px",
              fontFamily: "DolceVita",
              textAlign: "center",
              color: `${GlobalStyleDefault.colors.text}`,
            }}
          >
            Escolha uma de nossas profissionais para te ajudar agora mesmo!
          </h4>
          <div
          
          className={isHovered ? "animate-on-scroll" : "none"}
          >

          <AnimatedPlantButton
           
            name="Agende uma consulta"
            destiny={"consultation"}
          />
            </div>
        </div>
      </div>
      <div id="thirdContainer">
        <i id="TitleSecondContainer">Posts Recomendados</i>
       
        <Gallery />
      </div>
    </StyledBodyContainer>
  );
}
