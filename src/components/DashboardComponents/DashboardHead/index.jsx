import React, { useContext} from "react";
import { StyledDashboardHead } from "./style";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import genericProfile from "../../../assets/imgs/GenericProfile.jpg"
import { GiCharm } from "react-icons/gi";
import { GiFountainPen } from "react-icons/gi";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
export const DashboardHead = () => {

  const { userData, accessToken } = useContext(AccessTokenContext)


  return (
    <div>
      {accessToken ?(
        
       <StyledDashboardHead>
       <div id="userPicContainer">
       <img alt="googleProfilePic" src={userData.picture} style={{}}></img>
       </div>
       
    <div id="userInfoContainer">
      <i>{`${userData.name}`}</i>
        <div id="buttonsContainer">
          
          <button>
            <div>
            <GiFountainPen />
              Editar Perfil
            </div>
          </button>

          <button>
            <div>
            <GiCharm />
              Curtidas
            </div>
           </button>

        </div>
    </div>
      
       
       
     </StyledDashboardHead>
            
      ):(
        <StyledDashboardHead>
        <div>
        <img alt="googleProfilePic" src={genericProfile} style={{}}></img>
        </div>
        <div>
        <h3 style={{color: `${GlobalStyleDefault.colors.secondary}`, fontFamily: "DolceVita"}}>Faça <a href="/login">Login</a> Para Continuar</h3>
        </div>
      </StyledDashboardHead>
      )}
    </div>
  )
}
