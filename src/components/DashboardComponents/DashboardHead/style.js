import styled from "styled-components";

export const StyledDashboardHead = styled.div`
  height: auto;
  margin: 0 auto;
  width: 85vw;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 3%;
  gap: 3%;
  background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
padding: 2vh 5vw;
 
  #userInfoContainer{
    width: fit-content;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  i{
    margin-right: 5%;

  }

   
  }
  
  #userPicContainer{
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    
  }

  #buttonsContainer{
   display: flex;
   
   flex-direction: row;
   margin-bottom: 5%;
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
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
}

`;
