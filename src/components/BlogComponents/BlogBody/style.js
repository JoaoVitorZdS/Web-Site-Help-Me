import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"

export const StyledBlogBody = styled.div`
  height: auto;
  background-color: transparent;
  margin: 0;
  width: 99vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  justify-content: start;
  align-items: center;
  padding: 5%;

  ul {
    width: 100%;
    list-style: none;
  }

  li {
    border-top: 2px double ${GlobalStyleDefault.colors.secondary};
    border-bottom: 2px double grey;
    background-color: ${GlobalStyleDefault.colors.offwhite};
    border-radius: 12px;
    margin-top: 15px;
   
    min-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    a{
      width: 100%;
      display: flex;
      
      position: relative;

      h3{
        width: 100%;
      }
    }

    .tagToFullPageContainer {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 20px;
  height: 100%;
  right: 0;
  top: 0;
 
}

.tagToFullPage {
  width: 150px;  /* Ajuste a largura conforme necessário */
  height: 50px;
  font-size: 0.8rem;
  font-family: DolceVita;
  position: absolute;
  left: -550%;
  bottom: -120%;
  
  text-align: center;
  color: ${GlobalStyleDefault.colors.tertiary};
  
 
 
}

.tagToFullPage:hover {
  animation: debounce  infinite 1s;
}





/* Adicione as seguintes linhas para a animação de debounce */
@keyframes debounce {
  0% {
    
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50%);
  }
 
  100% {
    transform: translateY(0);
  }
}


    .reactionContainerWrapper{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      
    }
    .reactionContainer{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 45%;
      height: 100%;
      gap: 5px;
    }

    .reactionCounterNumber{
      font-size: 1rem;
      
    }

    #likeButton {
      background-color: transparent;
      border: transparent;
    }

    #dislikeButton {
      background-color: transparent;
      border: transparent;
    }
    #likeButton:hover {
      animation: zoom 1s infinite; /* 2s de duração, repetição infinita */
    }

    #dislikeButton:hover {
      animation: zoom 1s infinite; /* 2s de duração, repetição infinita */
    }

    .PostImageContainer {
      width: 100%;
      height: 50%;
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 35px;
    }

    p {
      align-self: center;
      padding-top: 15px;
      padding-bottom: 25px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

  }


  
  @keyframes zoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 535px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 15px;
  }
`;

