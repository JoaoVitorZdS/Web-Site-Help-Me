import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 250vh;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 620px) {
    #firstContainer{
      min-height: 15% !important;
    }
    #secondContainer{
      min-height: 35% !important;
     
    }
    #thirdContainer{
      min-height: 10% !important;
      
      
    }
  }
  

  #firstContainer {
    display: flex;
    width: 100%;
    min-height: 25%;
    
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    border-radius: 25px;
    
  }
  #secondContainer {
    display: flex;
    width: 100%;
    height: fit-content;
   
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 0%;
    font-size: large;
   
    
    
  }
  #TitleSecondContainer{
    border-top: 1px  solid grey;
    border-bottom: 1px  solid grey;
    width: 80%;
    justify-content: center;
    display: flex;
    padding: 5px;
  }
  #thirdContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    height: fit-content;
    max-height: max-content;
  
    justify-content: center;
    align-items: center;
    margin-bottom:5%;
  }
`;
