import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const StyledConsultantContainer = styled.div`
  
  height: min-content;
  background-color: transparent;
  margin: 0;
  min-width: 100vw;
  width: fit-content;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: start;
  background-color: ${GlobalStyleDefault.colors.offwhite};
  

  .doctorCard{
    width: max-content;
    height: max-content;
    border: 2px double grey;
    padding: 5px;

    .avaliableHoursDiv{
      width: 100%;
      gap: 5px;
    }
  }
  #doctorCardInfo{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;


    p{
      margin-bottom: -20px;
      font-family: Contacto;
      font-size: 12px;
    }
    
  }
  
  img{
    width: 100px;
  }
  h2{
    color: ${GlobalStyleDefault.colors.secondary} !important;
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
  background-color: ${GlobalStyleDefault.colors.offwhite};

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
 
 
 

  @media (max-width: 535px) {
    div {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 25px;
    }
  }
`;
