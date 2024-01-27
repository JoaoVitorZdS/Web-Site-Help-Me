import React, { useState } from "react";
import Modal from "react-modal";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, actionLabel, consultationInfo }) => {
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
          inset: "20% 35%",
          width: "320px",
          border: "none",
          background: "white",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        
        
      }}
      shouldCloseOnEsc={true}

    >
      <div>

      
      <h3>Deseja realmente {actionLabel.toLowerCase()} esta consulta?</h3>
      <p>Informações da consulta:</p>
      <p>Data e Hora: {consultationInfo.formattedDateTime}</p>
      <p>Status Atual: {getStatusLabel(consultationInfo.status)}</p>
      </div>

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
