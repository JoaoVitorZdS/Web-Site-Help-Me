
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
            <Gallery/>
        </div>
        <div id="thirdContainer">
            
          
        </div>

    </StyledBodyContainer>   
    
    )
}