import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";


export const StyledCubeContainer = styled.div`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   margin-bottom: 100px;
   margin-left: 50px;

   body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: rgb(0, 0, 0);
   }

   .cube {
      position: relative;
      width: 301px;
      height: 301px;
      transform-style: preserve-3d;
      transform: rotateX(-30deg);
      animation: animate 20s linear infinite;
   }

   @keyframes animate {
      0% {
         transform: rotateX(-30deg) rotateY(0deg);
      }
      100% {
         transform: rotateX(-30deg) rotateY(360deg);
      }
   }
   @keyframes burst {
      0% {
         transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
      }
      50% {
         transform: rotateY(calc(80deg * var(--i))) translateZ(400px)
            rotateZ(90deg);
      }
      100% {
         transform: rotateY(calc(90deg * var(--i))) translateZ(150px)
            rotateZ(0deg);
      }
   }

   /*animation: burst 5s backwards infinite;*/

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
      background: linear-gradient(#151515, ${GlobalStyleDefault.colors.primary});
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
      background-color: #151515;
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
