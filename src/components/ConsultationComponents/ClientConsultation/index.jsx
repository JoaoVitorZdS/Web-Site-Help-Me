import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { format, parse } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ConfirmationModal from "./ConfirmationModal";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
import { ClientSideConsultationStyledDiv } from "./style";

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
        const formattedDateTime = format(
          parse(consultation.date, "dd 'de' MMMM yyyy HH:mm", new Date(), { locale: ptBR }),
          "dd 'de' MMMM yyyy HH:mm",
          { locale: ptBR }
        );

        let tagColor = "";
        let primaryButtonLabel = "";
        let primaryButtonAction = () => {};

        if (consultation.status === "pending" || consultation.status === "confirmed") {
          tagColor = "yellow";
          primaryButtonLabel = "Cancelar";
          primaryButtonAction = () => openCancelModal(consultation);
        } else if (consultation.status === "cancelled") {
          tagColor = "red";
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
              transition: "height 2s ease",
              height: selectedConsultation === consultation ? "350px" : "50px", // Altura condicional com base na seleção
              width: "280px", 
            }}
          >
            <div style={{ fontFamily: "TimesBold" } }>
              <p>Consulta com <i>{consultation.client_name}</i></p>
              <p>{formattedDateTime}</p>
              <p>Email do Profissional: <i>{consultation.profesional_email}</i></p>
              <p>Celular do Cliente: <i>{consultation.client_phone}</i></p>
              <textarea disabled readOnly  rows={5} style={{resize: "none", width: "100%"}}>{consultation.description}</textarea>
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
      
      <p style={{color: GlobalStyleDefault.colors.textwhite, fontFamily: "DolceVita"}}>Pendentes/Confirmadas</p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", gap: "5px", overflowX: "scroll", height: "auto", paddingBottom: "50px"}} >
      {/* Render pending and confirmed consultations */}
      <ul style={{display: "flex", flexDirection: "row", gap: "15px", height: "auto", padding: 0}}>
        {renderByStatus("pending")}
        {renderByStatus("confirmed")}
      </ul>
      </div>
      <div>
      {/* Render cancelled consultations */}
      <p style={{color: GlobalStyleDefault.colors.textwhite, fontFamily: "DolceVita"}}>Canceladas</p>
      <div style={{display: "flex", flexDirection: "row", width: "auto", gap: "5px", overflowX: "scroll", height: "auto", paddingBottom: "50px"}} >
      <ul style={{display: "flex", flexDirection: "row", gap: "15px", height: "auto", padding: 0}}>
        {renderByStatus("cancelled")}
        {renderByStatus("cancelled")}
        {renderByStatus("cancelled")}
        {renderByStatus("cancelled")}
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

export default ClientConsultations;
