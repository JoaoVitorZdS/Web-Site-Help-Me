import { StyledHeaderContainer } from "./style";
import Logo from "../../assets/imgs/LogoVetor.png"
import Slogan from "../../assets/imgs/NomeSemFundo.png"
import Slogan2 from "../../assets/imgs/SloganSemFundo2.png"
import { useNavigate } from "react-router-dom";
import { StyledButtonLogIn } from "../StyledButtons/ButtonsLogIn";
import { useContext } from "react";
import { AccessTokenContext } from "../StyledButtons/ButtonLogInGoogle";
import { SiBloglovin } from "react-icons/si";
export function Header() {
    const navigate = useNavigate()
    const { accessToken } = useContext(AccessTokenContext);


    return(
    <>
    {accessToken ? (<StyledHeaderContainer>
        <div id="logoContainer">
            <img src={Logo}
                alt='Help Me Logo'
                className='logo'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
                 <img src={Slogan}
                alt='Help Me Slogan'
                className='name'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
        </div>
        <div id="sloganContainer">
       
        <img src={Slogan2}
                alt='Help Me Slogan'
                className='slogan'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
        </div>
        <div id="buttonsContainer">
            
            
            
            <StyledButtonLogIn label={"Perfil"} destiny={"Dashboard"} icon={'CgProfile'}/>
            <StyledButtonLogIn label={"Blog"} destiny={"Blog"} icon={'SiBloglovin'}/>
          
        </div>

    </StyledHeaderContainer>   ) : (
        <StyledHeaderContainer>
         <div id="logoContainer">
            <img src={Logo}
                alt='Help Me Logo'
                className='logo'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
                 <img src={Slogan}
                alt='Help Me Slogan'
                className='name'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
        </div>
        <div id="sloganContainer">
       
        <img src={Slogan2}
                alt='Help Me Slogan'
                className='slogan'
                id="logoHeader"
                onClick={() => {navigate("/")}}></img>
        </div>
        <div id="buttonsContainer">
            <StyledButtonLogIn label={"Login"} destiny={"login"} icon={'IoMdLogIn'}/>
            
            
            <StyledButtonLogIn label={"Perfil"} destiny={"Dashboard"} icon={'CgProfile'}/>
          
        </div>

    </StyledHeaderContainer>   
    )}
    </>
    
    
    )
}