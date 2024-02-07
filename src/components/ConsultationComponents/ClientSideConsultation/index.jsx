import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import {
  StyledClientSideConsultationComponent,
  StyledConsultantContainer,
} from "./style";
import AvailableHoursComponent from "../AvaliableHoursComponent";
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../../../App.css"
import GlobalStyleDefault from "../../../GlobalStyles.js"
import { GoLaw } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
const generateAvailableHours = () => {
  const availableHours = [];
  const weekdays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

  const startTimeMorning = 8;
  const endTimeMorning = 11;
  const startTimeAfternoon = 13;
  const endTimeAfternoon = 18;

  weekdays.forEach((day) => {
    const dayHours = [];
    for (let hour = startTimeMorning; hour < endTimeMorning; hour++) {
      dayHours.push(`${day} ${hour.toString().padStart(2, "0")}:00`);
    }

    for (let hour = startTimeAfternoon; hour < endTimeAfternoon; hour++) {
      dayHours.push(`${day} ${hour.toString().padStart(2, "0")}:00`);
    }

    availableHours.push({ day, hours: dayHours });
  });

  return availableHours;
};


export const ClientSideConsultationComponent = () => {
  const { accessToken } = useContext(AccessTokenContext);
  const [psychologists, setPsychologists] = useState([]);
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        const db = getFirestore();

        // Consulta na coleção "psychologist"
        const psychologistCollection = collection(db, "psychologist");
        const psychologistQuerySnapshot = await getDocs(psychologistCollection);
        const psychologistData = psychologistQuerySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            availableHours: generateAvailableHours(),
            isExpanded: false, // Adicionando o estado inicial de expansão
          };
        });
        setPsychologists(psychologistData);

        // Consulta na coleção "lawyers"
        const lawyersCollection = collection(db, "lawyers");
        const lawyersQuerySnapshot = await getDocs(lawyersCollection);
        const lawyersData = lawyersQuerySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            availableHours: generateAvailableHours(),
            isExpanded: false, // Adicionando o estado inicial de expansão
          };
        });
        setLawyers(lawyersData);
      }
    };

    fetchData();
  }, [accessToken]);

  // Função para alternar o estado de expansão de um card
  const toggleExpandCard = (index, type) => {
    if (type === 'psychologist') {
      setPsychologists(prevState =>
        prevState.map((psychologist, i) => {
          if (i === index) {
            return { ...psychologist, isExpanded: !psychologist.isExpanded };
          } else {
            return psychologist;
          }
        })
      );
    } else if (type === 'lawyer') {
      setLawyers(prevState =>
        prevState.map((lawyer, i) => {
          if (i === index) {
            return { ...lawyer, isExpanded: !lawyer.isExpanded };
          } else {
            return lawyer;
          }
        })
      );
    }
  };

  return (
    <>
      {accessToken ? (
        <StyledClientSideConsultationComponent>
          <h1 style={{color: `${GlobalStyleDefault.colors.secondary}`, fontFamily: "DolceVita"}}>Selecione uma Profissional:</h1>

          <StyledConsultantContainer>
            <div style={{width: "100%"}}>
            <h2 style={{marginLeft: "15px"}}><GiBrain style={{marginLeft: "15px"}} />Psicólogas</h2>
            </div>
            <ul className="professionalUL">

            {psychologists.map((psychologist, index) => (
              <div key={index} className="doctorCard">
                <div class="doctorCardInfoContainer" onClick={() => toggleExpandCard(index, 'psychologist')}>
                  <img
                    src={psychologist.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div className="doctorCardInfo" >
                    <p>{psychologist.name}</p>
                    <br />
                    <p>{psychologist.work_area}</p>
                  </div>
                </div>
                {psychologist.isExpanded && (
                  <div className="avaliableHoursDiv">
                    <AvailableHoursComponent
                      availableHours={psychologist.availableHours}
                      professionalEmail={psychologist.email}
                      professionalInfo={{
                        name: psychologist.name,
                        picture: psychologist.picture || genericProfilePhoto,
                        work_area: psychologist.work_area,
                        email: psychologist.email,
                      }}
                      />
                    {console.log("psychologist Event Status:", psychologist.availableHours)}
                  </div>
                )}
              </div>
            ))}
            {psychologists.map((psychologist, index) => (
              <div key={index} className="doctorCard">
                <div class="doctorCardInfoContainer" onClick={() => toggleExpandCard(index, 'psychologist')}>
                  <img
                    src={psychologist.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div className="doctorCardInfo" >
                    <p>{psychologist.name}</p>
                    <br />
                    <p>{psychologist.work_area}</p>
                  </div>
                </div>
                {psychologist.isExpanded && (
                  <div className="avaliableHoursDiv">
                    <AvailableHoursComponent
                      availableHours={psychologist.availableHours}
                      professionalEmail={psychologist.email}
                      professionalInfo={{
                        name: psychologist.name,
                        picture: psychologist.picture || genericProfilePhoto,
                        work_area: psychologist.work_area,
                        email: psychologist.email,
                      }}
                      />
                    {console.log("psychologist Event Status:", psychologist.availableHours)}
                  </div>
                )}
              </div>
            ))}
            {psychologists.map((psychologist, index) => (
              <div key={index} className="doctorCard">
                <div class="doctorCardInfoContainer" onClick={() => toggleExpandCard(index, 'psychologist')}>
                  <img
                    src={psychologist.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div className="doctorCardInfo" >
                    <p>{psychologist.name}</p>
                    <br />
                    <p>{psychologist.work_area}</p>
                  </div>
                </div>
                {psychologist.isExpanded && (
                  <div className="avaliableHoursDiv">
                    <AvailableHoursComponent
                      availableHours={psychologist.availableHours}
                      professionalEmail={psychologist.email}
                      professionalInfo={{
                        name: psychologist.name,
                        picture: psychologist.picture || genericProfilePhoto,
                        work_area: psychologist.work_area,
                        email: psychologist.email,
                      }}
                      />
                    {console.log("psychologist Event Status:", psychologist.availableHours)}
                  </div>
                )}
              </div>
            ))}
            {psychologists.map((psychologist, index) => (
              <div key={index} className="doctorCard">
                <div class="doctorCardInfoContainer" onClick={() => toggleExpandCard(index, 'psychologist')}>
                  <img
                    src={psychologist.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div className="doctorCardInfo" >
                    <p>{psychologist.name}</p>
                    <br />
                    <p>{psychologist.work_area}</p>
                  </div>
                </div>
                {psychologist.isExpanded && (
                  <div className="avaliableHoursDiv">
                    <AvailableHoursComponent
                      availableHours={psychologist.availableHours}
                      professionalEmail={psychologist.email}
                      professionalInfo={{
                        name: psychologist.name,
                        picture: psychologist.picture || genericProfilePhoto,
                        work_area: psychologist.work_area,
                        email: psychologist.email,
                      }}
                      />
                    {console.log("psychologist Event Status:", psychologist.availableHours)}
                  </div>
                )}
              </div>
            ))}
                </ul>
          </StyledConsultantContainer>

          <StyledConsultantContainer>
            <div style={{width: "100%"}}>
              <h2 style={{marginLeft: "15px"}}><GoLaw style={{marginLeft: "15px"}} />Advogadas</h2>
            </div>
            {lawyers.map((lawyer, index) => (
              <div key={index} className="doctorCard">
                <div class="doctorCardInfoContainer" onClick={() => toggleExpandCard(index, 'lawyer')}>
                  <img
                    src={lawyer.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div class="doctorCardInfo">
                    <p>{lawyer.name}</p>
                    <br />
                    <p>{lawyer.work_area}</p>
                  </div>
                </div>
                {lawyer.isExpanded && (
                  <div className="avaliableHoursDiv">
                    <AvailableHoursComponent
                      availableHours={lawyer.availableHours}
                      professionalEmail={lawyer.email}
                      professionalInfo={{
                        name: lawyer.name,
                        picture: lawyer.picture || genericProfilePhoto,
                        work_area: lawyer.work_area,
                        email: lawyer.email,
                      }}
                    />
                    {console.log("Lawyer Event Status:", lawyer.availableHours)}
                  </div>
                )}
              </div>
            ))}
          </StyledConsultantContainer>
        </StyledClientSideConsultationComponent>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
