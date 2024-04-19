import React, { useContext, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { EventContext } from '../../CalendarApi';
import { AccessTokenContext } from '../../StyledButtons/ButtonLogInGoogle';
import { useParams, useNavigate } from 'react-router-dom';
import { useProfessionals } from '../ClientSideConsultation';

const CalendarEventComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [eventDescription, setEventDescription] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const { createEvent } = useContext(EventContext);
  const { userData, setAccessToken } = useContext(AccessTokenContext);
  const { doctorname } = useParams();
  const { psychologists, lawyers } = useProfessionals();
  const [professionalEmail, setProfessionalEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfessionalEmail = async () => {
      const db = getFirestore();
      const psychologistsCollection = collection(db, "psychologists");
      const lawyersCollection = collection(db, "lawyers");

      try {
        const chosenPsychologist = psychologists.filter((i) => i.name == doctorname)
        const chosenLawyers = lawyers.filter((i) => i.name == doctorname)
        console.log(chosenPsychologist[0])
        console.log(chosenLawyers[0])
        console.log(doctorname)
        const professionalDoc = chosenLawyers[0] || chosenPsychologist[0];
        console.log(professionalDoc)
        if (professionalDoc) {
          setProfessionalEmail(professionalDoc.email);
        } else {
          toast.error("Profissional não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do profissional:", error);
        handleError(error);
      }
    };

    if (doctorname) {
      fetchProfessionalEmail();
    }
  }, [doctorname]);

  const handleError = (error) => {
    if (error.response) {
      // O servidor respondeu com um código de status que cai fora do intervalo de 2xx
      console.log(error.response.status);
      switch (error.response.status) {
        case 400:
          toast.error("Requisição inválida. Por favor, verifique os dados enviados.");
          break;
        case 401:
          toast.error("Sessão expirada. Por favor, faça login novamente.");
          setAccessToken(null);
          navigate('/login'); // Adapte conforme a rota de login do seu aplicativo
          break;
        case 403:
          toast.error("Acesso negado. Você não tem permissão para realizar esta ação.");
          break;
        default:
          toast.error("Ocorreu um erro. Por favor, tente novamente.");
      }
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      toast.error("Sem resposta do servidor. Verifique sua conexão de internet.");
    } else {
      // Algum erro aconteceu ao configurar a requisição
      toast.error("Erro ao fazer a requisição. Por favor, tente novamente.");
    }
  };

  const handleSubmit = async () => {
    if (!professionalEmail) {
      toast.error("Email do profissional não encontrado.");
      return;
    }

    const endDate = moment(startDate).add(1, 'hours').toDate();

    const eventDetails = {
      summary: `Consulta agendada com ${doctorname}`,
      startDateTime: moment(startDate).toISOString(),
      endDateTime: moment(endDate).toISOString(),
      description: `Paciente: ${userData.name}, Tel: ${clientPhone}, ${eventDescription}`,
      attendees: [userData.email, professionalEmail],
      conferenceData: {
        createRequest: { requestId: moment().format("X"), conferenceSolutionKey: { type: "hangoutsMeet" }, sendUpdates: true }
      }
    };

    try {
      const db = getFirestore();
      const scheduleCollection = collection(db, "schedule");
      await addDoc(scheduleCollection, {
        client_name: userData.name,
        client_email: userData.email,
        client_phone: clientPhone,
        professional_name: doctorname,
        professional_email: professionalEmail,
        date: moment(startDate).toISOString(),
        description: eventDescription,
        status: "pending"
      });

      await createEvent(eventDetails);
      toast.success("Evento agendado com sucesso no Google Calendar!");
    } catch (error) {
      console.error("Erro ao agendar evento:", error);
      handleError(error);
    }
  };

  return (
    <div>
      <h3>Agendar Evento no Google Calendar</h3>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
      <input
        type="text"
        placeholder="Telefone do Cliente"
        value={clientPhone}
        onChange={e => setClientPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição do Evento"
        value={eventDescription}
        onChange={e => setEventDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Agendar Evento</button>
    </div>
  );
};

export default CalendarEventComponent;
