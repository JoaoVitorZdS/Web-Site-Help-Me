import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AvailableHoursComponent from "../AvaliableHoursComponent";
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
import { generateAvailableHours, useProfessionals } from "../ClientSideConsultation";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { StyledDoctorConsultationContainer } from "./style";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { EventContext } from "../../CalendarApi";
import CalendarEventComponent from "../AvaliableHoursComponent";

const DoctorConsultationPage = () => {
  const { createEvent } = useContext(EventContext);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { accessToken, userData } = useContext(AccessTokenContext); // Use accessToken and userData
  const { psychologists, lawyers } = useProfessionals();
  const { doctorname } = useParams();
  console.log(doctorname)
  console.log(psychologists)
  console.log(lawyers)
 
  const professional = [...psychologists, ...lawyers].find(
    prof => prof.name === doctorname
  );
  
  if (!professional) {
    return <h1>Profissional não encontrado</h1>;
  }
  
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
 

  return (
    <div>
      {accessToken ? (
        <>
        <Header/>
      <StyledDoctorConsultationContainer>
        <div className="ContainerStyledDoctorConsultationContainer">
          <div className="doctorInfo">
            <div className="Imagewrapper">
              <img src={professional.picture || genericProfilePhoto} alt="" />
              <div>
                <h2>{professional.name}</h2>
                <h3>{professional.work_area}</h3>
                <h4>R${professional.value}</h4>
              </div>
            </div>
            <div className="infowrapper">
              <button onClick={toggleDescription}>{isDescriptionOpen ? 'Fechar Descrição' : 'Abrir Descrição'}</button>
              <br />
              {(isDescriptionOpen) ? (
                <div className="description" dangerouslySetInnerHTML={{ __html: professional.description }}></div>
              ) : (<p>{professional.shortIntro}</p>)}
            </div>
          </div>
          <CalendarEventComponent/>
        </div>
      </StyledDoctorConsultationContainer>
      <Footer/></>
      ) : (
      
      <>
      <Header/>
      <StyledDoctorConsultationContainer>
      <h1>Faça login</h1>
      </StyledDoctorConsultationContainer>
      <Footer/></>
      
      )}
      
    </div>
  );
};

export default DoctorConsultationPage;
