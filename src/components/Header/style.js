import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
import bck from "../../assets/imgs/backgroudStained.png"

export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 9vh;
  justify-content: space-between;
  align-items: center;
  //background-color: ${GlobalStyleDefault.colors.secondary};
  padding-top: 1%;
  padding-inline: 5vw;
  z-index: 90;
  position: relative;
  box-shadow: ${GlobalStyleDefault.shadows.medium};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  

  @media (max-width: 630px) {
    #logoContainer{
      width: 40%;

    }
    #buttonsContainer{
      width: 60%;

    }
  }

  @media (max-width: 520px) {
    
    
   
  }
  #mobileMenu{
    width: 7%;
    height: auto;
    position: relative;
    gap: 10px;
    right: 0;
    margin-inline: 5%;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
    z-index: 99;
    #mobileMenuButton{
      border: 0;
      background-color: transparent;
      z-index: 30;
    }
   
  }


  

  #logoContainer {
    display: flex;
    width: 10%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 7;
    margin-left: 2%;
    margin-bottom: 1%;
    
    

    .name{
      height: 100%;
    width: 70%;
  }
    .logo{
    height: 100%;
    width: auto;
    border-radius: 500px;
   
    
    background-color: #fff;
   

  }
  @media (max-width: 770px) {
    transform:  scale(0.8);
  
}
  }
  #sloganContainer {
    
    padding: 1%;
    display: flex;
    width: 70%;
    width: fit-content;
    height: 80%;
    justify-content: center;
    align-items: center;
    z-index: 7;
   
   
  
    img{
      height: 100%;

      
    }
    .slogan{
    height: 100%;
    
  
  }
  }
  #buttonsContainer {
    display: flex;
    width: 50%;
 
    height: 100%;
    
  
    justify-content: center;
    align-items: center;
    z-index: 7;
   
   
    background-blend-mode: soft-light;
    @media (max-width: 770px) {
    transform:  scale(0.8);
  
}
    
  }
 
  @media (max-width: 1012px) {
    .mobileMenuOverlay{
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
  #mobileMenuContent{
    display: flex;
    height: fit-content;
    position: absolute;
    top: -200%;
    right: -100%;
    width: 250px;
    z-index: 80;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
   
 

   
    button{
      width: 100%;
      transform: scale(0.8);
    }

    
   
  }
    
   
  
}
.animate-on-scroll-out {
  opacity: 0;
  animation: fadeOutToRight 1s ease-in-out forwards; /* Ajuste a duração conforme necessário */
}

@keyframes fadeOutToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
.animate-on-scroll {
  opacity: 1;
    animation: fadeInFromRight 0.5s ease-in-out forwards;
  }
@keyframes fadeInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
  
  

 
`;
