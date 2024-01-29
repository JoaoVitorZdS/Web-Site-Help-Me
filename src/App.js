import styled from "styled-components";
import GlobalStyleDefault from "./GlobalStyles";
import './App.css'

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 90vh;
  background-color: ${GlobalStyleDefault.colors.primary};
  margin: 0;
  overflow-x: hidden;
  color: ${GlobalStyleDefault.colors.text};
  background: ${GlobalStyleDefault.colors.gradient};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  
`;
