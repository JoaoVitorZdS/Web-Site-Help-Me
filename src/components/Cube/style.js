import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";

const rotateAnimation = keyframes`
   0% {
      transform: rotateX(-30deg) rotateY(0deg);
   }
   100% {
      transform: rotateX(-30deg) rotateY(360deg);
   }
`;

const burstAnimation = keyframes`
   0% {
      transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
   }
   50% {
      transform: rotateY(calc(80deg * var(--i))) translateZ(400px) rotateZ(90deg);
   }
   100% {
      transform: rotateY(calc(90deg * var(--i))) translateZ(150px) rotateZ(0deg);
   }
`;

export const StyledCubeContainer = styled.div`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   
   margin-left: 50px;
  

   .cube {
      position: relative;
      width: 301px;
      height: 301px;
      transform-style: preserve-3d;
      transform: rotateX(-30deg);
      animation: ${rotateAnimation} 8s linear infinite;
   }

   .cube div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      text-align: center;
      justify-content: center;
      
     

   
   }

   .cube div span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(${GlobalStyleDefault.colors.tertiary}, ${GlobalStyleDefault.colors.secondary});
      transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
      cursor: pointer;
      animation: ${({ animate }) => (animate ? burstAnimation : "none")} 5s backwards infinite;
      display: flex;
      justify-content: center;
      align-items: center;
     
   }

   .top {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 300px;
      background: url(../../src/assets/KenzieLogo.png);
      object-fit: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #ffffffee;
      transform: rotateX(90deg) translateZ(150px);

      img{
         width: 100%;
         height: auto;
      }
   }

   .top::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 300px;
      background: rgb(10, 102, 194);
      transform: translateZ(-380px);
      filter: blur(20px);
      box-shadow: 0 0 120px rgba(10, 102, 194, 0.2),
         0 0 200px rgba(10, 102, 194, 0.4), 0 0 300px rgba(10, 102, 194, 0.6),
         0 0 400px rgba(10, 102, 194, 0.8), 0 0 500px rgba(10, 102, 194, 1);
   }

   @media ((max-width: 1020px)) {
      margin-top: 35px;
   }
`;

export const StyledAnimatedCube = styled.div`
   /* Adicione aqui as propriedades específicas do seu componente animado */
   animation: ${burstAnimation} 5s backwards infinite;
`;