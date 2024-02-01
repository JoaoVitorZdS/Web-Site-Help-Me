import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, query, where, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { format, parse } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ConfirmationModal from "./ConfirmationModal";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
import { ProfessionalSideConsultationStyledDiv } from "./style";

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
      case 'cancelled':
        return 'Cancelada';
      default:
        return 'Desconhecido';
    }
  };


    const renderByStatus = (status) => {

      const handleCardClick = (consultation) => {
        setSelectedConsultation((prevSelected) => (prevSelected === consultation ? null : consultation));
      };
      const sortedConsultations = [...consultations].sort((a, b) => {
        if (a.status === "pending" && (b.status === "confirmed" || b.status === "cancelled")) {
          return -1;
        } else if (a.status === "confirmed" && b.status === "cancelled") {
          return -1;
        } else if (a.status === "pending" && b.status === "cancelled") {
          return -1;
        }
        return 0;
      });
      return sortedConsultations
        .filter((consultation) => consultation.status === status)
        .map((consultation) => {
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
          const isCardSelected = selectedConsultation === consultation;
          return (
            <ProfessionalSideConsultationStyledDiv key={consultation.id} style={{
              border: `1px double ${tagColor}`,
              borderLeft: `15px solid ${tagColor}`,
              overflow: "hidden",
              transition: "height 10s ease",
              height: isCardSelected ? "auto" : "60px", // Adjust the initial height as needed
              width: isCardSelected ? "auto" : "320px", // Adjust the initial height as needed
            }}>
              <div style={{ fontFamily: "TimesBold" } } onClick={() => handleCardClick(consultation)}>
                <p>Consulta com <i>{consultation.client_name}</i></p>
                <p>{formattedDateTime}</p>
                <p>Email do Cliente: <i>{consultation.client_email}</i></p>
                <p>Celular do Cliente: <i>{consultation.client_phone}</i></p>
                <textarea disabled readOnly rows={5}>{consultation.description}</textarea>
                <p style={{ fontFamily: "Contacto", color: tagColor }}>{getStatusLabel(consultation.status)}</p>
              </div>
              <div className="Accept_Decline_or_Reject_Buttons_container">
                <button onClick={primaryButtonAction}>{primaryButtonLabel}</button>
                {secondaryButtonLabel && (
                  <button onClick={secondaryButtonAction} >{secondaryButtonLabel}</button>
                )}
              </div>
            </ProfessionalSideConsultationStyledDiv>
          );
        });
      }
  return (
    <div style={{display: "flex", flexDirection: "row", width: "94vw", paddingLeft: "5%", gap: "2%", justifyContent: "space-between"}}>
      
      <div >
      <p style={{color: GlobalStyleDefault.colors.textwhite, fontFamily: "DolceVita"}}>Pendentes</p>
      {/* Render pending consultations */}
      {renderByStatus("pending")}
      </div>
      <div>
      {/* Render confirmed consultations */}
      <p style={{color: GlobalStyleDefault.colors.textwhite, fontFamily: "DolceVita"}}>Confirmadas </p>
      {renderByStatus("confirmed")}
      </div>
      <div>
      {/* Render cancelled consultations */}
      <p style={{color: GlobalStyleDefault.colors.textwhite, fontFamily: "DolceVita"}}>Canceladas </p>
      {renderByStatus("cancelled")}
      </div>

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
