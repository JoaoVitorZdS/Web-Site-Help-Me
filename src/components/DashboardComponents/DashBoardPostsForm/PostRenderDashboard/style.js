import styled from "styled-components";
import GlobalStyleDefault from "../../../../GlobalStyles";
import "../../../../App.css"

export const PostRenderDashboardBody = styled.div`
  
  height: auto;
  background-color: transparent;
  margin: 0;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ul{
    width: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px; /* Espaçamento entre os posts */
    list-style: none;
    padding: 5%;
  
  }

  .post-render{
    overflow-y: scroll;
    width: 98%;

    img{
      width: 90%;
      height: auto;
    }
    iframe{
      width: 90%;
      height: 400px;
    }
  }
  .PostDiv{
    box-sizing: border-box;
    width: 96%;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    background-color: ${GlobalStyleDefault.colors.secondary};
    border-radius: 15px;
    margin-top: 15px;
    padding: 2%;
    min-height: 600px;
    height: auto;
    
   

  }
  .expandDashboardRendererPost{
    background-color: ${GlobalStyleDefault.colors.tertiary};
    padding: 1px;
    border: 0;
    border-radius: 7px;
    display: flex;
    align-items: center;
  }

  #editButton {
  position: relative;
  border-radius: 5px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
}

#editButton i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-140%, -50%);
  font-family: DolceVita, monospace;
  opacity: 0;
  display: none; /* Inicialmente, esconda a tag <i> e remova-a do fluxo normal do layout */
  transition: opacity 0.3s ease;
  animation: none;
}

#editButton:hover {
  transform: scale(1.5); /* Aplique o zoom manualmente no hover */
  animation: zoom 1s infinite; /* 2s de duração, repetição infinita */

}
#editButton:hover i {
  opacity: 1;
  display: inline; /* Quando o mouse passa sobre o botão, exiba a tag <i> */
}



//<h2 style={{color: GlobalStyleDefault.colors.primarystrong}}>Editar Post</h2>


  
@media (max-width: 430px) {
 
  
}

/* Estilo específico para a primeira coluna (inputs) */
.edit-post-modal label {
  display: block;
  margin-bottom: 5px;
}

/* Estilo específico para a segunda coluna (textarea) */
.edit-post-modal textarea {
  width: 100%;
  height: 100%;
  resize: none; /* Impede o redimensionamento do textarea */
}

/* Adicione outras estilizações conforme necessário */


  .PostDiv{
    
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p{
      align-self: center;
      
    }
    @keyframes zoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
.ButtonsContainerDashboardPostRenderer{
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    display: flex;
    justify-content: center;
    align-items: center;

  }
}

#likeButton,
#dislikeButton {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: transparent;
  border-radius: 10px;
  width: 22px;
  margin-left: 5px;
  animation: none; /* Remova a animação quando o botão estiver sendo hover */
}

#likeButton:hover,
#dislikeButton:hover {
  animation: zoom 1s infinite; /* 2s de duração, repetição infinita */
 
}
    
   
    .PostImageContainer{
      width: 100%;
      height: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    
      border-radius: 15px;

    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 6; /* Número de linhas desejado */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

  }


  @media (max-width: 535px) {
   
  }
`;
