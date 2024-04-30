import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AvailableHoursComponent from "../AvaliableHoursComponent";
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
import { generateAvailableHours, useProfessionals } from "../ClientSideConsultation";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { StyledContainer, StyledDoctorConsultationContainer } from "./style";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { EventContext } from "../../CalendarApi";
import CalendarEventComponent from "../AvaliableHoursComponent";

const DoctorConsultationPage = () => {
  const { createEvent } = useContext(EventContext);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { accessToken, userData } = useContext(AccessTokenContext); // Use accessToken and userData
  const { psychologists, lawyers } = useProfessionals();
  const { doctorname } = useParams();

 
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
    <StyledContainer>
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
      <Footer/>
      </>
      ) : (
      
      <>
      <Header/>
      <StyledDoctorConsultationContainer>
      <div style={{display: "flex",justifyContent: "center", alignContent: "center",flexWrap: "wrap" , width: "100vw", height: "90vh"}}>
        <h1 style={{fontFamily: "DolceVita"}}>Faça <a href="/login">login</a> para continuar.</h1>
      </div>
      </StyledDoctorConsultationContainer>
      <Footer/>
      </>
      
      )}
      
    </StyledContainer>
  );
};

export default DoctorConsultationPage;
