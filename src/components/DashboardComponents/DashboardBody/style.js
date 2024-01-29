import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledDashboardBody = styled.div`

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

  .active{
    border-radius: 20px;
    text-shadow: ${GlobalStyleDefault.shadows.activeCategorie};
    color: ${GlobalStyleDefault.colors.secondary};
    
  }
  .component-container{
    width: 50%;
    height: 100%;
  }
  .userSectionsContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
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
