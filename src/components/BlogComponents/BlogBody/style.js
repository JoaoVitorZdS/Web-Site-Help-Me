import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledBlogBody = styled.div`
  
  height: auto;
  background-color: transparent;
  margin: 0;
  width: 90vw;
 
  display: flex;
  flex-direction: column;
  
  justify-content: start;
  align-items: center;
  ul{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Duas colunas com mínimo de 300px de largura */
    gap: 50px; /* Espaçamento entre os posts */
    list-style: none;
    padding: 5%;
    height: 800px;
  
  }
  li{
   
    

  }

  .PostDiv{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    background-color: ${GlobalStyleDefault.colors.offwhite};
    border-radius: 15px;
    margin-top: 15px;
    padding: 10px;
  
    height: 100%;
  
    display: flex;
    flex-direction: column;
    padding: 15px;

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
      padding-top: 15px;
      padding-bottom: 25px;
      display: -webkit-box;
      -webkit-line-clamp: 5; /* Número de linhas desejado */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .BlogPostModal{
      width: 200px;
        height: 200px;


    }
    .BlogPostModalIMG{
        width: 20px;
        height: 20px;

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
