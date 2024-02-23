import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"

export const StyledDashboardBody = styled.div`
  height: fit-content;
  min-height: 150vh;
  background-color: transparent;
  margin: 0;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;

  .nonactive{
    color: #ffffffdd;
    border-radius: 20px;
    box-shadow: ${GlobalStyleDefault.shadows.small};
    padding: 0.5rem;
    padding-left: 1rem;
    
    font-family: DolceVita;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active{
    border-radius: 20px;
    box-shadow: ${GlobalStyleDefault.shadows.activeCategorie};
    padding: 0.5rem;
    padding-left: 1rem;
    color: ${GlobalStyleDefault.colors.secondarystrong};
    font-family: DolceVita;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .component-container{
    width: 100%;
    padding: 1%;
    height: 100%;
  }
  .userSectionsContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 50px;
    height: 50px;
    width: 90vw;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    color: ${GlobalStyleDefault.colors.text};
  
  }
 


  @media (max-width: 535px) {

    padding: 0;
    
  }

  @media (max-width: 330px) {

   
    .userSectionsContainer{
      font-size: small;
 
  }
  }
 
`;
