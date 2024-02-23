import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 98vw;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  //background-color: ${GlobalStyleDefault.colors.secondary};
  padding-top: 1%;
  z-index: 99;
  box-shadow: ${GlobalStyleDefault.shadows.medium};
  background: ${GlobalStyleDefault.colors.gradientheader};
  border-radius: 0px 0px 15px 15px;


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
    width: 320px;
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
    height: 99%;
    width: 34%;
    border-radius: 500px;
   
    
    background-color: #ffffff88;
   

  }
  @media (max-width: 770px) {
    transform:  scale(0.8);
  
}
  }
  #sloganContainer {
    
    padding: 1%;
    display: flex;
    width: 20%;
    width: fit-content;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 7;
   
   
  
    img{
      min-width: 80px;
      
    }
    .slogan{
    height: 100%;
    
  
  }
  }
  #buttonsContainer {
    display: flex;
    width: 80%;
    max-width: 660px;
    height: 100%;
    padding-inline: 2%;
    gap: 15px;
    justify-content: center;
    align-items: center;
    z-index: 7;
   
   
    background-blend-mode: soft-light;
    @media (max-width: 770px) {
    transform:  scale(0.8);
  
}
    
  }
 
  @media (max-width: 775px) {
    
    
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
    background-color: antiquewhite;
    border-radius: 15px;
    overflow: hidden;
    height: 100vh;
   
 

   
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
    animation: fadeInFromRight 1s ease-in-out forwards;
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
