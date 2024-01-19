import { FixedButtons } from "../../StyledButtons/FixedButtonsAllScreens";
import { TestsButtonsLandingPage } from "../../StyledButtons/TestsButtons";
import { Gallery } from "../BlogGallery/Gallery";
import Carousel from "../Carousel/Carousel";
import { StyledBodyContainer } from "./style";


export function Body() {
    


    return(
    
    <StyledBodyContainer>
        <div id="firstContainer">
           <Carousel/>
        </div>
        <div id="secondContainer">
            <h2>Posts Recomendados</h2>
            <Gallery/>
        </div>
        <div id="thirdContainer">
            <TestsButtonsLandingPage label={"Faça um teste"} destiny={"Dashboard"} type='tests'/>
            <TestsButtonsLandingPage label={"Agende uma consulta"} destiny={"Dashboard"}/>
        </div>
        <FixedButtons/>
        

    </StyledBodyContainer>   
    
    )
}