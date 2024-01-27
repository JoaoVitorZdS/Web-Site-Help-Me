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
          };
        });
        setLawyers(lawyersData);
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <>
      {accessToken ? (
        <StyledClientSideConsultationComponent>
          <h1 style={{color: `${GlobalStyleDefault.colors.secondary}`, fontFamily: "DolceVita"}}>Selecione uma Profissional:</h1>

          <StyledConsultantContainer>
            <div style={{width: "100%"}}>
            <h2 style={{marginLeft: "15px"}}><GiBrain style={{marginLeft: "15px"}} />Psicólogas</h2>
            </div>
            {psychologists.map((psychologist, index) => (
              <div key={index} className="doctorCard">
                <div id="doctorCardInfo">
                  <img
                    src={psychologist.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div>
                    <p>{psychologist.name}</p>
                    <br />
                    <p>{psychologist.work_area}</p>
                  </div>
                </div>
                <div className="avaliableHoursDiv">
                <AvailableHoursComponent
                    availableHours={psychologist.availableHours}
                    professionalEmail = {psychologist.email}
                    professionalInfo={{
                    name: psychologist.name,
                    picture: psychologist.picture || genericProfilePhoto,
                    work_area: psychologist.work_area,
                    email: psychologist.email,
  }}
/>                {console.log("psychologist Event Status:", psychologist.availableHours)}
                </div>
              </div>
            ))}
          </StyledConsultantContainer>

          <StyledConsultantContainer>
            <div style={{width: "100%"}}>
            <h2 style={{marginLeft: "15px"}}><GoLaw style={{marginLeft: "15px"}} />Advogadas</h2>
            </div>
            {lawyers.map((lawyer, index) => (
              <div key={index} className="doctorCard">
                <div id="doctorCardInfo">
                  <img
                    src={lawyer.picture || genericProfilePhoto}
                    alt="Profile"
                  />
                  <div>
                    <p>{lawyer.name}</p>
                    <br />
                    <p>{lawyer.work_area}</p>
                  </div>
                </div>
                <div className="avaliableHoursDiv">

                <AvailableHoursComponent
                      availableHours={lawyer.availableHours}
                      professionalEmail = {lawyer.email}
                      professionalInfo={{
                      name: lawyer.name,
                      picture: lawyer.picture || genericProfilePhoto,
                      work_area: lawyer.work_area,
                      email: lawyer.email,
  }}
/>                {console.log("Lawyer Event Status:", lawyer.availableHours)}
                </div>
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
