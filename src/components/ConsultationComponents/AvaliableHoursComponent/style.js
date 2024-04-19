import styled, { keyframes } from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import backgroundImage from "../../../assets/imgs/HourModalBackground.jpg"
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const ConfirmationDoctorConsultationStyledModal = styled.div`


display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
height: 94vh;
width: 100%;
gap: 2%;
justify-content: space-between;
background-image: url(${backgroundImage});
background-position: center;
background-size: cover;
justify-items: center;
overflow: auto;
animation: ${slideIn} 0.5s ease-in-out; /* Apply slide-in animation */

input::placeholder{
  color: ${GlobalStyleDefault.colors.textwhite};
}
textarea::placeholder{
  color: ${GlobalStyleDefault.colors.textwhite};
}
input, textarea{
  border-radius: 15px;
  border: 0;
  background-color: #0c0c0c1c;
  color: ${GlobalStyleDefault.colors.text};
  padding: 5px;
  background: rgba(255, 255, 255, 0.19);
border-radius: 2px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.25);
margin-bottom: 10px;
width: 96%;


  
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
  margin-bottom: 5vh;
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
  background: rgba(255, 255, 255, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.25);

width: 96%;

}

p i {
  font-weight: 800;
  color: ${GlobalStyleDefault.colors.textwhite};
  padding-right: 5px;
  animation: all ease-in-out 2s;
}

label p {
  margin: 0;
  color: ${GlobalStyleDefault.colors.textwhite};
}
@media (max-width: 510px) {
 grid-template-columns: 1fr;

 }
`;

export const AvailableHoursStyledDiv = styled.div`
box-shadow:0px 8px 16px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(62, 62, 62, 0.8);
padding: 7px;
border-radius: 15px;
 display: flex;
 flex-direction: column;
margin-bottom: 4%;
width: 90%;
 min-width: 300px;
 justify-self: center;
 background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

 ul{
  
  background: rgba(255, 255, 255, 0.19);
border-radius: 2px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.25);

 }
 .AvaliableHoursOptions{
  background: rgba(255, 255, 255, 0.19);
border-radius: 2px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.25);
  &:hover{
   
    opacity: 0.8;
    
  }
 }

 h3{
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  gap: 15px;
}


 @media (max-width: 660px) {
  margin-top: -5%;
  
 }
 @media (max-width: 510px) {
  margin-top: -5%;
  

 }
`
export const DoctorInfoCard = ({ doctorInfo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
      <img
        src={doctorInfo.picture || genericProfilePhoto }
        alt="Profile"
        style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover" }}
      />
      <i>{doctorInfo.name}</i>
      <i>{doctorInfo.work_area}</i>
    </div>
  );
};
  

