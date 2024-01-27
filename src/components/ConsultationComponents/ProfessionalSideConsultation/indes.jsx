import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, query, where, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { format, parse } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ConfirmationModal from "./ConfirmationModal";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"

const ProfessionalConsultations = () => {
  const { userData } = useContext(AccessTokenContext);
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

  const openAcceptModal = (consultation) => {
    setSelectedConsultation(consultation);
    setIsAcceptModalOpen(true);
  };

  const openCancelModal = (consultation) => {
    setSelectedConsultation(consultation);
    setIsCancelModalOpen(true);
  };
  const openDeclineModal = (consultation) => {
    setSelectedConsultation(consultation);
    setIsDeclineModalOpen(true);
  };

  const openDeleteModal = (consultation) => {
    setSelectedConsultation(consultation);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setIsAcceptModalOpen(false);
    setIsCancelModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsDeclineModalOpen(false);
    setSelectedConsultation(null);
  };

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const db = getFirestore();
        const scheduleCollection = collection(db, "schedule");
        const professionalEmailCondition = where(
          "profesional_email",
          "==",
          userData.email
        );

        const scheduleQuery = query(scheduleCollection, professionalEmailCondition);
        const scheduleQuerySnapshot = await getDocs(scheduleQuery);

        const consultations = scheduleQuerySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });

        setConsultations(consultations);
      } catch (error) {
        console.error("Error fetching consultations:", error);
      }
    };

    fetchConsultations();
  }, [userData.email]);

  const handleAccept = async (id) => {
    try {
      const db = getFirestore();
      const scheduleDocRef = doc(db, "schedule", id);

      await updateDoc(scheduleDocRef, {
        status: "confirmed",
      });

      // Atualizar a lista de consultas após aceitar
      setConsultations((prevConsultations) =>
        prevConsultations.map((consultation) =>
          consultation.id === id ? { ...consultation, status: "confirmed" } : consultation
        )
      );
    } catch (error) {
      console.error("Error accepting consultation:", error);
    } finally {
      closeModals();
    }
  };

  const handleCancel = async (id, additionalInfo) => {
    try {
      const db = getFirestore();
      const scheduleDocRef = doc(db, "schedule", id);

      // Você pode usar a variável additionalInfo conforme necessário

      await updateDoc(scheduleDocRef, {
        status: "cancelled",
      });

      // Atualizar a lista de consultas após cancelar
      setConsultations((prevConsultations) =>
        prevConsultations.map((consultation) =>
          consultation.id === id ? { ...consultation, status: "cancelled" } : consultation
        )
      );
    } catch (error) {
      console.error("Error canceling consultation:", error);
    } finally {
      closeModals();
    }
  };

  const handleDelete = async (id) => {
    try {
      const db = getFirestore();
      const scheduleDocRef = doc(db, "schedule", id);

      await deleteDoc(scheduleDocRef);

      // Atualizar a lista de consultas após deletar
      setConsultations((prevConsultations) =>
        prevConsultations.filter((consultation) => consultation.id !== id)
      );
    } catch (error) {
      console.error("Error deleting consultation:", error);
    } finally {
      closeModals();
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending':
        return 'Pendente';
      case 'confirmed':
        return 'Confirmada';
      case 'canceled':
        return 'Cancelada';
      default:
        return 'Desconhecido';
    }
  };

  const renderConsultations = () => {
    return consultations.map((consultation) => {
      const formattedDateTime = format(
        parse(consultation.date, "dd 'de' MMMM yyyy HH:mm", new Date(), { locale: ptBR }),
        "dd 'de' MMMM yyyy HH:mm",
        { locale: ptBR }
      );
  
      let tagColor = "";
      let primaryButtonLabel = "";
      let secondaryButtonLabel = "";
      let primaryButtonAction = () => {};
      let secondaryButtonAction = () => {};
  
      if (consultation.status === "pending") {
        tagColor = "yellow";
        primaryButtonLabel = "Aceitar";
        secondaryButtonLabel = "Recusar";
        primaryButtonAction = () => openAcceptModal(consultation);
        secondaryButtonAction = () => openDeclineModal(consultation);
      } else if (consultation.status === "confirmed") {
        tagColor = "green";
        primaryButtonLabel = "Cancelar";
        primaryButtonAction = () => openCancelModal(consultation);
      } else if (consultation.status === "cancelled") {
        tagColor = "red";
        primaryButtonLabel = "Apagar";
        primaryButtonAction = () => openDeleteModal(consultation);
      }
  
      return (
        <div key={consultation.id} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", minWidth: "520px",  border: `2px double ${tagColor}`, marginTop: "15px", padding: "5px", backgroundColor: "whitesmoke"}}>
          <div>
          <div style={{ backgroundColor: tagColor, width: "20px", height: "100%" }} />
          </div>
          <div style={{fontFamily: "TimesBold"}}>
          <p>Consulta com a cliente {consultation.client_name}</p>
          <p>{formattedDateTime}</p>
          <p>Email do Cliente: {consultation.client_email}</p>
          <p>Celular do Cliente: {consultation.client_phone}</p>
          <p>Solicitação do cliente: {consultation.description}</p>
          <p style={{fontFamily: "Contacto", color: tagColor}}>{getStatusLabel(consultation.status)}</p>
          </div>
          <div
          style={{width: "min-content"}}>
          <button onClick={primaryButtonAction} style={{borderRadius: "15px", border: "1px dotted grey", width: "100px", height:"25px", backgroundColor: `${GlobalStyleDefault.colors.secondary}`, color: "white"}}>{primaryButtonLabel}</button>
          {secondaryButtonLabel && (
            <button onClick={secondaryButtonAction} style={{marginTop: "15px" ,borderRadius: "15px", border: "1px dotted grey", width: "100px", height:"25px", backgroundColor: `${GlobalStyleDefault.colors.secondary}`, color: "white"}}>{secondaryButtonLabel}</button>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2 style={{color: `${GlobalStyleDefault.colors.tertiary}`, fontFamily: "DolceVita"}}>Suas Consultas:</h2>
      {renderConsultations()}

      {selectedConsultation && selectedConsultation.status === "pending" && (
        <ConfirmationModal
          isOpen={isAcceptModalOpen}
          onClose={closeModals}
          onConfirm={() => handleAccept(selectedConsultation.id)}
          actionLabel="Aceitar"
          consultationInfo={{
            formattedDateTime: format(
              parse(
                selectedConsultation.date,
                "dd 'de' MMMM yyyy HH:mm",
                new Date(),
                { locale: ptBR }
              ),
              "dd 'de' MMMM yyyy HH:mm",
              { locale: ptBR }
            ),
            status: selectedConsultation.status,
            // Adicione mais informações conforme necessário
          }}
        />
      )}

      {selectedConsultation && selectedConsultation.status === "confirmed" && (
        <ConfirmationModal
          isOpen={isCancelModalOpen}
          onClose={closeModals}
          onConfirm={(additionalInfo) => handleCancel(selectedConsultation.id, additionalInfo)}
          actionLabel="Cancelar"
          consultationInfo={{
            formattedDateTime: format(
              parse(
                selectedConsultation.date,
                "dd 'de' MMMM yyyy HH:mm",
                new Date(),
                { locale: ptBR }
              ),
              "dd 'de' MMMM yyyy HH:mm",
              { locale: ptBR }
            ),
            status: selectedConsultation.status,
            // Adicione mais informações conforme necessário
          }}
        />
      )}

      {selectedConsultation && selectedConsultation.status === "cancelled" && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={closeModals}
          onConfirm={() => handleDelete(selectedConsultation.id)}
          actionLabel="Apagar"
          consultationInfo={{
            formattedDateTime: format(
              parse(
                selectedConsultation.date,
                "dd 'de' MMMM yyyy HH:mm",
                new Date(),
                { locale: ptBR }
              ),
              "dd 'de' MMMM yyyy HH:mm",
              { locale: ptBR }
            ),
            status: selectedConsultation.status,
            // Adicione mais informações conforme necessário
          }}
        />
      )}
      {selectedConsultation && selectedConsultation.status === "pending" && (
        <ConfirmationModal
          isOpen={isDeclineModalOpen}
          onClose={closeModals}
          onConfirm={() => handleCancel(selectedConsultation.id)}
          actionLabel="Recusar"
          consultationInfo={{
            formattedDateTime: format(
              parse(
                selectedConsultation.date,
                "dd 'de' MMMM yyyy HH:mm",
                new Date(),
                { locale: ptBR }
              ),
              "dd 'de' MMMM yyyy HH:mm",
              { locale: ptBR }
            ),
            status: selectedConsultation.status,
            // Adicione mais informações conforme necessário
          }}
        />
      )}
    </div>
  );
};

export default ProfessionalConsultations;
