import React from 'react';
import "../../../App.css"
import { useNavigate } from 'react-router-dom';
import GlobalStyleDefault from '../../../GlobalStyles';
import hangingBasket from "../../../assets/imgs/hanging-leaf.png"

const ButtonPlants = (props) => {
  const buttonstyle = `
  
.custom-button {
  position: relative;
  padding: 15px 15px;
  width: 100%;
  background: ${GlobalStyleDefault.colors.secondarystrong};
  box-shadow: ${GlobalStyleDefault.shadows.large}, inset ${GlobalStyleDefault.shadows.innerButton};
  transition: all ease-in-out 1s;
  cursor: pointer;
  border: 0px ;
  border-radius: 8px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
  font-size: calc(.8rem + 0.5vw) !important; /* Ajusta o tamanho da fonte conforme a largura da viewport */

  
  font-weight: 700;
  i{

    color: ${GlobalStyleDefault.colors.textwhite}
  }
 

  

 
}

.custom-button:hover {
  background: radial-gradient( ${GlobalStyleDefault.colors.secondary},  ${GlobalStyleDefault.colors.secondarystrong});
  animation: wind 2s ease-in-out forwards;
  box-shadow: ${GlobalStyleDefault.shadows.card};
}

@keyframes wind {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.icon-1 {
  position: absolute;
  bottom: -100%;
  right: 0;
  width: 25px;
  transform-origin: 0 0;
  display: flex;
  justify-content: center;
 
  transition: all 0.5s ease-in-out;
  filter: drop-shadow(2px 2px 3px rgba(204, 18, 18, 0.3));
  
}

.icon-1 img {
  width: 55px;
  height: 55px;
}

button .icon-1 {
  animation: slay-1 4s ease-in-out infinite alternate;
 
}

@keyframes slay-1 {
  0% {
    transform: rotate(2deg);
  }

  50% {
    transform: rotate(22deg) ;
  }

  100% {
    transform:  rotate(2deg);
  }
}

.icon-2 {
  position: absolute;
  bottom: -120%;
  left: 25px;
  width: 12px;
  transform-origin: 50% 0;
  transform: rotate(10deg);
  transition: all 1s ease-in-out;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
}

.icon-2 img {
  width: 65px;
  height: 65px;
}

button .icon-2 {
  animation: slay-2 3s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite;
  transform: rotate(0);
}

@keyframes slay-2 {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.icon-3 {
  position: absolute;
  bottom: -60%;
  left: 0;
  width: 18px;
  transform-origin: 50% 0;
  transform: rotate(-5deg);
  transition: all 1s ease-in-out;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
}
.icon-3 img {
  width: 35px;
  height: 35px;
}
button .icon-3 {
  animation: slay-3 2s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite;
  transform: rotate(0);
}

@keyframes slay-3 {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0);
  }
}
`
    const Navigate = useNavigate()
  return (
    <>
    <style>{buttonstyle}</style>
    <button onClick={() => Navigate(`/${props.destiny}`)} className="custom-button">
      <i style={{fontFamily: "DolceVita", color: `${GlobalStyleDefault.colors.textwhite}`}}>
      {props.name}
      </i>
    </button>
    </>
  );
};

export default ButtonPlants;

