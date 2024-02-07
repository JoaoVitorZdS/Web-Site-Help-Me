import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const StyledConsultantContainer = styled.div`
  
  height: min-content;
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
  
  
 }
  

  .doctorCard{
    width: 320px;
    height: max-content;
    border: 2px double grey;
    padding: 0;
    border-radius: 15px;

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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
     
    }


    p{
      font-family: Contacto;
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
 
 
 

  @media (max-width: 535px) {
    
  }
`;
