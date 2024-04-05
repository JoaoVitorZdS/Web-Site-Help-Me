import styled, { keyframes } from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import headerImagebackgroud from "../../../assets/imgs/NuvensAzuis.jpeg"
export const StyledBodyContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, Sections, Footer */
  min-height: 100vh;
  width: 100vw;
  justify-items: center;
 


 
  /*#firstContainer {
    display: flex;
    width: 90vw;
    min-height: 400px;
    height: 460px;
    background-color: ${GlobalStyleDefault.colors.secondary};
    justify-content: right;
    align-content: center;
    margin-top: 4%;
    border-radius: 25px;
    position: relative;
    box-shadow: ${GlobalStyleDefault.shadows.large};
    .textFirstContainer{
      width: 50%;
    }

    div{
      min-height: 300px;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      img{
        min-height: 380px;
        height: 100%;
        box-shadow: ${GlobalStyleDefault.shadows.large};
        border-radius:  10px 300px 10px 300px;
        margin: 15px;
        background:${GlobalStyleDefault.colors.gradient} ;
        background-blend-mode: soft-light;
        z-index: 20;
        position: relative;
        &:hover {
          animation: zoomPetal 2s  infinite;
        }
      }

      @keyframes zoomPetal {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      } 
      @keyframes flowPetal {
        0%, 100% {
          transform: scale(1);
          transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(0px * var(--i)))
        }
        25% {
          transform: scale(1.1);
          transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(40px * var(--i)))
        }
        50% {
          transform: scale(1);
          transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(90px * var(--i)))
        }
        75% {
          transform: scale(1.1);
          transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(11deg * var(--i))) translateZ(calc(40px * var(--i)))
        }
      } 

      

      
      .petalDiv {
        background: ${GlobalStyleDefault.colors.gradient};
        transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(90px * var(--i)));
        border-radius:  10px 300px 10px 300px;
        min-height: 300px;
        height: 420px;
        width: 300px;
        max-width: 90%;
        position: absolute;
        bottom: 25px;
        left: 5%;
        box-shadow: ${GlobalStyleDefault.shadows.large};
        z-index: calc(-1*var(--i));
      }

      h1{
        font-family: DolceVita;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        color: ${GlobalStyleDefault.colors.textwhite}
      }
      span{
        font-size: 1;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
        color: ${GlobalStyleDefault.colors.textwhite};
      }
    }    
  }*/
 
  #firstContainer {
    display: flex;
    width: 96vw;
    min-height: 350px;
    height: 400px;
    
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    border-radius: 25px;
    
  }
  #secondContainer {
    display: grid; /* Alteração */
    grid-template-columns: 1fr 1fr; /* Responsivo: 300px min, 1fr max */
    gap: 50%; /* Espaçamento entre as colunas */
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-top: 10%;
    font-size: calc(1rem + 0.5vw) !important; /* Ajusta o tamanho da fonte conforme a largura da viewport */

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 50px;
    }
   .imgSecondContainer{
    width: 300px;
    align-self: center;

    @media (max-width: 991px) {
      width: 250px;
    }
   
   }
 
    
  }
  @keyframes fadeInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
  @keyframes fadeInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-on-scroll {
  opacity: 1;
    animation: fadeInFromRight 1s ease forwards;
  }
.animate-on-scroll-left  {
  opacity: 1;
    animation: fadeInFromLeft 1s ease forwards;
  }
  .none{
    opacity: 0;
  }
.categoryButton{
  background-color: red !important;
}


  #thirdContainer {
    display: grid; /* Alteração */
    grid-template-rows: 150px auto; 
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    
    
    #TitleSecondContainer{
      border-top: 1px  solid grey;
      border-bottom: 1px  solid grey;
      width: 96%;
      justify-content: center;
      display: flex;
      padding: 5px;
      font-family: DolceVita;
      color: ${GlobalStyleDefault.colors.black};   
    }
  }


//-------------------------------------------------------------------@media-------------------------------------------------------------//
  @media (max-width: 770px) {
    #firstContainer {
      min-height: 200px;
      height: 260px;
    div{
      

      .petalDiv {
        left: 4%;
        transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(90px * var(--i))) scale(0.8);
      }

    }    
  }
 
    
  }
  @media (max-width: 620px) {
    #firstContainer {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

    .textFirstContainer{
      
      width: 90%;
      z-index: 5;
    }

    div{

      .petalDiv {
        bottom: -20%;
        left: 4%;
        transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(90px * var(--i))) scale(0.8);
      }

    }    
  }
 
    
  }
  @media (max-width: 500px) {
    #firstContainer {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      min-height: 100px;
      height: 175px;

    .textFirstContainer{
      font-size: medium;
      margin-top: 7%;
      width: 90%;
      z-index: 5;
    }

    div{

      .petalDiv {
        bottom: -15%;
        transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(90px * var(--i))) scale(0.6);
      }

    }    
  }
    
  }
`;

