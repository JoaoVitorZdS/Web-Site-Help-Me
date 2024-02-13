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
  z-index: 1;
  box-shadow: ${GlobalStyleDefault.shadows.medium};
  background: ${GlobalStyleDefault.colors.gradientheader};
  border-radius: 0px 0px 15px 15px;


  @media (max-width: 630px) {
    #logoContainer{
      width: 40%;

    }
    #buttonsContainer{
      width: 40%;

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
    
    #mobileMenuButton{
      border: 0;
      background-color: transparent;
    }
   
  }


  #mobileMenuContent{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
   
    margin-top: 150%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: -160%;

   
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
  @media (max-width: 620px) {
    transform:  scale(0.8);
  
}
  }
  #sloganContainer {
    
    padding: 1%;
    display: flex;
    max-width: 30%;
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
    width: 320px;
    height: 100%;
    padding-inline: 2%;
    gap: 15px;
    justify-content: center;
    align-items: center;
    z-index: 7;
   
   
    background-blend-mode: soft-light;
    @media (max-width: 620px) {
    transform:  scale(0.8);
  
}
    
  }
 
  @media (max-width: 375px) {
    
    
  #mobileMenuContent{
    height: 80px;
    button{
      transform: scale(0.8);
    }

   
  }

    
   
  
}
  
  

 
`;
