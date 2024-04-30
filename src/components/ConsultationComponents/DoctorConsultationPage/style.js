import styled from 'styled-components';
import GlobalStyleDefault from '../../../GlobalStyles';

export const StyledContainer = styled.div`
 width: 95%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 
`
export const StyledDoctorConsultationContainer = styled.div`
  background-color: transparent;
  margin: 0;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 130vh;

  .ContainerStyledDoctorConsultationContainer {
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 605px) {
    flex-direction: row;
    gap: 2vw;
    
  }
  }

  .doctorInfo {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    box-sizing: border-box;
    max-width: 100%;
    position: relative;
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.25);
.description{
  text-align: center;

}
    h2, h3, h4 {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      width: fit-content;
      margin: 5px;
      padding-block: 0.5vh;
      padding-inline: 1vw;
    }

    .infowrapper {
      width: 100%;
      display: flex;
      flex-direction: column;

      p {
        margin: 0 auto;
        text-align: center;
      }
    }

    button {
      position: relative;
      width: 50%;
      margin: 0 auto;
      border: 0;
      border-radius: 15px;
      background-color: ${GlobalStyleDefault.colors.secondary};
      color: ${GlobalStyleDefault.colors.text};
      font-family: 'DolceVita';
      cursor: pointer;
    }

    p {
      margin-top: 35px;
      text-indent: 10px;
      font-weight: 500;
      font-family: sans-serif, monospace;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }

  @media (min-width: 505px) {
    flex-direction: row;
    align-items: start;
    gap: 10px;

    .doctorInfo {
      max-width: 420px;
    }
  }

  
`;
