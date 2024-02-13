import styled, { keyframes } from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

const rotationAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
`;

export const StyledGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  .card {
  overflow: visible;
  width: 220px;
  height: 270px;
  
  
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front, .back {
  background-color: #151515;
  position: absolute;
  min-height: 100%;
  max-height: 100%;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: ${GlobalStyleDefault.shadows.card};
  overflow: hidden;
  
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;

}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
  background-color: ${GlobalStyleDefault.colors.secondarystrong};
  filter: blur(5px);
  animation: rotation_481 9000ms infinite linear;
}

.back-content {
  position: absolute;
  box-sizing: border-box;
  padding: 3px;
  width: 98%;
  height: 98%;
  background: radial-gradient( ${GlobalStyleDefault.colors.secondary},  ${GlobalStyleDefault.colors.secondarystrong});
  backdrop-filter: blur(100px); /* Valor do desfoque */
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
  overflow: hidden;
  

  img{
    width: 100%;
    height: 50%;
    border-radius: 5px;
  }
  h4{
    font-family: DolceVita;
    text-align: center;
  }
  
  

  
}


.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}


.front {
  transform: rotateY(180deg);
  color: white;
  

  .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient( ${GlobalStyleDefault.colors.secondarystrong}, ${GlobalStyleDefault.colors.primary});
  position: relative;
  filter: blur(13px);
  animation: floating 5s infinite ease-in-out;
  border: 0 !important;
}
#bottom {
  background: linear-gradient(${GlobalStyleDefault.colors.tertiary}, ${GlobalStyleDefault.colors.secondarystrong},white, ${GlobalStyleDefault.colors.tertiary});
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background: linear-gradient( ${GlobalStyleDefault.colors.secondarystrong}, ${GlobalStyleDefault.colors.primary});
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

.front-content{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient( ${GlobalStyleDefault.colors.secondarystrong}, ${GlobalStyleDefault.colors.primary});
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  ul{
      list-style: none;
      padding: 3px;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li{
        color: #fff;
        
        /* === removing default button style ===*/
.button {
  width: fit-content;
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  margin-bottom: 2%;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: ${GlobalStyleDefault.colors.textwhite};
  --animation-color: #F76DBE66;
  --fs-size: 1em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
 color: #ffffff10;
  -webkit-text-stroke: 0.5px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.4s;
  -webkit-text-stroke: 3px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 20px 23px var(--animation-color))
}
      }
      
    }

}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0px);
  }
}
}
//-------------------------------------------------------------------@media-------------------------------------------------------------//
@media (max-width: 770px) {
    
    
  }




`;

