import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import '../../../App.css'
export const StyledFAQBody = styled.div`
  height: auto;
  background-color: transparent;
  margin: 0;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;
  

  ul {
    list-style: none;
    padding: 0;
    
  }

  .FaqQuestions {
    border-top: 1px grey solid;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }

  .faq-question {
    min-height: 40px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 1px grey solid;
    cursor: pointer;
    position: relative;
    padding-left: 15px;
    font-family: "DolceVita";

    &:hover {
      background-color: ${GlobalStyleDefault.colors.secondary}; /* Cor de fundo ao passar o mouse */
    }

    &.open {
      height: auto;
      transition: height 2s ease-in-out;
    }
  }

  .faq-answer {
    
    overflow: hidden;
    transition: height 3s ease-in-out;
    position: relative;
    padding: 25px;
    background-color: white;

    &.open {
      height: 100px; /* Defina a altura desejada */
      transition: height 3s ease-in-out;
    }
  }
`;
