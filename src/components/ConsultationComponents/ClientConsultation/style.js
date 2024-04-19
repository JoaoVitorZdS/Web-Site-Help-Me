

import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const ClientSideConsultationStyledDiv = styled.div`
 display: flex ;
 flex-direction: column;
 justify-content: space-between;
 align-content: center;
 width: fit-content;
 height: 240px;
 padding: 5px;
 box-shadow: ${GlobalStyleDefault.shadows.large}, inset 0 0 10px rgba(62, 62, 62, 0.8);
 background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
 
  &:hover{
    box-shadow: ${GlobalStyleDefault.shadows.card}, inset 0 0 10px rgba(62, 62, 62, 0.8);

  }
 
 p{
    padding: 0;
    margin-top: 2px;
    font-weight: 700 ;
    font-family: Arial, Helvetica, sans-serif;
  }

  p i {
    font-family: monospace;
    font-weight: 500;
    font-size: large;
  }

  textarea{
    width: 90%;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    background-color: transparent;
    border-radius: 5px;
    padding: 2px;
    color: black;
    text-indent: 10px;
   
    
    
  }

 .glassConfirmed{
  background: rgba(62, 225, 62, 0.78);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(62, 225, 62, 0.3);
 }
 
 
 .Cancel_Button_container{
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 5%;

  button{
    border-radius: 15px;
    border: 0;
    width: 70px;
    height: 25px;
    background-color: ${GlobalStyleDefault.colors.secondarystrong};
    box-shadow: ${GlobalStyleDefault.shadows.large};
    color: white;
  }

  button:hover{
    cursor: pointer;
    box-shadow: ${GlobalStyleDefault.shadows.card};

  }
 
 }

 @media (max-width: 535px) {
  
 
  
  .Profesional_consultation_tag{
  width: 100%;
  height: 100%;
 
 }

 .Profesional_consultation_tag_container{
  align-self: center;
  height: 150px;
  width: 20px;
  margin-right: 5px;
  
  
 }
  
 }
 @media (max-width: 380px) {
  
 
 .Profesional_consultation_tag_container{

  height: 180px;
  
 }
  
 }
`;
