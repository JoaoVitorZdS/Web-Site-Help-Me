import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import ConfirmationModal from "./ConfirmationModal";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
import { ClientSideConsultationStyledDiv } from "./style";
import { format, parseISO, isValid } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const ClientConsultations = () => {
  const { userData } = useContext(AccessTokenContext);
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const openCancelModal = (consultation) => {
    setSelectedConsultation(consultation);
    setIsCancelModalOpen(true);
  };

  const closeModals = () => {
    setIsCancelModalOpen(false);
    setSelectedConsultation(null);
  };

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const db = getFirestore();
        const scheduleCollection = collection(db, "schedule");
        const clientEmailCondition = where(
          "client_email",
          "==",
          userData.email
        );

        const scheduleQuery = query(scheduleCollection, clientEmailCondition);
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

  const handleCancel = async (id) => {
    try {
      const db = getFirestore();
      const scheduleDocRef = doc(db, "schedule", id);

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

  const toggleConsultation = (consultation) => {
    if (selectedConsultation === consultation) {
      setSelectedConsultation(null);
    } else {
      setSelectedConsultation(consultation);
    }
  };

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    if (isValid(date)) {
      return format(date, "dd 'de' MMMM yyyy HH:mm", { locale: ptBR });
    } else {
      return "Data inválida";
    }
  };
  
  const renderByStatus = (status) => {
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
        const formattedDateTime = formatDate(consultation.date);
  
        let tagColor = "";
        let primaryButtonLabel = "";
        let primaryButtonAction = () => {};
  
        if (consultation.status === "pending") {
          tagColor = "#ffd906";
          primaryButtonLabel = "Cancelar";
          primaryButtonAction = () => openCancelModal(consultation);
        } else if (consultation.status === "confirmed") {
          primaryButtonLabel = "Cancelar";
          primaryButtonAction = () => openCancelModal(consultation);
          tagColor = "#3ee13e";
        } else if (consultation.status === "cancelled") {
          tagColor = "#b30000";
        }
  
        return (
          <ClientSideConsultationStyledDiv
            key={consultation.id}
            className={selectedConsultation === consultation ? "iscardselected" : ""}
            onClick={() => toggleConsultation(consultation)}
            style={{
              border: `1px double ${tagColor}`,
              borderLeft: `15px solid ${tagColor}`,
              overflow: "hidden",
              paddingLeft: "12px",
              transition: "all 2s ease",
              height: "fit-content", // Adjust the initial height as needed
              width:  "280px", // Adjust the initial height as needed
            }}
          >
            <div style={{ fontFamily: "TimesBold" } }>
              <p>Consulta com <i>{consultation.client_name}</i></p>
              <p>{formattedDateTime}</p>
              <p>Email do Profissional: <i>{consultation.professional_email}</i></p>
              <textarea disabled readOnly rows={5} style={{resize: "none", width: "100%"}}>{consultation.description}</textarea>
              <p style={{ fontFamily: "Contacto", color: tagColor }}>{getStatusLabel(consultation.status)}</p>
            </div>
            <div className="Cancel_Button_container">
              {consultation.status !== "cancelled" && (
                <button onClick={primaryButtonAction}>{primaryButtonLabel}</button>
              )}
            </div>
          </ClientSideConsultationStyledDiv>
        );
      });
  };

  return (
    <div style={{display: "flex", flexDirection: "column", width: "95vw", paddingLeft: "5%", gap: "2%", justifyContent: "space-between" }}>
      <h1 style={{color: `${GlobalStyleDefault.colors.secondarystrong}`, fontFamily: "DolceVita", justifyContent: "center", display: "flex"}}>Consultas</h1>
      <p style={{color: GlobalStyleDefault.colors.textwhite, textShadow: "black 1px 5px 5px",margin: 0, marginTop: "10vh", padding: 0, fontFamily: "DolceVita", fontSize: "1.5rem", textIndent: "5vw",background: "rgba(238, 204, 12, 0.78)",borderRadius: "6px 6px 0px 0px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)", textIndent: "5vw"}}>Pendentes {consultations.filter(consultation => consultation.status === 'pending').length}</p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", gap: "5px", overflowX: "auto", padding: 0, paddingRight: "50px"}} >
      {/* Render pending and confirmed consultations */}
      <ul style={{display: "flex", flexDirection: "row",gap: "15px", height: "auto", minHeight: "100px", marginBottom: "5px", marginTop: "0", padding: "20px",paddingRight: "50px", background: "rgba(255, 255, 255, 0.19)",borderRadius: "0px 0px 6px 6px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>

        {renderByStatus("pending")}
        
      </ul>
      </div>
      <p style={{color: GlobalStyleDefault.colors.textwhite, textShadow: "black 5px 5px 5px",margin: 0, marginTop: "10vh", padding: 0, fontFamily: "DolceVita", fontSize: "1.5rem", textIndent: "5vw",background: "rgba(62, 225, 62, 0.78)",borderRadius: "6px 6px 0px 0px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>Confirmadas {consultations.filter(consultation => consultation.status === 'confirmed').length}</p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", gap: "5px", overflowX: "auto", padding: 0, paddingRight: "50px"}} >
      {/* Render pending and confirmed consultations */}
      <ul style={{display: "flex", flexDirection: "row",gap: "15px", height: "auto", minHeight: "100px", marginBottom: "5px", marginTop: "0", padding: "20px",paddingRight: "50px", background: "rgba(255, 255, 255, 0.19)",borderRadius: "0px 0px 6px 6px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>

        {renderByStatus("confirmed")}
        
      </ul>
      </div>
      <div>
      {/* Render cancelled consultations */}
      <p style={{color: GlobalStyleDefault.colors.textwhite, textShadow: "black 5px 5px 5px",margin: 0, marginTop: "10vh", padding: 0, fontFamily: "DolceVita", fontSize: "1.5rem", textIndent: "5vw",background: "rgba(179, 0, 0, 0.78)",borderRadius: "6px 6px 0px 0px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>Canceladas {consultations.filter(consultation => consultation.status === 'cancelled').length}</p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", gap: "5px", overflowX: "auto", padding: 0, paddingRight: "50px"}} >
      <ul style={{display: "flex", flexDirection: "row",gap: "15px", height: "auto", minHeight: "100px", marginBottom: "5px", marginTop: "0", padding: "20px",paddingRight: "50px", background: "rgba(255, 255, 255, 0.19)",borderRadius: "0px 0px 6px 6px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",border: "1px solid rgba(255, 255, 255, 0.25)"}}>

        {renderByStatus("cancelled")}
        
      </ul>
      </div>
      </div>

      {selectedConsultation && (selectedConsultation.status === "pending" || selectedConsultation.status === "confirmed") && (
        <ConfirmationModal
          isOpen={isCancelModalOpen}
          onClose={closeModals}
          onConfirm={() => handleCancel(selectedConsultation.id)}
          actionLabel="Cancelar"
          consultationInfo={{
            formattedDateTime: formatDate(selectedConsultation.date),
            status: selectedConsultation.status,
            // Adicione mais informações conforme necessário
          }}
        />
      )}
    </div>
  );
};

export default ClientConsultations;
