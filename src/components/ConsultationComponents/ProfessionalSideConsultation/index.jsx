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
  const handleDecline = async (id) => {
    try {
      const db = getFirestore();
      const scheduleDocRef = doc(db, "schedule", id);
  
      await updateDoc(scheduleDocRef, {
        status: "cancelled",
      });
  
      // Atualizar a lista de consultas após recusar
      setConsultations((prevConsultations) =>
        prevConsultations.map((consultation) =>
          consultation.id === id ? { ...consultation, status: "cancelled" } : consultation
        )
      );
    } catch (error) {
      console.error("Error declining consultation:", error);
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
            tagColor = "#ffd906";
            primaryButtonLabel = "Aceitar";
            secondaryButtonLabel = "Recusar";
            primaryButtonAction = () => openAcceptModal(consultation);
            secondaryButtonAction = () => openDeclineModal(consultation);
          } else if (consultation.status === "confirmed") {
            tagColor = "#3ee13e";
            primaryButtonLabel = "Cancelar";
            primaryButtonAction = () => openCancelModal(consultation);
          } else if (consultation.status === "cancelled") {
            tagColor = "#b30000";
            primaryButtonLabel = "Apagar";
            primaryButtonAction = () => openDeleteModal(consultation);
          }
          const isCardSelected = selectedConsultation === consultation;
          return (
            <ProfessionalSideConsultationStyledDiv key={consultation.id} style={{
              border: `1px double ${tagColor}`,
              borderLeft: `15px solid ${tagColor}`,
              overflow: "hidden",
              transition: "all 2s ease",
              paddingLeft: "12px",
              height: isCardSelected ? "350px" : "70px", // Adjust the initial height as needed
              width:  isCardSelected ? "280px" : "70px", // Adjust the initial height as needed
            }}>
              
              <div style={{ fontFamily: "TimesBold" } } onClick={() => handleCardClick(consultation)}>
                <p>{formattedDateTime}</p>
                <p>Consulta com <i>{consultation.client_name}</i></p>
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
    <div style={{display: "flex", flexDirection: "column", width: "95vw", gap: "2%", justifyContent: "space-between" }}>
      
      <p style={{color: GlobalStyleDefault.colors.secondarystrong, margin: 0, padding: 0, fontFamily: "DolceVita"}}> Pendentes {consultations.filter(consultation => consultation.status === 'pending').length}</p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", minWidth: "100vw", gap: "5px", overflowX: "auto", padding: 0, paddingRight: "50px"}} >
      {/* Render pending consultations */}
      <ul style={{display: "flex", flexDirection: "row",gap: "15px", height: "auto", minHeight: "100px",  minWidth: "90vw", marginBottom: "50px", padding: "20px",paddingRight: "50px", background: "rgba(255, 255, 255, 0.19)",borderRadius: "16px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>

      {renderByStatus("pending")}
     
   
      </ul>
      </div>
      <div>
      {/* Render confirmed consultations */}
      <p style={{color: GlobalStyleDefault.colors.secondarystrong, margin: 0, padding: 0, fontFamily: "DolceVita"}}>Confirmadas {consultations.filter(consultation => consultation.status === 'confirmed').length} </p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", minWidth: "100vw", gap: "5px", overflowX: "auto",paddingRight: "50px"}} >

      <ul style={{display: "flex", flexDirection: "row",gap: "15px", height: "auto", minHeight: "100px", minWidth: "90vw", marginBottom: "50px", padding: "20px", paddingRight: "50px", background: "rgba(255, 255, 255, 0.19)",borderRadius: "16px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>

      {renderByStatus("confirmed")}
    
      </ul>
      </div>
      </div>
      <div>
      {/* Render cancelled consultations */}
      <p style={{color: GlobalStyleDefault.colors.secondarystrong, margin: 0, padding: 0, fontFamily: "DolceVita"}}>Canceladas {consultations.filter(consultation => consultation.status === 'cancelled').length} </p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", minWidth: "100vw", gap: "5px", overflowX: "auto"}} >


      <ul style={{display: "flex", flexDirection: "row",gap: "15px", height: "auto", minHeight: "100px", minWidth: "90vw", marginBottom: "50px", padding: "20px", background: "rgba(255, 255, 255, 0.19)",borderRadius: "16px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>

      
      {renderByStatus("cancelled")}
    
      
      </ul>
      </div>
      </div>

      {selectedConsultation && selectedConsultation.status === "pending" && (
  <>
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
    <ConfirmationModal
      isOpen={isDeclineModalOpen}
      onClose={closeModals}
      onConfirm={() => handleDecline(selectedConsultation.id)}
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
  </>
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

    </div>
  );
};

export default ProfessionalConsultations;
