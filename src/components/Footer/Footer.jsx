import { useNavigate } from "react-router-dom";
import { StyledFooterContainer } from "./style";
import Slogan from "../../assets/imgs/NomeSemFundo.png"


export function Footer() {
const navigate = useNavigate()


    return(
    
    <StyledFooterContainer>
        <div id="signContainer">
        <img src={Slogan}
                alt='Help Me Logo'
                className='logo'
                id="logoFooter"
                onClick={() => {navigate("/")}}
                style={{alignSelf: "end"}}></img>
        </div>
        <div id="termsContainer">
            <a href="/blog"> Termos de uso e Privacidade</a>
        </div>
        <div id="propertyContainer">
            <p style={{fontSize: "smaller"}}>©2024 Help Me</p>
        </div>
        

    </StyledFooterContainer>   
    
    )
}