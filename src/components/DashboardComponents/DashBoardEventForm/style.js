import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledDashboardEventForm = styled.div`
  height: auto;
  background-color: transparent;
  margin: 0;
  width: 90vw;
  
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;
  
  
 
  .active{
    box-shadow: ${GlobalStyleDefault.shadows.card};
  }
  .component-container{
    width: 50vw;
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
 
  h4 {
    color: rgb(173, 20, 20);
    font-size: 32px;
    font-weight: 800;
  }
  h4::before {
    display: inline;
    content: "⚠ ";
  }
  h2,
  h3 {
    color: #ffffff;
    margin-top: 50px;
    padding-left: 25px;
  }

  @media (max-width: 535px) {
    width: 100vw;
    margin-left: -25vw;
  }

 
`;
