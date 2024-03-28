import styled from "styled-components";

export const StyledLoginHead = styled.div`
  height: 65%;
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* From https://css.glass */
background: rgba(255, 255, 255, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(7.7px);
border: 1px solid rgba(255, 255, 255, 0.25);
  z-index: 1;
  position: relative;
  top: 15%;
  h5{
    margin: 0;
  }
  ul{
    margin: 0;
    list-style: decimal;


    li{
      font-size: small;
    }
  }

  img {
    position: relative;
    top: 0;
    width: 140px;
    border-radius: 9px;
  }

  #signInContainerLoginPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px;
    border-width: 1px;
    border-color: white;
    gap: 25px;

  }
`;
