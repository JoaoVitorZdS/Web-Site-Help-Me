import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const ProfessionalSideConsultationStyledDiv = styled.div`
 display: flex ;
 flex-direction: row;
 
 justify-content: space-between;
 align-content: center;
 min-width: 320px;
 margin-top: 15px;
 padding: 5px;
 background-color: whitesmoke;
 min-height: min-content;
 max-height: max-content;
 p{
    margin-top: 2px;
  }


 .Profesional_consultation_tag{
  width: 20px;
  height: 100%;
  margin-right: 5px;
 }
 
 .Accept_Decline_or_Reject_Buttons_container{
  width: min-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;

  button{
    border-radius: 15px;
    border: 0;
    width: 70px;
    height: 25px;
    background-color: ${GlobalStyleDefault.colors.secondary};
    color: white;
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
