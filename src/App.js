import styled from "styled-components";
import GlobalStyleDefault from "./GlobalStyles";
import './App.css'

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 90vh;
  background-color: ${GlobalStyleDefault.colors.primary};
  --gap: 5em;
  --line: 1px;
  --color: rgba(255, 255, 255, 0.2);

  background-image: linear-gradient(
      -90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    ),
    linear-gradient(
      0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    );
    background-size: var(--gap) var(--gap);
  margin: 0;
  overflow-x: hidden;
  color: ${GlobalStyleDefault.colors.text};
  backdrop-filter: blur(10px);
  
`;
