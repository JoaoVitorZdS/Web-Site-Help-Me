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
import { DoctorConsultationClientInput } from './style';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);
const CalendarEventComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [eventDescription, setEventDescription] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
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
        const professionalDoc = chosenLawyers[0] || chosenPsychologist[0];
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
      console.log(error.response.status);
      switch (error.response.status) {
        case 400:
          toast.error("Requisição inválida. Por favor, verifique os dados enviados.");
          break;
        case 401:
          toast.error("Sessão expirada. Por favor, faça login novamente.");
          setAccessToken(null);
          navigate('/login');
          break;
        case 403:
          toast.error("Acesso negado. Você não tem permissão para realizar esta ação.");
          break;
        default:
          toast.error("Ocorreu um erro. Por favor, tente novamente.");
      }
    } else if (error.request) {
      toast.error("Sem resposta do servidor. Verifique sua conexão de internet.");
    } else {
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
      summary: `Consulta agendada com ${doctorname} - Help Me`,
      startDateTime: moment(startDate).toISOString(),
      endDateTime: moment(endDate).toISOString(),
      description: `Paciente: ${userData.name}, Celular: ${clientPhone}, Solicitação:${eventDescription}`,
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
      
      
    } catch (error) {
      console.error("Erro ao agendar evento:", error);
      handleError(error);
    }
  };

  const formatPhoneNumber = (input) => {
    const cleaned = ('' + input).replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    return formatted;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setClientPhone(formatted);
  };
  const isFutureDate = (date) => {
    const currentDate = new Date();
    return date > currentDate;
  };

  const closeModal = () => {
    setShowConfirmationModal(false);
  };

  const setHours = (date, hours) => {
    const newDate = new Date(date);
    newDate.setHours(hours);
    return newDate;
  };

  const setMinutes = (date, minutes) => {
    const newDate = new Date(date);
    newDate.setMinutes(minutes);
    return newDate;
  };

  const handleRequestConsultation = () => {
    if (!startDate || !clientPhone || !eventDescription) {
      toast.error("Por favor, preencha todos os campos antes de solicitar a consulta.");
      return;
    }
    setShowConfirmationModal(true);
  };

  const handleConfirmConsultation = () => {
    setShowConfirmationModal(false);
    handleSubmit();
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <DoctorConsultationClientInput>
      <h3>Marcar Consulta</h3>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        required
        minDate={new Date()}
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Hora"
        dateFormat="dd/MM/yyyy HH:mm"
        locale="pt-BR"
        filterDate={isFutureDate}
        minTime={setHours(setMinutes(new Date(), 0), 8)}
        maxTime={setHours(setMinutes(new Date(), 0), 19)}
        maxDate={new Date().setDate(new Date().getDate() + 30)}
        placeholderText="Selecione uma data e hora"
      />
      <input
        maxLength={15}
        required
        type="tel"
        placeholder="Seu telefone"
        value={clientPhone}
        onChange={handleChange}
      />
      <textarea
        required
        type="text"
        placeholder="Descreva o motivo da sua consulta"
        value={eventDescription}
        onChange={e => setEventDescription(e.target.value)}
        rows={10}
      ></textarea>
      <button onClick={handleRequestConsultation} type='button' className='ScheduleButton'>Solicitar Consulta</button>
      {showConfirmationModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseConfirmationModal}>&times;</span>
            <p>Deseja confirmar a solicitação da consulta com {doctorname}?</p>

            <p><b>ATENÇÃO:</b> O Valor de {}</p>
            <div className="modal-buttons">
              <button onClick={handleConfirmConsultation}>Confirmar</button>
              <button onClick={handleCloseConfirmationModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </DoctorConsultationClientInput>
  );
};

export default CalendarEventComponent;