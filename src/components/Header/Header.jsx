import { StyledHeaderContainer } from "./style";
import Logo from "../../assets/imgs/LogoVetor3.png"
import Slogan from "../../assets/imgs/HelpMe.png"
import Slogan2 from "../../assets/imgs/SloganSemFundoRecortada.png"
import { useNavigate } from "react-router-dom";
import { StyledButtonLogIn } from "../StyledButtons/ButtonsLogIn";
import { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../StyledButtons/ButtonLogInGoogle";
import { IoMenu, IoClose  } from "react-icons/io5";
import { CgPhone, CgProfile } from "react-icons/cg";
import { FaBook, FaQuestion, FaTriangleExclamation, FaUserDoctor } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
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
        {windowWidth >= 770 && (<><div id="logoContainer">
                        <img src={Logo}
                            alt='Help Me Logo'
                            className='logo'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                       
                       
                        </div>
                        <div id="sloganContainer">
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        </div>
                 
                        <div id="buttonsContainer">


                            <StyledButtonLogIn label={"Perfil"} destiny={"/Dashboard"} icon={<CgProfile/>} />
                            <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />
                            <StyledButtonLogIn label={"EMERGÊNCIA!"} destiny={"/emergency"} icon={<FaExclamationTriangle/>} />

                        </div></>)}
        
        {windowWidth < 770 && (
          <><div id="logoContainer">
                <img src={Logo}
                  alt='Help Me Logo'
                  className='logo'
                  id="logoHeader"
                  onClick={() => { navigate("/"); } }></img>
                
              </div>
              <div id="sloganContainer">
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        </div> 
              <div id="mobileMenu">
              <IoMenu size={22} color="#9384D7" onClick={toggleMobileMenu} />
                  {isMobileMenuOpen && (
                    
                    <div id="mobileMenuContent" className={isMobileMenuOpen ? "animate-on-scroll" : "none"}>
                       <IoClose  style={{position: "absolute", left: "0", height: "100%"}} size={22} color="#9384D7" onClick={toggleMobileMenu} />
                      <StyledButtonLogIn label={"Perfil"} destiny={"/Dashboard"} icon={<CgProfile/>} />
                      <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />
                      <StyledButtonLogIn label={"FAQ"} destiny={"/FAQ"} icon={<FaQuestion/>} />
                      <StyledButtonLogIn label={"Fale Conosco"} destiny={"/FAQ"} icon={<CgPhone/>} />
                      <StyledButtonLogIn label={"Agendar Consulta"} destiny={"/consultation"} icon={<FaUserDoctor/>} />
                      <StyledButtonLogIn label={"EMERGÊNCIA!"} destiny={"/emergency"} icon={<FaTriangleExclamation/>} />
                    </div>
                  )}
                </div></>
        )}
    </StyledHeaderContainer>   ) : (
        
        <StyledHeaderContainer>
        {windowWidth >= 770 && (<><div id="logoContainer">
                        <img src={Logo}
                            alt='Help Me Logo'
                            className='logo'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                    </div>
                    <div id="sloganContainer">
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        </div>
                        
                  
                        <div id="buttonsContainer">


                            <StyledButtonLogIn label={"Login"} destiny={"/Login"} icon={<CgProfile/>} />
                            <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />
                            <StyledButtonLogIn label={"EMERGÊNCIA!"} destiny={"/emergency"} icon={<FaExclamationTriangle/>} />

                        </div></>)}
        
        {windowWidth < 770 && (
            <>
            <div id="logoContainer">
                        <img src={Logo}
                            alt='Help Me Logo'
                            className='logo'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        
                    </div>
                    <div id="sloganContainer">
                        <img src={Slogan}
                            alt='Help Me Slogan'
                            className='name'
                            id="logoHeader"
                            onClick={() => { navigate("/"); } }></img>
                        </div>
                    {windowWidth >= 770 && (
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
              <div id="mobileMenuContent" className={isMobileMenuOpen ? "animate-on-scroll" : !isMobileMenuOpen  ? "animate-on-scroll-out" : "none"}>
                  <IoClose  style={{position: "absolute", left: "-3px", height: "100%",border: "1px double #9384D7 "}} size={22} color="#9384D7" onClick={toggleMobileMenu} />
                <StyledButtonLogIn label={"Login"} destiny={"/Login"} icon={<CgProfile/>} />
                <StyledButtonLogIn label={"Blog"} destiny={"/Blog"} icon={<FaBook/>} />
                <StyledButtonLogIn label={"EMERGÊNCIA!"} destiny={"/emergency"} icon={<FaExclamationTriangle/>} />

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