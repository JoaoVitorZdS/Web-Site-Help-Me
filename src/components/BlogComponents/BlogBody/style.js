import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"

export const StyledBlogBody = styled.div`
  height: auto;
  background-color: transparent;
  margin: 0 auto;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 0;
  .searchContainer{
    padding: 2%;
    width: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    .searchBar div {
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    }
    .searchBar input {
      width: 320px;
      padding: 5px;
      border-radius: 15px;
      border: 0;
      box-shadow: ${GlobalStyleDefault.shadows.large};

      &:focus{
        
        box-shadow: ${GlobalStyleDefault.shadows.card};
      }
    }
  }
  .pagination{
    display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    button{
      border: 0;
      background-color: ${GlobalStyleDefault.colors.tertiarystrong};
      border-radius: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      box-shadow: ${GlobalStyleDefault.shadows.paginationButton};
      cursor: pointer;

      &:hover{
        transform: scale(1.1);
      }
    }
  }
  ul {
    width: 94%;
    padding: 0;
    list-style: none;
    display: grid;
    
    grid-template-rows: repeat(auto-fill, minmax(320px, 1fr)); // Ajuste a altura conforme necessário
    gap: 0 3%;
    padding-bottom: 30%;
   
  }

  li {
    border-top: 2px double ${GlobalStyleDefault.colors.secondary};
    border-bottom: 2px double grey;
    background-color: ${GlobalStyleDefault.colors.secondary};
    box-shadow: ${GlobalStyleDefault.shadows.large};
    border-radius: 12px;
    margin-top: 15px;
    color: ${GlobalStyleDefault.colors.textwhite};
    cursor: pointer;
    height: 95%;
   justify-content: space-around;
    display: flex;
    flex-direction: column;
    padding: 5px;
    position: relative;

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
  left: -650%;
  bottom: -90%;
  
  text-align: center;
  color: ${GlobalStyleDefault.colors.textwhite};
  
 
 
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
    transform: translateY(-30%);
  }
 
  100% {
    transform: translateY(0);
  }
}


    .reactionContainerWrapper{
      width: 100%;
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-content: center;
      gap: 25px;
      padding-left: 5%;
      
      
    }
    
    .reactionContainer{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 33%;
      height: 100%;
      border-radius: 50px;
      box-shadow: ${GlobalStyleDefault.shadows.medium};
      background-color: ${GlobalStyleDefault.colors.tertiary};
    }
    .reactionContainer:hover{
      background-color: ${GlobalStyleDefault.colors.tertiarystrong};
    }

    .SocialSharerContainer{
      position: absolute;
      right: -70px;
      bottom: -70px;
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
    .reactionContainer:hover #likeButton{
      animation: zoom 1s infinite; /* 2s de duração, repetição infinita */
    }

    .reactionContainer:hover #dislikeButton{
      animation: zoom 1s infinite; /* 2s de duração, repetição infinita */
    }

    .PostImageContainer {
      width: 100%;
      height: 30vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 35px;
      align-self: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: end;
      overflow: hidden;
      

      
     
    }

    p {
      align-self: center;
      
      
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

  }
  li:hover{
    box-shadow: ${GlobalStyleDefault.shadows.card};
    
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

  @media (min-width: 650px) {
    ul {
    width: 94%;
    padding-left: 3%;
    list-style: none;
    display: grid;
    
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); // Ajuste a altura conforme necessário
    gap: 0 3%;
    padding-bottom: 30%;
   
  }
    
  }
`;

