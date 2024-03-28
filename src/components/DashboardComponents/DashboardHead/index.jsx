import React, { useContext} from "react";
import { StyledDashboardHead } from "./style";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import genericProfile from "../../../assets/imgs/GenericProfile.jpg"
import { GiCharm } from "react-icons/gi";
import { GiFountainPen } from "react-icons/gi";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
import plantProfile from "../../../assets/imgs/PlantProfile.png"

export const DashboardHead = () => {

  const { userData, accessToken } = useContext(AccessTokenContext)


  return (
    <div>
      {accessToken ?(
        
       <StyledDashboardHead>
       <div id="userPicContainer">
        <img src={plantProfile} alt="" style={{display: "flex", position: "relative", zIndex: "1", width: "250px", height: "auto"}} />
       <img alt="googleProfilePic" src={userData.picture || genericProfile} style={{ zIndex: 2, position: "relative",width: "100px", height: "auto", borderRadius: "50%", bottom: "-7px", left: "-180px",  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}></img>
       </div>
       
    <div id="userInfoContainer">
      <h3>{`${userData.name}`}</h3>
        
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
