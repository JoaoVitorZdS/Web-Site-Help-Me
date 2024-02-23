import React, { useContext, useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import {
  addDays,
  startOfWeek,
  addMonths,
  format,
  parse
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";
import "../../../App.css"
import GlobalStyleDefault from "../../../GlobalStyles";
import genericProfilePhoto from "../../../assets/imgs/GenericProfile.jpeg";
import { AvaliableHoursStyledDiv, ConfirmationDoctorConsultationStyledModal } from "./style";
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const DoctorInfoCard = ({ doctorInfo }) => {
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

const AvailableHoursComponent = ({ availableHours, professionalEmail, professionalInfo }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { userData } = useContext(AccessTokenContext);
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const [selectedHour, setSelectedHour] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    phone: "",
    description: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  let isButtonDisabled
  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const db = getFirestore();
        const scheduleCollection = collection(db, "schedule");
        const professionalEmailCondition = where(
          "profesional_email",
          "==",
          professionalEmail
        );

        const scheduleQuery = query(scheduleCollection, professionalEmailCondition);
        const scheduleQuerySnapshot = await getDocs(scheduleQuery);

        const scheduleData = scheduleQuerySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
          };
        });

        setScheduleData(scheduleData);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };

    fetchScheduleData();
  }, [professionalEmail]);

  const handleDateChange = (amount) => {
    // Calcula a data uma semana antes da data atual
    const oneWeekBefore = addDays(new Date(), -7);
    
    // Se a nova data for anterior à data limite, define a data atual como a nova data
    if (addDays(currentDate, amount * 7) < oneWeekBefore) {
      setCurrentDate(new Date());
    } else {
      setCurrentDate((prevDate) => addDays(prevDate, amount * 7));
    }
  };
  
  

  const handleButtonClick = (formattedDate, formattedTime) => {
    setSelectedHour(`${formattedDate} ${formattedTime}`);
    setModalIsOpen(true);
  };

  const handleModalSubmit = async () => {
    // Verificar se os campos estão preenchidos
    if (!modalData.phone || !modalData.description) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    } else if (modalData.phone.length < 10) {
      setErrorMessage("Por favor, preencha com um telefone válido com DDD.");
      return;
    } else if (modalData.description.length < 20) {
      setErrorMessage("Por favor, descreva o motivo da sua consulta com pelo menos 20 carácteres.");
      return;
    }
    
    try {
      const db = getFirestore();
      const scheduleCollection = collection(db, "schedule");

      await addDoc(scheduleCollection, {
        chosen_profesional: professionalEmail,
        client_email: userData.email,
        client_name: userData.name,
        client_phone: modalData.phone,
        date: selectedHour,
        description: modalData.description,
        profesional_email: professionalEmail,
        status: "pending"
      });

      const updatedScheduleQuerySnapshot = await getDocs(scheduleCollection);
      const updatedScheduleData = updatedScheduleQuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
        };
      });

      setScheduleData(updatedScheduleData);
      toast("Consulta Solcitada! A confirmação será enviada por email em até 24h", {type: "success"})
      setModalIsOpen(false);
    } catch (error) {
      toast("Falha ao solicitar Consulta! Tente Novamente em alguns minutos", {type: "error"})

      console.error("Error adding schedule event:", error);
    }
  };

  const renderMonthSelector = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button onClick={() => handleDateChange(-1)}
        style={{border: "transparent", cursor: "pointer", backgroundColor: "transparent"}}
        ><FaArrowAltCircleLeft size={20} /></button>
        <h3 style={{fontFamily: "DolceVita"}}>
          {capitalizeFirstLetter(
            format(currentDate, "MMMM yyyy", {
              locale: ptBR,
            })
          )}
        </h3>
        <button onClick={() => handleDateChange(1)}
        style={{border: "transparent",cursor: "pointer", backgroundColor: "transparent"}}
        ><FaArrowAltCircleRight size={20} /></button>
      </div>
    );
  };

  return (
    <AvaliableHoursStyledDiv >
      
      <h3 style={{marginBottom: "15px", marginLeft: "15px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
         <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg>
        Horários Disponíveis:</h3>
      {renderMonthSelector()}
      
      {availableHours.map((day, index) => (
        <div key={index} style={{padding: "1%",borderRadius: "5px",border: "1px double grey", marginBottom: "5px"}}>
          <i style={{fontFamily: "DolceVita"}}>
            {`${day.day} ${addDays(startOfWeekDate, index).getDate()}`}
          </i>
          <ul
            style={{
              
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 0,
              overflow: "hidden"
            }}
            >
            {day.hours.map((hour, hourIndex) => {
              const dayNumber = addDays(startOfWeekDate, index).getDate();
              const formattedDate = `${dayNumber} de ${capitalizeFirstLetter(format(currentDate, "MMMM yyyy", { locale: ptBR}))}`;
              const formattedTime = hour.split(" ")[1];
              
              const formattedButtonDateTime = `${formattedDate} ${formattedTime}`;
              let buttonColor = "#21ad21";
              let isButtonDisabled = false;
  
              scheduleData.forEach((event) => {
                const eventDate = event.date || "";
                const eventTime = event.time || "";
                const eventDateTime = parse(`${eventDate} ${eventTime}`, "dd 'de' MMMM yyyy HH:mm", new Date(), { locale: ptBR });
                const formattedButtonDateTimeObj = parse(formattedButtonDateTime, "dd 'de' MMMM yyyy HH:mm", new Date(), { locale: ptBR });
  
                if (formattedButtonDateTimeObj.getTime() === eventDateTime.getTime()) {
                  if (event.status === "pending" ) {
                    buttonColor = "#ffd906";
                    isButtonDisabled = true;
                  } else if (event.status === "confirmed"){
                    buttonColor = "#b30000";
                    isButtonDisabled = true;
                  } else if (event.status === "cancelled") {
                    buttonColor = "#21ad21";
                    isButtonDisabled = false;
                  }
                }
              });
  
              return (
                <button
                  key={hourIndex}
                  style={{  backgroundColor: buttonColor, borderRadius: "5px", padding: "2px", border: "transparent", color: "whitesmoke", cursor: "pointer", width: "50px", height: "50px" }}
                  onClick={() => handleButtonClick(formattedDate, formattedTime)}
                  disabled={isButtonDisabled}
                >
                  <i style={{fontSize: "0.7rem", fontWeight: "700"}}>

                  {formattedTime}h
                  </i>
                </button>
              );
            })}
          </ul>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "13",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          },
          content: {
            position: "relative",
            inset: 0,
            background: `${GlobalStyleDefault.colors.textwhite}`,
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            
            width: "90%",
            height: "90vh",
          
            
            
            
          }
        }}
      >
        {selectedHour && (
         <ConfirmationDoctorConsultationStyledModal>
          <svg style={{position: "absolute", top: "5%"}} onClick={() => setModalIsOpen(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
            <div className="doctorInfo" >
            <h3>Agendar Consulta Virtual com:</h3>
            <DoctorInfoCard doctorInfo={professionalInfo}/>
            <p>
            <i>Data e Hora:</i>
             {selectedHour}

            </p>
            <p><i>
              Pagamento por:
              </i>
               PIX ou Transferência Bancária no início da consulta</p>
               <p>

            <i>Valor: 
              </i>
              R$100
               </p>
            </div>
            <div style={{display: "flex", justifyContent: "space-around", flexDirection: "column"}}>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <label>
            Telefone com DDD:
            <input
              type="text"
              placeholder="Insira seu telefone com DDD"
              value={modalData.phone}
              onChange={(e) => setModalData({ ...modalData, phone: e.target.value })}
              style={{width: "100%"}}
              required={true}
              />
              </label>
              <label>
                Descreva o motivo que trouxe você até a Help Me

            <textarea
              
              placeholder="Descreva o motivo da sua consulta"
              value={modalData.description}
              onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
              style={{width: "100%", height: "fit-content", resize: "none", textIndent: "10px"}}
              rows={20} // Você pode ajustar o número de linhas conforme necessário
              cols={50} // Você pode ajustar o número de colunas conforme necessário
              />
              </label>
            <button className="zoom" onClick={handleModalSubmit} disabled={isButtonDisabled}>
              Confirmar Agendamento
            </button>
            <button className="cancel" onClick={() => setModalIsOpen(false)} disabled={isButtonDisabled}>
              Cancelar
            </button>
              </div>
            
         </ConfirmationDoctorConsultationStyledModal>
        
        )}
      </Modal>
    </AvaliableHoursStyledDiv>
  );
};

export default AvailableHoursComponent;
