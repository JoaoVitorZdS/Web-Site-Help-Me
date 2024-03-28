import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  h3{
    color: ${GlobalStyleDefault.colors.secondarystrong};
    font-family: DolceVita;
  }
  .card {
  overflow: visible;
  width: 220px;
  height: 300px;
  
  
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



.back-content {
  position: absolute;
  box-sizing: border-box;
  padding: 6px;
  width: 100%;
  height: 100%;
  background: ${GlobalStyleDefault.colors.secondarystrong};
  backdrop-filter: blur(100px); /* Valor do desfoque */
  border-radius: 5px;
  color: white;
  display: grid;
  grid-template-rows: 2fr 3fr 3fr;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
  overflow: hidden;

  p {
      align-self: center;
      
      text-indent: 10px; /* Define o espaçamento de recuo de 10 pixels */
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  

  img{
    width: 100%;
    height: auto;
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

export const StyledContainer = styled.div`
width: 100%;
display: grid;
grid-template-rows: 1fr 1fr;
gap: 5%;

@media (max-width: 555px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1fr, auto);
  
}
`
export const StyledSlider = styled.div`


  #produtosSection{

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    width: 100vw;
    
    
    .container-produtos {
    width: 98%;
    margin: 0 auto;
}
.nossosProdutos{
  text-align: center;
    margin-bottom: 50px;
    position: relative;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3.8em;
    color: #989898;
    margin-top: 5%;
    letter-spacing: -3px;
}

.imagem-produto {
    background-size: cover;
    background-position: center;
    height: 350px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    z-index: 1;
}

.imagem-produto:hover {
    height: 500px;
    width: 320px;
    z-index: 90;
  

    
      
    
   
}

.slick-slide{
  transition: all 0.3s ease-in-out;
  &:hover{
    margin-right: 111px;
  }
}

.overlay {
    width: 94%;
    height: 100%;
    margin-left: 3%;
   
    background-color: rgba(0, 0, 0, 0.2);
    
   
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.19);
  border-radius: 2px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2px);
-webkit-backdrop-filter: blur(2px);
border: 1px solid rgba(255, 255, 255, 0.25);

}

.slick-list{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.informacoes {
    display: none;
    transition: all 0.3s ease-in-out;


}

.overlay:hover .informacoes {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    
    
}
.overlay:hover {
   
  background: rgba(255, 255, 255, 0.19);
  border-radius: 2px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.25);

}

.overlay h3 {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
   
}

.overlay p {
    color: #fff;
    line-height: 1.5em;
    margin-bottom: 20px;
    
}


  }
  .btn-queensberry {
    background-color: #99d02c;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
}

.btn-queensberry:hover {
    background-color: #79a21b;
}
a:-webkit-any-link {
    color: ${GlobalStyleDefault.colors.textwhite};
    cursor: pointer;
    text-decoration: none;
}


`