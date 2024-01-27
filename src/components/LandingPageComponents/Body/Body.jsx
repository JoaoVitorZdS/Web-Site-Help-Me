import { FixedButtons } from "../../StyledButtons/FixedButtonsAllScreens";
import { TestsButtonsLandingPage } from "../../StyledButtons/TestsButtons";
import { Gallery } from "../BlogGallery/Gallery";
import Carousel from "../Carousel/Carousel";
import { StyledBodyContainer } from "./style";
import "../../../App.css"

export function Body() {
    


    return(
    
    <StyledBodyContainer>
        <div id="firstContainer">
           <Carousel/>
        </div>
        <div id="thirdContainer">
            <TestsButtonsLandingPage label={"Faça um teste"} destiny={"Dashboard"} type='tests'/>
            <TestsButtonsLandingPage label={"Agende uma consulta"} destiny={"consultation"}/>
        </div>
        <div id="secondContainer">
            <i id="TitleSecondContainer" style={{fontSize: "1em", fontFamily: "DolceVita"}}>Posts Recomendados</i>
            <Gallery/>
        </div>
        <FixedButtons/>
        

    </StyledBodyContainer>   
    
    )
}