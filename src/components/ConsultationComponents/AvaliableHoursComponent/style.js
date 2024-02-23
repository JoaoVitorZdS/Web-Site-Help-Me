import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const ConfirmationDoctorConsultationStyledModal = styled.div`


display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
height: 100vh;
justify-content: space-between;

input, textarea{
  border-radius: 15px;
  border: 0;
  background-color: #0c0c0c1c;
  color: ${GlobalStyleDefault.colors.text};
  padding: 5px;
  
}
label{
  margin-top: 15px;
  text-indent: 5px;
}
 

 button.zoom{
  border: 0;
  width: 50%;
  background-color: ${GlobalStyleDefault.colors.secondarystrong};
  color: ${GlobalStyleDefault.colors.textwhite};
  font-weight: 700;
  font-size: 1rem;
  padding: 3px;
  border-radius: 15px;
  align-self: center;
  animation: zoom 2s infinite;
  cursor: pointer;
  margin-bottom: 5px;
 }
 button.cancel{
  border: 0;
  width: 50%;
  background-color: #b30000;
  color: ${GlobalStyleDefault.colors.textwhite};
  font-weight: 700;
  font-size: 1rem;
  padding: 3px;
  border-radius: 15px;
  align-self: center;
  cursor: pointer;
  margin-bottom: 5px;
 }
 @keyframes zoom {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      } 

.doctorInfo{
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

p i {
  font-weight: 800;
}
@media (max-width: 510px) {
 grid-template-columns: 1fr;

 }
`;

export const AvaliableHoursStyledDiv = styled.div`
box-shadow:0px 8px 16px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(62, 62, 62, 0.8);
padding: 7px;
border-radius: 15px;
 display: flex;
 flex-direction: column;
 width: 90%;
 justify-self: center;


 @media (max-width: 660px) {
  margin-top: -5%;
  transform: scale(0.8);
 }
 @media (max-width: 510px) {
  margin-top: -5%;
  transform: scale(0.8);

 }
`

  

