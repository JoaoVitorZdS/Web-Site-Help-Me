

import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const ClientSideConsultationStyledDiv = styled.div`
 display: flex ;
 flex-direction: column;
 justify-content: space-between;
 align-content: center;
 width: fit-content;
 height: 250px;
 padding: 1%;
 box-shadow: ${GlobalStyleDefault.shadows.large};
 background-color: ${GlobalStyleDefault.colors.secondary};
  border-radius: 15px;
 
  &:hover{
    box-shadow: ${GlobalStyleDefault.shadows.card};

  }
 
 p{
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
    width: 100%;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    background-color: transparent;
    border-radius: 5px;
    padding: 2px;
    color: black;
   
    
    
  }


 
 
 .Accept_Decline_or_Reject_Buttons_container{
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
    background-color: ${GlobalStyleDefault.colors.secondary};
    box-shadow: ${GlobalStyleDefault.shadows.large};
    color: white;
  }

  button:hover{
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

  
