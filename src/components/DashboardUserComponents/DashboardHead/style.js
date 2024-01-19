import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledDashboardHead = styled.div`
  height: 100px;
  
  margin: 0 auto;
  width: 70vw;
  min-width: 320px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

 
  #userInfoContainer{
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

   
  }
  
  #userPicContainer{
    width: 13%;
    height: 90%;
    
  }

  #buttonsContainer{
   display: flex;
   flex-direction: row;
   margin-bottom: 5%;
  }

  img {
   width: 100%;
    border-radius: 25px;
  }
  button {
    background-color: #343b41;
    border: transparent;
    color: #ffffff;
    height: 20px;
    width: 100px;
    border-radius: 15px;
    padding: 5px;
    margin-left: 3% ;
    
    div {
      font-size: smaller;
      font-weight: 700;
      
    }
  }

  @media screen and (max-width: 320px) {
    font-size: small;
  img {
    width: 80%;
   
  }
}
  @media screen and (min-width: 320px) {
    font-size: small;
  img {
    width: 80%;
   
  }
}
  @media screen and (min-width: 768px) {
    font-size: medium;
  img {
    width: 90%;
   
  }
}
  @media screen and (min-width: 1024px) {
    
  img {
    width: 100%;
  }
}
  @media screen and (min-width: 1440px) {
   
  img {
   
  }
}
`;
