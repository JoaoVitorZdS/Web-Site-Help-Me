import styled from "styled-components";
import imgbck from "../../assets/imgs/cloudsModern.jpeg"
export const StyledLoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  background-image: url(${imgbck});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  #fullHexagon{
    width: 100vh;
    height: 100vh;
    position: absolute;
    z-index: -2;
    right: -18px;
    
  }
  #fullHexagon2{
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -2;
    
  }
  
`;
