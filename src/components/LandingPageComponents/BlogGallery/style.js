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
    font-size: 3em;
    margin-bottom: 0;
  }
`

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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    width: 100vw;
    min-height: 500px;
    height: fit-content;
    @keyframes flutuacao {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @keyframes rotacao {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .elemento-flutuante {
    animation: flutuacao 2s ease-in-out infinite;
  }
  
  .elemento-flutuante:hover {
    transform: scale(1.2);
    animation: flutuacao 2s ease-in-out infinite, rotacao 5s linear infinite;
    transform-origin: center;
  }
  
  .elemento-flutuante:nth-child(1) {
    animation-delay: 0.1s;
  }
  
  .elemento-flutuante:nth-child(2) {
    animation-delay: 0.3s; /* Delay de 0.3 segundos para o segundo elemento */
  }
  
  .elemento-flutuante:nth-child(3) {
    animation-delay: 0.5s; /* Delay de 0.5 segundo para o terceiro elemento */
  }
    .curvedTube{
   
   position: absolute;
   width: 200px;
   bottom: -25px;
   left: -8%;
   filter: drop-shadow(0 0 20px ${GlobalStyleDefault.colors.tertiarystrong});
   z-index: -10;
   }
   
   .ring{
       position: absolute;
       width: 300px;
       top: -50px;
       left: -7%;
       filter: drop-shadow(0 0 20px ${GlobalStyleDefault.colors.tertiarystrong});
       z-index: -10;
   }
   
   .metatron{
       position: absolute;
       width: 350px;
       bottom: -40%;
       right: -15%;
       filter: drop-shadow(0 0 20px ${GlobalStyleDefault.colors.tertiarystrong});
  
      z-index: -10;
   
   }
    
    .container-produtos {
      position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;
    height: fit-content;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: start;
    
  
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
.categoriasSlide {
  height: 100%;
  display: flex;
  align-items: center;
}
.imagem-produto {
    background-size: cover;
    background-position: left;
    height: 350px;
    transition: all 1s ease-in-out, background-position 3s ease-in-out;
    border-radius: 5px;
    z-index: 1;
    width: 100%;
    position: relative;
    max-height: 420px;
}


.imagem-produto:hover {
  background-position: center;
   
   

}
.imagem-produto {
    background-size: cover;
    background-position: left;
    transition: all 1s ease-in-out, max-height 1s ease-in-out, background-position cubic-bezier(0.215, 0.610, 0.355, 1) ease-in-out; /* Adiciona max-height e opacity na transição */
    border-radius: 5px;
    z-index: 1;
    width: 100%;
    position: relative;
    overflow: hidden; /* Para esconder o conteúdo que ultrapassa a altura máxima */
}

.imagem-produto:hover {
    background-position: center;
    max-height: 600px; /* Ajusta a altura máxima quando o elemento é focado */
    opacity: 1; /* Torna o conteúdo completamente visível */
    height: fit-content;
}

.slick-track{
  @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
}

.slick-slide{
  transition: all 1s ease-in-out;
  width: 35%;
  &:hover{
  
  }
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
}

.overlay {
    width: 94%;
    height: 100%;
    margin-left: 3%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 1s ease-in-out;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    display: block;
    transform: translateY(150%);
    transition: all 1s ease-in-out;


}

.overlay:hover h3 {
  transform: translateY(0%);
}
.overlay:hover .informacoes {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    transform: translateY(0%);
    

    
    
}
.overlay:hover {
   height: 100%;
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
    transition: all 1s ease-in-out;
   
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
    transition: all 1s ease-in-out;
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