import React from 'react';
import styled from 'styled-components';  // Importe a biblioteca styled-components
import { useNavigate } from 'react-router-dom';
import "../../../App.css";
import GlobalStyleDefault from '../../../GlobalStyles';


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
  overflow: hidden;
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
}else{
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
