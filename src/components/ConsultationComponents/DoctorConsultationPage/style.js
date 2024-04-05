import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const StyledDoctorConsultationContainer = styled.div`
  
  min-height: 100vh;
  background-color: transparent;
  margin: 0;
  width: 100vw;
  min-height: 130vh;
  
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: start;
  gap: 10px;
  grid-template-rows: 1fr 3fr;
.ContainerStyledDoctorConsultationContainer{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-content: start;
  justify-content: center;
 
}
  

  .doctorInfo{
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    
    max-width: 420px;
    margin-bottom: 15px;
    width: 90%;
    min-width: 300px;
    justify-self: center;
    position: relative;
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    h2, h3, h4{
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      width: fit-content;
    }
    h3{

    }
    h4{
      
    }
    .Imagewrapper{
      h2, h3, h4 {
          margin: 5px ;
          padding-block: 0.5vh;
          padding-inline: 1vw;
        }
        
        display: flex;
        flex-direction: row;
    }
    .infowrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        p{
          margin: 0 auto;
        }
      }
    
      button{
        position: relative;
        width: 50%;
        margin: 0 auto;
        border: 0;
        border-radius: 15px;
        background-color: ${GlobalStyleDefault.colors.secondary};
        color: ${GlobalStyleDefault.colors.text};
        font-family: DolceVita;
        cursor: pointer;
        
      }
    

    p{
      margin-top: 35px;
      width: 90%;
      min-width: 300px;
      text-indent: 10px;
      font-weight: 50;
      font-family: sans-serif, monospace;
      margin-left: -10px;
      
    }
    img{
      width: 150px;
      height: auto;
      border-radius: 15px;
    }
  }

  @media (max-width: 880px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
  @media (max-width: 660px) {
    .doctorInfo{

      margin-top: -5%;
      
    }
    }
  @media (max-width: 505px) {
    padding: 0;
    position: relative;
    
    .doctorInfo{
      position: relative;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .Imagewrapper{
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      }
      
     
      
      margin-top: 5%;
      
      
      p{
        width: 95%;
        text-align: center;
        font-size: 0.9rem;
      margin-left: 0px;
      padding-inline-end: 15px;
      
    }
    }
    }
  @media (max-width: 350px) {
   
    .doctorInfo{
    
      
      margin-top: -5%;
     
      grid-template-columns: 0;
      grid-template-rows: 1fr 3fr;
      p{
        
        text-align: center;
      margin-left: 18px;
      
    }
    }
    }
   


 `