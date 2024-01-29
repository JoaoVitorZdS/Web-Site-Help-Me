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
   margin-bottom: 100px;
   margin-left: 50px;

   .cube {
      position: relative;
      width: 301px;
      height: 301px;
      transform-style: preserve-3d;
      transform: rotateX(-30deg);
      animation: ${rotateAnimation} 5s linear infinite;
   }

   .cube div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
   }

   .cube div span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
    to bottom,
    hsl(330, 3.13%, 25.1%) 0%,
    hsl(177.27, 21.71%, 32.06%) 5.5%,
    hsl(176.67, 34.1%, 36.88%) 12.1%,
    hsl(176.61, 42.28%, 40.7%) 19.6%,
    hsl(176.63, 48.32%, 43.88%) 27.9%,
    hsl(176.66, 53.07%, 46.58%) 36.6%,
    hsl(176.7, 56.94%, 48.91%) 45.6%,
    hsl(176.74, 62.39%, 50.91%) 54.6%,
    hsl(176.77, 69.86%, 52.62%) 63.4%,
    hsl(176.8, 76.78%, 54.08%) 71.7%,
    hsl(176.83, 83.02%, 55.29%) 79.4%,
    hsl(176.85, 88.44%, 56.28%) 86.2%,
    hsl(176.86, 92.9%, 57.04%) 91.9%,
    hsl(176.88, 96.24%, 57.59%) 96.3%,
    hsl(176.88, 98.34%, 57.93%) 99%,
    hsl(176.89, 99.07%, 58.04%) 100%
  );
      transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
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
      background-color: hsl(330, 3.13%, 25.1%);
      transform: rotateX(90deg) translateZ(150px);
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

// Se necessário, você pode exportar outros componentes Styled Components daqui
