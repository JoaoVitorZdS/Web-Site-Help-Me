import styled from "styled-components";
import GlobalStyleDefault from "../../../../GlobalStyles";


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
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px; /* Espaçamento entre os posts */
    list-style: none;
    padding: 5%;
  
  }
  li{
    
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    background-color: ${GlobalStyleDefault.colors.offwhite};
    border-radius: 15px;
    margin-top: 15px;
    padding: 10px;
    min-height: 600px;
    height: auto;

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

/* Adicione outras estilizações conforme necessário */


  .PostDiv{
    
    height: 400px;
    display: flex;
    flex-direction: column;

    p{
      align-self: center;
      
    }
    #likeButton {
      background-color: transparent;
      border: transparent;
    }
    #dislikeButton {
      background-color: transparent;
      border: transparent;
    }
    
   
    .PostImageContainer{
      width: 100%;
      height: 50%;
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      
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
    div {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 25px;
    }
  }
`;
