import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const StyledConsultantContainer = styled.div`
  
  height: fit-content;
  background-color: transparent;
  margin: 0;
  min-width: 95vw;
  width: fit-content;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: start;
  
  



 .professionalUL{
  width: 90vw;
  display: flex;
  flex-direction: row;
  gap: 15px;
  overflow-x: scroll;
  padding-top: 1%;
  height: 90%;
 
  
  
 }
  

  .doctorCard{
    width: 320px;
    height: max-content;
    border: 2px double grey;
    padding: 0;
    border-radius: 15px;
    margin-bottom: 5%;
    box-shadow: ${GlobalStyleDefault.shadows.card};
    p{
      margin: 0;
    }
   
    .avaliableHoursDiv{
      width: 100%;
      gap: 0;
    }
  }
 
  .doctorCardInfoContainer{
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    background-color: ${GlobalStyleDefault.colors.secondary};
    border-radius: 15px;
    gap: 0;

    .doctorCardInfo{
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      height: 120px;
     
    }


    p{
      font-family: DolceVita;
      font-size: 12px;
      color: ${GlobalStyleDefault.colors.offwhite};
    }
    
  }
  
  img{
    width: 100px;
    border-radius: 15px;
  }
  h2{
    color: ${GlobalStyleDefault.colors.tertiarystrong} !important;
    font-family: "DolceVita";
  }
  `
export const StyledClientSideConsultationComponent = styled.div`
  height: 100%;
  background-color: transparent;
  margin: 0;
  width: 99vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;

 .AvaliableHoursWrapper{
  width: 94%;
  display: flex;
  justify-content: center;
  align-content: center;
 }
 

  h1{
    margin-left: 5%;
  }
 
  .active{
    box-shadow: ${GlobalStyleDefault.shadows.card};
  }
  .component-container{
    width: 50%;
    height: 50%;
  }
  .userSectionsContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 33%;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    color: #ffffff;
  }
  
  .petalWrapper{
    width: 90%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background-color: ${GlobalStyleDefault.colors.secondary};
    padding: 2%;
    border-radius: 15px;
    margin-bottom: 50px;
  

      img{
        min-height: 320px;
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
      @keyframes zoomPetaldiminished {
        0%, 100% {
          transform: scale(0.5);
        }
        50% {
          transform: scale(0.7);
        }
      } 
      @keyframes zoom {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      } 
      @keyframes zoomreverse {
        0% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
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
        height: 320px;
        width: 300px;
        max-width: 90%;
        position: absolute;
        top: 2%;
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

  

 
 

  @media (max-width: 845px) {
    .petalWrapper{
      flex-direction: column;
      justify-content: space-between;
      height: min-content;
      

      img{
        transform: scale(0.6);
        margin-top: -20%;
      margin-bottom: -20%;
        &:hover {
          
          animation: zoomPetaldiminished 2s  infinite;
        }
      }

      .textFirstContainer{
        z-index: 9;
      }
     
      .petalDiv{
        top: 35%;
      
      }
    }

    
  }

`;
