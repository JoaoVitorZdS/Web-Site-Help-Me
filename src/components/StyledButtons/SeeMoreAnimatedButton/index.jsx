import React, { useContext, useState } from 'react';
import styled from 'styled-components';  // Importe a biblioteca styled-components
import { useNavigate } from 'react-router-dom';
import "../../../App.css";
import GlobalStyleDefault from '../../../GlobalStyles';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { AccessTokenContext } from '../ButtonLogInGoogle';


// Crie um componente estilizado para o botão
const StyledButton = styled.button`
  background: ${GlobalStyleDefault.colors.secondarystrong};
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: calc(.7rem + 0.5vw) !important; /* Ajusta o tamanho da fonte conforme a largura da viewport */

  font-weight: 500;
  border-radius: 5px ;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: ${GlobalStyleDefault.shadows.medium};
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  z-index: 99;
  transform: scale(0.8);
  min-width: 120px;
  cursor: pointer;
 

  span{
    font-family: DolceVita;
   
  }

  .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;

    svg {
      width: 1.1em;
      transition: transform 0.3s;
      color: #7b52b9;
    }
  }

  &:hover .icon {
    width: calc(100% - 0.6em);
  }

  &:hover .icon svg {
    transform: translateX(0.1em);
  }

  &:active .icon {
    transform: scale(0.95);
  }
`;
const StyledEmergencyButton = styled.button`
  background: #c51212;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 5px ;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: ${GlobalStyleDefault.shadows.medium};
  transform: scale(0.8);

  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  z-index: 99;
  
  cursor: pointer;
 

  span{
    font-family: DolceVita;
   
  }

  .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #c51212;
    right: 0.3em;
    transition: all 0.3s;

    svg {
      width: 1.1em;
      transition: transform 0.3s;
      color: #c51212;
    }
  }

  &:hover .icon {
    width: calc(100% - 0.6em);
  }

  &:hover .icon svg {
    transform: translateX(0.1em);
  }

  &:active .icon {
    transform: scale(0.95);
  }
`;

const ProfessionalConsultationInteractionButton = (props) => {
  const Navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setUserData, setAccessToken } = useContext(AccessTokenContext);

  const handleLogout = () => {
    // Limpar o token de acesso do contexto e os cookies
    setAccessToken(null);
    Cookies.remove('token');
    setUserData(null);

    // Exibir uma notificação de sucesso e redirecionar
    toast.success("Logout realizado com sucesso!");
    Navigate('/');
  };
  if(props.destiny === "/emergency"){

    return (
      <StyledEmergencyButton onClick={() => Navigate(props.destiny)}>
      <span>
      {props.text}
      </span>
      <div className="icon">
        {props.icon}
      </div>
    </StyledEmergencyButton>
  );
}else if( props.destiny === "logout" ){
  return(<StyledButton onClick={() => setIsModalOpen(true)}>
    <span>
    {props.text}
    </span>
    <div className="icon">
      {props.icon}
    </div>
    <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        <h2>Confirmação</h2>
        <p>Tem certeza de que deseja sair?</p>
        <button onClick={handleLogout} style={{ marginRight: '10px' }}>Confirmar</button>
        <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
      </Modal>
  </StyledButton>)

}
else{
  return (
    <StyledButton onClick={() => Navigate(props.destiny)}>
    <span>
    {props.text}
    </span>
    <div className="icon">
      {props.icon}
    </div>
  </StyledButton>
  )
}
};

export default ProfessionalConsultationInteractionButton;
