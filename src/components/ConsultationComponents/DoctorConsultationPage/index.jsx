import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AvailableHoursComponent from "../AvaliableHoursComponent";
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
import { generateAvailableHours, useProfessionals } from "../ClientSideConsultation";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { StyledDoctorConsultationContainer } from "./style";

const DoctorConsultationPage = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  const { psychologists, lawyers } = useProfessionals();
  const { doctorname } = useParams();
 
  const professional = [...psychologists, ...lawyers].find(
    (prof) => prof.name === doctorname
    );
    console.log(professional)

  if (!professional) {
    return <h1>Profissional não encontrado</h1>;
  }

  return (
    <div>

      <Header/>
    <StyledDoctorConsultationContainer>
      <div className="ContainerStyledDoctorConsultationContainer">

      
      <div className="doctorInfo">
      <div className="Imagewrapper">

      <img src={professional.picture|| genericProfilePhoto} alt="" />
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
        <div className="description" >
                    <p dangerouslySetInnerHTML={{ __html: professional.description}}></p>
                    
                  </div>
                ): (<p>{professional.shortIntro}</p>)}
      </div>
      </div>
      


        </div>
      <div className="ContainerStyledDoctorConsultationContainer">

      
      <AvailableHoursComponent
        availableHours={generateAvailableHours()}
        professionalEmail={professional.email}
        professionalInfo={{
          name: professional.name,
          picture: professional.picture,
          work_area: professional.work_area,
          email: professional.email
        }}
        />
        </div>
    </StyledDoctorConsultationContainer>
    
      <Footer/>
        </div>
  );
};

export default DoctorConsultationPage;
