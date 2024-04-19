import React, { useContext, useEffect, useState, createContext } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { StyledClientSideConsultationComponent, StyledConsultantContainer } from "./style";
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { GoLaw } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import headImage from "../../../assets/imgs/womenPng.png";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import GlobalStyleDefault from "../../../GlobalStyles";
import AvailableHoursComponent from "../AvaliableHoursComponent";
import { startOfWeek, addDays, setHours } from 'date-fns';

export const generateAvailableHours = () => {
  const weekdays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const startTimeMorning = 8;
  const endTimeMorning = 11;
  const startTimeAfternoon = 13;
  const endTimeAfternoon = 18;

  // Finding the start of the current week (Monday)
  const today = new Date();
  const startOfWeekDate = startOfWeek(today, { weekStartsOn: 1 });

  return weekdays.map((day, index) => {
    const dayHours = [];
    const currentDate = addDays(startOfWeekDate, index); // Each day of the week

    for (let hour = startTimeMorning; hour < endTimeMorning; hour++) {
      const dateWithHourSet = setHours(currentDate, hour);
      dayHours.push(dateWithHourSet.toISOString());
    }

    for (let hour = startTimeAfternoon; hour < endTimeAfternoon; hour++) {
      const dateWithHourSet = setHours(currentDate, hour);
      dayHours.push(dateWithHourSet.toISOString());
    }

    return { day, hours: dayHours };
  });
};


Modal.setAppElement("#root");
const ProfessionalsContext = createContext();
export const useProfessionals = () => useContext(ProfessionalsContext);
export const ProfessionalsProvider = ({ children }) => {
  const [psychologists, setPsychologists] = useState([]);
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();

      const psychologistCollection = collection(db, "psychologist");
      const psychologistQuerySnapshot = await getDocs(psychologistCollection);
      const psychologistData = psychologistQuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          availableHours: generateAvailableHours(),
        };
      });
      setPsychologists(psychologistData);

      const lawyersCollection = collection(db, "lawyers");
      const lawyersQuerySnapshot = await getDocs(lawyersCollection);
      const lawyersData = lawyersQuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          availableHours: generateAvailableHours(),
        };
      });
      setLawyers(lawyersData);
    };

    fetchData();
  }, []);

  return (
    <ProfessionalsContext.Provider value={{ psychologists, lawyers }}>
      {children}
    </ProfessionalsContext.Provider>
  );
};
export function ClientSideConsultationComponent() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { accessToken } = useContext(AccessTokenContext);
  const { psychologists, lawyers } = useProfessionals(); // Consumindo os dados do contexto

  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.state) {
      const professional = location.state;
      setSelectedProfessional(professional);
      setIsModalOpen(true);
    }
  }, [location.state]);

  const handleOpenModal = (professional) => {
    setSelectedProfessional(professional);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRedirectToConsultationPage = (professional) => {
    navigate(`/consultation/${professional.name}`);
  };

  return (
    <>
      {accessToken ? (
        <StyledClientSideConsultationComponent>
          <div className="petalWrapper">
            <div className="textFirstContainer">
              <h1>Agende agora sua consulta!</h1>
              <span>Diversas Profissionais Especializadas em Psicologia e/ou Advocacia </span>
              <br />
              <span>preparadas para melhor atender você!  </span>
              <br />
              <span></span>
            </div>
          </div>
          <h1 style={{ color: `${GlobalStyleDefault.colors.secondarystrong}`, fontFamily: "DolceVita", textAlign: "center" }}>Selecione uma Profissional:</h1>

          <StyledConsultantContainer>
            <div style={{ width: "100%" }}>
              <h2 style={{ marginLeft: "15px" }}><GiBrain style={{ marginLeft: "15px" }} />Psicólogas</h2>
            </div>
            <ul className="professionalUL">
              {psychologists.map((psychologist, index) => (
                
                <div key={index} className="doctorCard" onClick={() => handleRedirectToConsultationPage(psychologist)}>
                  <div class="doctorCardInfoContainer">
                    <div className="doctorCardInfo">
                    <img src={psychologist.picture || genericProfilePhoto} alt="Profile" />
                      <div>

                      <p>{psychologist.name}</p>
               
                      <p>{psychologist.work_area}</p>
                      
                      <p>Valor da consulta: R${psychologist.value}</p>
                      </div>
                    </div>
                      <div className="shortIntroContainer">

                      <p>{psychologist.shortIntro}</p>
                      </div>
                  </div>
                </div>
              ))}
            </ul>
          </StyledConsultantContainer>

          <StyledConsultantContainer>
            <div style={{ width: "100%" }}>
              <h2 style={{ marginLeft: "15px" }}><GoLaw style={{ marginLeft: "15px" }} />Advogadas</h2>
            </div>
            <ul className="professionalUL">
              {lawyers.map((lawyer, index) => (
                <div key={index} className="doctorCard" onClick={() => handleRedirectToConsultationPage(lawyer)}>
                  <div class="doctorCardInfoContainer">
                    <div class="doctorCardInfo">
                    <img src={lawyer.picture || genericProfilePhoto} alt="Profile" />
                    <div>

                      <p>{lawyer.name}</p>
                   
                      <p>{lawyer.work_area}</p>
                     
                      <p>Valor da consulta: R${lawyer.value}</p>
                     
                    </div>
                    </div>
                    <div className="shortIntroContainer">

                      <p>{lawyer.shortIntro}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </StyledConsultantContainer>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 10,
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
              },
              content: {
                backgroundColor: `${GlobalStyleDefault.colors.offwhite}`,
                width: "90%",
                margin: "0 auto",
                overflowY: "auto",
                maxHeight: "90vh",
                padding: "3%",
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                justifyContent: "center",
                gap: "2%",
                left: "2%",
                zIndex: 9
              },

            }}
          >
            <div style={{ height: "98%", width: "300px", flexDirection: "column", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: `${GlobalStyleDefault.colors.secondary}`, borderRadius: "15px", padding: "15px" }}>
              {selectedProfessional && (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", padding: "5%" }}>
                    <div style={{ marginRight: "10px" }}>

                      <img src={selectedProfessional.picture || genericProfilePhoto} alt="Profile" style={{ width: "150px", borderRadius: "15px" }} />
                    </div>
                    <div>

                      <h3>{selectedProfessional.name}</h3>
                      <p>{selectedProfessional.work_area}</p>
                    </div>
                  </div>
                  <div className="AvaliableHoursWrapper">

                    

                      <AvailableHoursComponent availableHours={selectedProfessional.availableHours} professionalEmail={selectedProfessional.email} professionalInfo={{ name: selectedProfessional.name, picture: selectedProfessional.picture || genericProfilePhoto, work_area: selectedProfessional.work_area, email: selectedProfessional.email }} />
                   
                  </div>
                </>
              )}
              <button onClick={handleCloseModal} style={{ border: "0", fontFamily: "DolceVita", width: "80%", borderRadius: "15px" }}>Cancelar</button>
            </div>
          </Modal>
        </StyledClientSideConsultationComponent>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
}
