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
            <AnimatedPlantButton name="Faça um teste" destiny={""}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>

            
             <img src={consultationImage} alt="" style={{width: "300px"}}/>
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