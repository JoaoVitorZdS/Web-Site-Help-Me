import React, { useState } from "react";
import Modal from "react-modal";
import { ProfessionalSideConsultationStyledDiv } from "../style";
import GlobalStyleDefault from "../../../../GlobalStyles";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, actionLabel, consultationInfo }) => {
  // eslint-disable-next-line
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleConfirm = () => {
    onConfirm(additionalInfo);
    onClose();
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

  return (
   
      
    <Modal
      
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          position: "absolute",
          inset: "25% 25%",
          width: "fit-content",
          height: "fit-content",
          border: "none",
          background: "white",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: `${GlobalStyleDefault.shadows.card}`
        }
        
        
        
      }}
      shouldCloseOnEsc={true}

    >
      <ProfessionalSideConsultationStyledDiv >

      
      <h3>Deseja realmente {actionLabel.toLowerCase()} esta consulta?</h3>
      
      <p>{consultationInfo.formattedDateTime}</p>
      <p>Status Atual: {getStatusLabel(consultationInfo.status)}</p>
      <p>Email do Cliente: {consultationInfo.client_email}</p>
      <p>Celular do Cliente: {consultationInfo.client_phone}</p>
     
      </ProfessionalSideConsultationStyledDiv>

      {/* Se precisar de mais informações, adicione aqui */}
      {/* <p>Outras informações: {consultationInfo.additionalInfo}</p> */}

      {/* Campo para inserção de informações adicionais */
      /*
      <textarea
      placeholder="Informe detalhes adicionais (opcional)"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        style={{ width: "70%", margin: "10px 0" }}
        rows={4}
        cols={50}
      />
      */
    }

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button onClick={handleConfirm}>Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </Modal>
   
  );
};

export default ConfirmationModal;
