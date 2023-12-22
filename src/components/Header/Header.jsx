import { StyledHeaderContainer } from "./style";
import Logo from "../../assets/imgs/LogoHelpMe.png"
import Slogan from "../../assets/imgs/HelpMe.png"
import { useNavigate } from "react-router-dom";
import { StyledButtonLogIn } from "../StyledButtons/ButtonsLogIn";

export function Header() {
    const navigate = useNavigate()


    return(
    
    <StyledHeaderContainer>
        <div id="logoContainer">
            <img src={Logo}
                alt='Help Me Logo'
                className='logo'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
        </div>
        <div id="sloganContainer">
        <img src={Slogan}
                alt='Help Me Slogan'
                className='logo'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
        </div>
        <div id="buttonsContainer">
            <StyledButtonLogIn label={"Login"} destiny={"login"} icon={'IoMdLogIn'}/>
            
            
            <StyledButtonLogIn label={"Perfil"} destiny={"Dashboard"} icon={'CgProfile'}/>
          
        </div>

    </StyledHeaderContainer>   
    
    )
}