import { FixedButtons } from "../../StyledButtons/FixedButtonsAllScreens";
import { TestsButtonsLandingPage } from "../../StyledButtons/TestsButtons";
import { Gallery } from "../BlogGallery/Gallery";
import Carousel from "../Carousel/Carousel";
import { StyledBodyContainer } from "./style";
import "../../../App.css"
import consultationImage from "../../../assets/imgs/woman-talking-with-psychologist.png"
import OnlineTesting from "../../../assets/imgs/online-testing.png"

import AnimatedPlantButton from "../../StyledButtons/AnimatedPlantButton";
import { useNavigate } from "react-router-dom";
import GlobalStyleDefault from "../../../GlobalStyles";

export function Body() {
    const navigate = useNavigate()


    return(
    
        <StyledBodyContainer>
            
            
        <div id="firstContainer">
          <Carousel/>
       
        </div>
        <div id="secondContainer">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>

           
             <img src={OnlineTesting} alt="" style={{width: "300px"}}/>
             <h4 style={{width: "280px", fontFamily: "DolceVita", textAlign: "center", color: `${GlobalStyleDefault.colors.text}`}}>
                Responda a algumas perguntas e descubra qual é o melhor atendimento para você!
            </h4>
            <AnimatedPlantButton name="Faça um teste" destiny={""}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>


             <img src={consultationImage} alt="" style={{width: "300px"}}/>
            <h4 style={{width: "280px", fontFamily: "DolceVita", textAlign: "center", color: `${GlobalStyleDefault.colors.text}`}}>
                Escolha uma de nossas profissionais para te ajudar agora mesmo!
            </h4>
            <AnimatedPlantButton name="Agende uma consulta" destiny={"consultation"}/>
            </div>
            
        </div>
        <div id="thirdContainer">
            
            <i id="TitleSecondContainer">Posts Recomendados</i>
            <Gallery/>
        </div>
        
        

    </StyledBodyContainer>   
    
    )
}