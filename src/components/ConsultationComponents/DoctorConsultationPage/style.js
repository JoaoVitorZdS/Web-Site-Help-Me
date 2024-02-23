import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const StyledDoctorConsultationContainer = styled.div`
  
  height: auto;
  background-color: transparent;
  margin: 0;
  width: 95vw;
  
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  grid-template-rows: 1fr 3fr;

  

  .doctorInfo{
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 5px;
    background-color: antiquewhite;
    border-radius: 25px;
    margin-bottom: 15px;
    width: 90vw;
    min-width: 320px;
    justify-self: center;
    position: relative;

    
      button{
        position: relative;
        
        border: 0;
        border-radius: 15px;
        background-color: ${GlobalStyleDefault.colors.secondary};
        color: ${GlobalStyleDefault.colors.text};
        font-family: DolceVita;
        cursor: pointer;
        
      }
    

    p{
      margin-top: 35px;
      width: 94%;
      min-width: 320px;
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

  @media (max-width: 660px) {
    .doctorInfo{

      margin-top: -5%;
      transform: scale(0.9);
    }
    }
  @media (max-width: 505px) {
    padding: 0;
    position: relative;
    .doctorInfo{
      position: relative;
      left: 0;
      .Imagewrapper{
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      }
      .infowrapper{
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .description{
        margin-left: 5%;
      }
      
      margin-top: -5%;
      transform: scale(0.9);
      grid-template-columns: 0;
      grid-template-rows: 1fr 3fr;
      p{
        
        text-align: center;
      margin-left: 0px;
      
    }
    }
    }
  @media (max-width: 350px) {
   
    .doctorInfo{
    
      
      margin-top: -5%;
      transform: scale(0.9);
      grid-template-columns: 0;
      grid-template-rows: 1fr 3fr;
      p{
        
        text-align: center;
      margin-left: 18px;
      
    }
    }
    }
   


 `