import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
import '../../App.css'
export const StyledEmergencyBody = styled.div`
  min-height: 90vh;
  height: fit-content;
  
  margin: 0 auto;
  width: 90vw;
  gap: 15px;
  padding: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr ;
  justify-items: center;
 
  
  nav{
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    
    .tagForEmergencyButton{
      background-color: #b30000;
      height: 50px;
      align-self: flex-end;
      transform: translateY(250%);
      border-radius: 15px;
      text-align: center;
      justify-content: center;
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      font-weight: 600;

    }
    .tagForEmergencyButtonSafe{
      background-color:${GlobalStyleDefault.colors.secondarystrong};
      height: 50px;
      align-self: flex-end;
      transform: translateY(250%);
      border-radius: 15px;
      text-align: center;
      justify-content: center;
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      font-weight: 600;

    }
    .container {
  width: 7em;
  height: 7em;
  position: relative;
  
}

.button {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid #090909;
  background-color: transparent;
  background-image: linear-gradient(145deg, #171717, #444245);
  box-sizing: border-box;
  box-shadow: inset 2px 2px 0 #7d7c7e, inset -2px -2px 0px #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container input {
  display: none;
}

.button::before {
  position: absolute;
  content: "";
  width: 7.25em;
  height: 7.25em;
  border-radius: inherit;
  background-color: transparent;
  background-image: linear-gradient(145deg, #262626, #606060);
  z-index: -1;
  box-shadow: 11px 11px 22px #141414, -11px -11px 22px #525252;
}

.button .icon {
  width: 60px;
  height: 60px;
  display: inline-block;
}

.button .icon svg {
  height: 100%;
  width: 100%;
  fill: #a5a5a5;
}

.container  input:hover + .button {
  box-shadow: inset -2px -2px 0 #5e5e5e,inset 2px 2px 0 #1c1c1c;
  border: 4px solid rgb(169 14 14);
  animation: animeBorder 1s linear alternate-reverse infinite;
}

.container input:hover + .button .icon svg {
  fill: linear-gradient(145deg, #171717, #444245);
  animation: animeFill 1s linear alternate-reverse infinite;
}

@keyframes animeFill {
  to {
    fill: rgb(169 14 14);
  }
}

@keyframes animeBorder {
  to {
    border-color: linear-gradient(145deg, #171717, #444245);
  }
}
  }
  div{
    display: flex;
    flex-direction: column;
    text-align: center;
    h2{
      text-align: center;
    }
    width: 100%;
    height: fit-content;

    p {
      text-decoration: underline;
      margin: 0;
      
    }
    
  }
  

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 200px);
    
  }
  
`;
