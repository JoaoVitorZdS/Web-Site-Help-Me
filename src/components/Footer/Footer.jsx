import { useNavigate } from "react-router-dom";
import { StyledFooterContainer } from "./style";
import Slogan from "../../assets/imgs/CircleHelpMe.png"


export function Footer() {
const navigate = useNavigate()


    return(
    
    <StyledFooterContainer>
        <div id="propertyContainer">
            <p>@2023 Zenit - Help Me</p>
        </div>
        <div id="termsContainer">
            <a href="/login"> Termos de uso</a>
            
            <a href="/register"> Termos de Privacidade</a>
        </div>
        <div id="signContainer">
        <img src={Slogan}
                alt='Help Me Logo'
                className='logo'
                id="logoFooter"
                onClick={() => {navigate("/")}}></img>
        </div>

    </StyledFooterContainer>   
    
    )
}