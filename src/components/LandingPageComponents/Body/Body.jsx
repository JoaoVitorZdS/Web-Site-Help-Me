import { FixedButtons } from "../../StyledButtons/FixedButtonsAllScreens";
import { TestsButtonsLandingPage } from "../../StyledButtons/TestsButtons";
import { Gallery } from "../BlogGallery/Gallery";
import Carousel from "../Carousel/Carousel";
import { StyledBodyContainer } from "./style";
import "../../../App.css"
import headImage from "../../../assets/imgs/womenPng.png"

import AnimatedPlantButton from "../../StyledButtons/AnimatedPlantButton";
import { useNavigate } from "react-router-dom";

export function Body() {
    const navigate = useNavigate()


    return(
    
        <StyledBodyContainer>
            
            
        <div id="firstContainer">
            <div className="petalWrapper" >
                <div className="petalDiv" style={{ "--i": 0 }}  >
                <img src={headImage} alt="Mulher segurando um computador lap-top" onClick={() => navigate("/consultation")}/>

                </div>
                <div className="petalDiv " style={{ "--i": 2 }}></div>
                <div className="petalDiv " style={{ "--i": 3 }}></div>
                <div className="petalDiv " style={{ "--i": 4 }}></div>
                <div className="petalDiv " style={{ "--i": 5 }}></div>
                <div className="petalDiv " style={{ "--i": 6 }}></div>
              
              
                
            </div>
            <div className="textFirstContainer">
                <h1>Agende agora sua consulta!</h1>
                <span>Diversas Profissionais Especializadas em Psicologia e/ou Advocacia </span>
                <br />
                <span>preparadas para melhor atender você!  </span>
                <br />
                <span></span>
            </div>
       
        </div>
        <div id="secondContainer">
            
            <AnimatedPlantButton name="Faça um teste" destiny={"consultation"}/>
            
            
            <AnimatedPlantButton name="Agende uma consulta" destiny={"Dashboard"}/>
            
        </div>
        <div id="thirdContainer">
            
            <i id="TitleSecondContainer">Posts Recomendados</i>
            <Gallery/>
        </div>
        
        

    </StyledBodyContainer>   
    
    )
}