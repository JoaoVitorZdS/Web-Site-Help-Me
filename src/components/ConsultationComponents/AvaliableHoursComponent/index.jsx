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
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const DoctorInfoCard = ({ doctorInfo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
      <img
        src={doctorInfo.picture}
        alt="Profile"
        style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover" }}
      />
      <p>{doctorInfo.name}</p>
      <p>{doctorInfo.work_area}</p>
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
    setCurrentDate((prevDate) => addDays(prevDate, amount * 7)); // Multiplicando por 7 para avançar ou retroceder semanas
  };
  

  const handleButtonClick = (formattedDate, formattedTime) => {
    setSelectedHour(`${formattedDate} ${formattedTime}`);
    setModalIsOpen(true);
  };

  const handleModalSubmit = async () => {
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
      toast("Consulta Solcitada! A convirmação será enviada por email em até 24h", {type: "success"})
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
        style={{border: "transparent"}}
        ><FaArrowAltCircleLeft size={20} /></button>
        <h3 style={{fontFamily: "DolceVita"}}>
          {capitalizeFirstLetter(
            format(currentDate, "MMMM yyyy", {
              locale: ptBR,
            })
          )}
        </h3>
        <button onClick={() => handleDateChange(1)}
        style={{border: "transparent"}}
        ><FaArrowAltCircleRight size={20} /></button>
      </div>
    );
  };

  return (
    <div  >
      <h3 style={{marginBottom: "15px"}}>Horários Disponíveis:</h3>
      {renderMonthSelector()}
      {availableHours.map((day, index) => (
        <div key={index} style={{padding: "1%",borderRadius: "5px",border: "1px dotted grey", marginBottom: "5px"}}>
          <i >
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
              let buttonColor = "green";
              let isButtonDisabled = false;
  
              scheduleData.forEach((event) => {
                const eventDate = event.date || "";
                const eventTime = event.time || "";
                const eventDateTime = parse(`${eventDate} ${eventTime}`, "dd 'de' MMMM yyyy HH:mm", new Date(), { locale: ptBR });
                const formattedButtonDateTimeObj = parse(formattedButtonDateTime, "dd 'de' MMMM yyyy HH:mm", new Date(), { locale: ptBR });
  
                if (formattedButtonDateTimeObj.getTime() === eventDateTime.getTime()) {
                  if (event.status === "pending" ) {
                    buttonColor = "yellow";
                    isButtonDisabled = true;
                  } else if (event.status === "confirmed"){
                    buttonColor = "red";
                    isButtonDisabled = true;
                  } else if (event.status === "cancelled") {
                    buttonColor = "green";
                    isButtonDisabled = false;
                  }
                }
              });
  
              return (
                <button
                  key={hourIndex}
                  style={{  backgroundColor: buttonColor, borderRadius: "5px", padding: "2px", border: "transparent", color: "whitesmoke", transform: "scale(0.9)" }}
                  onClick={() => handleButtonClick(formattedDate, formattedTime)}
                  disabled={isButtonDisabled}
                >
                  {formattedTime}
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
            zIndex: 1000, // Valor que você pode ajustar conforme necessário
            // Outras propriedades de overlay, se necessário
          },
          content: {
            position: "absolute",
            top: "5%",
            left: "5%",
           
            background: "white",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            width: "90vw",
            height: "90vh",
            border: "1px double grey",
            
            
          }
        }}
      >
        {selectedHour && (
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", height: "100%", width: "100%", gap: "15px"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", gap: "15px"}}>
            <h4>Agendar Consulta Virtual com:</h4>
            <DoctorInfoCard doctorInfo={professionalInfo}/>
            <p>Data e Hora: {selectedHour}</p>
            <p>Valor: R$100</p>
            <p>Pagamento por: PIX || Transferência Bancária no início da consulta</p>
            </div>
            <input
              type="text"
              placeholder="Telefone"
              value={modalData.phone}
              onChange={(e) => setModalData({ ...modalData, phone: e.target.value })}
              style={{width: "70%"}}
            />
            <textarea
              
              placeholder="Descreva o motivo da sua consulta"
              value={modalData.description}
              onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
              style={{width: "70%"}}
              rows={4} // Você pode ajustar o número de linhas conforme necessário
              cols={50} // Você pode ajustar o número de colunas conforme necessário
            />
            <button onClick={handleModalSubmit} disabled={isButtonDisabled}>
              Confirmar Agendamento
            </button>
            
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AvailableHoursComponent;