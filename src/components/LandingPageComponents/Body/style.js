import styled, { keyframes } from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import headImage from "../../../assets/imgs/womenPng.png"


export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 150vh;
  justify-content: start;
  align-items: center;
  position: relative;
  

  
 


  #firstContainer {
    display: flex;
    width: 110%;
    min-height: 300px;
    height: 460px;
    background-color: ${GlobalStyleDefault.colors.secondary};
    justify-content: right;
    align-content: center;
    margin-top: 4%;
    border-radius: 25px;
    box-shadow: ${GlobalStyleDefault.shadows.large};
    .textFirstContainer{
    width: 50%;
  }
    
    
    div{
      min-height: 300px;
      height: 100%;
      
  text-align: center;
     
      img{
        min-height: 300px;
        height: 420px;
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


      .petalDivMain {
        background: ${GlobalStyleDefault.colors.gradient};
       
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius:  10px 300px 10px 300px;
        min-height: 300px;
        height: 420px;
        width: 300px;
        position: absolute;
        top: 31%;
        box-shadow: ${GlobalStyleDefault.shadows.large};
      }
      .petalDiv {
        background: ${GlobalStyleDefault.colors.gradient};
        transform: rotateX(calc(-4deg * var(--i))) rotateY(calc(9deg * var(--i))) translateZ(calc(90px * var(--i)));
        border-radius:  10px 300px 10px 300px;
        min-height: 300px;
        height: 420px;
        width: 300px;
        position: absolute;
        left: 15%;
      
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
    
  }
  #secondContainer {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: fit-content;
    margin-top: 10%;
    margin-bottom: 10%;
    justify-content: center;
    align-items: center;
    font-size: large;
    gap: 50px;
    button{
      width: 25%;
    }
   
    
    
  }
 
  #thirdContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    height: fit-content;
    max-height: max-content;
    min-height: 300px;
    height: 33vh;
    justify-content: center;
    align-items: center;
    margin-bottom:5%;
    #TitleSecondContainer{
    border-top: 1px  solid grey;
    border-bottom: 1px  solid grey;
    width: 80%;
    justify-content: center;
    display: flex;
    padding: 5px;
    font-family: DolceVita;

    color: ${GlobalStyleDefault.colors.black};
    
  }
  }
`;
