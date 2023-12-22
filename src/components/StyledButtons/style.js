import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";

export const StyledButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 50px;
  border-radius: 6px;
  border-width: 1px;
  background-color: ${GlobalStyleDefault.colors.tertiary};
  box-shadow: ${GlobalStyleDefault.shadows.medium};
  

  #logoContainer {
    width: 20%;
    height: 100%;
    background-color: ${GlobalStyleDefault.colors.primary};
  }
  #sloganContainer {
    width: 20%;
    height: 100%;
    background-color: ${GlobalStyleDefault.colors.secondary};
  }
  #buttonsContainer {
    width: 20%;
    height: 100%;
    background-color: ${GlobalStyleDefault.colors.tertiary};
  }
  #labelStyledButton {
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    text-decoration: dotted;
  }
`;

export const StyledGoogleButtonContainer = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 19%;
  min-width: 225px;
  height: 40px;
  padding: 10px;
  border-radius: 6px;
  border-width: 1px;
  background-color: #fff;
  box-shadow: ${GlobalStyleDefault.shadows.medium};

  #labelStyledGoogleButton {
    font-weight: 500;
    font-size: 12px;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    text-decoration: dotted;
  }
`
