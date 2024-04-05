import styled from "styled-components";
import GlobalStyleDefault from "./GlobalStyles";
import './App.css'
import bck from "./assets/imgs/backgroudStained.png"

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 90vh;
  transition: all ease-in-out 1s;
  background-image: url(${bck});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  overflow-x: hidden;
  color: ${GlobalStyleDefault.colors.text};
  
  
`;
