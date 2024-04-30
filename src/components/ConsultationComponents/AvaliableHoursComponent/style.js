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
export const DoctorConsultationClientInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  align-self: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.19);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  margin-top: 2vh;
  padding: 25px 10px;
 

h3{
  text-align: center;
}

input{
  border: none;
  width: 90%;
  padding: 5px 5px;
  border-radius: 5px;
}
textarea{
  border: none;
  width: 90%;
  padding: 5px 5px;
  border-radius: 5px;
  resize: vertical;
}
.ScheduleButton{
  border: none;
  width: 90%;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: ${GlobalStyleDefault.colors.secondary};
      color: ${GlobalStyleDefault.colors.text};
      font-family: 'DolceVita';
      cursor: pointer;

}

.modal{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 2vw;
  box-sizing: border-box;
  border-radius: 15px;
  .modal-content{
    width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  
  }

  .close{
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .modal-buttons{
    width: 100%;
  }
  button{
    border: none;
    margin: 2%;
    width: 200px;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: ${GlobalStyleDefault.colors.secondary};
      color: ${GlobalStyleDefault.colors.text};
      font-family: 'DolceVita';
      cursor: pointer;
  }
}
`


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
  

