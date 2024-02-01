import { StyledHeaderContainer } from "./style";
import Logo from "../../assets/imgs/LogoVetor3.png"
import Slogan from "../../assets/imgs/HelpMe.png"
import Slogan2 from "../../assets/imgs/SloganSemFundoRecortada.png"
import { useNavigate } from "react-router-dom";
import { StyledButtonLogIn } from "../StyledButtons/ButtonsLogIn";
import { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../StyledButtons/ButtonLogInGoogle";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";
export function Header() {
    const navigate = useNavigate()
    const { accessToken } = useContext(AccessTokenContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return(
        <>
    {accessToken ? (
    <StyledHeaderContainer>
        {windowWidth >= 520 && (<><div id="logoContainer">
                        <img src={Logo}
                            alt='Help Me Logo'
                            className='logo'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                    </div>
                        <div id="buttonsContainer">


                            <StyledButtonLogIn label={"Perfil"} destiny={"/Dashboard"} icon={<CgProfile/>} />
                            <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />

                        </div></>)}
        
        {windowWidth < 520 && (
          <><div id="logoContainer">
                <img src={Logo}
                  alt='Help Me Logo'
                  className='logo'
                  id="logoHeader"
                  onClick={() => { navigate("/"); } }></img>
                <img src={Slogan}
                  alt='Help Me Slogan'
                  className='name'
                  id="logoHeader"
                  onClick={() => { navigate("/"); } }></img>
              </div> <div id="mobileMenu">
                  <button onClick={toggleMobileMenu}>&#9776;</button>
                  {isMobileMenuOpen && (
                    <div id="mobileMenuContent">
                      <StyledButtonLogIn label={"Perfil"} destiny={"/Dashboard"} icon={<CgProfile/>} />
                      <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />
                    </div>
                  )}
                </div></>
        )}
    </StyledHeaderContainer>   ) : (
        
        <StyledHeaderContainer>
        {windowWidth >= 520 && (<><div id="logoContainer">
                        <img src={Logo}
                            alt='Help Me Logo'
                            className='logo'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                    </div>
                    {windowWidth >= 520 && (
                    <div id="sloganContainer">
                            
                        </div>)}
                        <div id="buttonsContainer">


                            <StyledButtonLogIn label={"Login"} destiny={"/Login"} icon={<CgProfile/>} />
                            <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />

                        </div></>)}
        
        {windowWidth < 520 && (
            <>
            <div id="logoContainer">
                        <img src={Logo}
                            alt='Help Me Logo'
                            className='logo'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                    </div>
                    {windowWidth >= 520 && (
                    <div id="sloganContainer">
                            <img src={Slogan2}
                                alt='Help Me Slogan'
                                className='slogan'
                                id="logoHeader"
                                onClick={() => { navigate("/"); } }></img>
                        </div>)}
          <div id="mobileMenu">
            
            <IoMenu size={22} color="#9384D7" onClick={toggleMobileMenu} />
            
            {isMobileMenuOpen && (
                <div id="mobileMenuContent">
                  <StyledButtonLogIn label={"Login"} destiny={"/Login"} icon={<CgProfile/>} />
                <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />
              </div>
            )}
          </div>
            </>
        )}
    </StyledHeaderContainer>  
    )}
    </>
    
    
    )
}