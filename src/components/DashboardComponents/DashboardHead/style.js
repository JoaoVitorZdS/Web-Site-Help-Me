import styled from "styled-components";

export const StyledDashboardHead = styled.div`
  height: 20vh;
  margin: 0 auto;
  width: 98vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

 
  #userInfoContainer{
    width: 70%;
    height: 90%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: end;

  i{
    margin-right: 5%;

  }

   
  }
  
  #userPicContainer{
    width: 23%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  #buttonsContainer{
   display: flex;
   
   flex-direction: row;
   margin-bottom: 5%;
  }

  img {
  
   height: 100%;
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
    margin: 3% ;
    
    div {
      font-size: smaller;
      font-weight: 700;
      
    }
  }

  @media (max-width: 320px) {
    font-size: small;
  img {
    width: 80%;
   
  }
}

`;
