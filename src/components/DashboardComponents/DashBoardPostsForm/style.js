import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const StyledDashboardEventForm = styled.div`
@keyframes zoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
} 
  height: 100%;
  background-color: transparent;
  margin: 0;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;
  
 
  

  .ButtonCreateNewPostADMDashboard{
    position: relative;
  border-radius: 5px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  }
 

  .ButtonCreateNewPostADMDashboard i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
  font-family: DolceVita, monospace;
  font-size: 8px;
  opacity: 0;
  display: none; /* Inicialmente, esconda a tag <i> e remova-a do fluxo normal do layout */
  transition: opacity 0.3s ease;
  animation: none;
  width: 90px;
}

.ButtonCreateNewPostADMDashboard:hover {
  transform: scale(1.5); /* Aplique o zoom manualmente no hover */
  animation: zoom 1s infinite; /* 2s de duração, repetição infinita */

}
.ButtonCreateNewPostADMDashboard:hover i {
  opacity: 1;
  display: inline; /* Quando o mouse passa sobre o botão, exiba a tag <i> */
}

  .edit-post-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
input{width: 100%}

.edit-post-modal {
  background: white;
  width: 100%;
  height: 70%;
  padding: 10px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 5;

}

  .active{
    box-shadow: ${GlobalStyleDefault.shadows.card};
  }
  .component-container{
    width: 100vw;
    height: 50%;
  }
  .userSectionsContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 33%;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    color: #ffffff;
  }
 
  
  
`;


export const StyledForm = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;


  input{
    border-radius: 5px;
    border-width: 0px;
    padding: 3px;
  }

  button{
    border: 0;
    border-radius: 5px;
    min-width: 90px;
    width: fit-content;
    background-color: ${GlobalStyleDefault.colors.secondary};
    color: ${GlobalStyleDefault.colors.textwhite};
    font-family: DolceVita;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    align-self: center;
    
    
  }
  img{
    height: 30%;
    width: 30%;
    border-radius: 5px;
    
  }

`
export const StyledFormMovedToHideToolBar = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: -17%;


  input{
    border-radius: 5px;
    border-width: 0px;
    padding: 3px;
  }

  button{
    border: 0;
    border-radius: 5px;
    min-width: 90px;
    width: fit-content;
    background-color: ${GlobalStyleDefault.colors.secondary};
    color: ${GlobalStyleDefault.colors.textwhite};
    font-family: DolceVita;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    align-self: center;
    
    
  }
  img{
    height: 30%;
    width: 30%;
    border-radius: 5px;
    
  }

`
