import React, { useContext, useState } from "react";
import { StyledDashboardHead } from "./style";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import genericProfile from "../../../assets/imgs/GenericProfile.jpg"
import DashboardPage from "../../../pages/Dashboard";
import LandingPage from "../../../pages/Landing";
import LoginPage from "../../../pages/Login";

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
      <div>{`${userData.name}`}</div>
        <div id="buttonsContainer">
          
          <button>
            <div>
              Editar Perfil
            </div>
          </button>

          <button>
            <div>
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
        <h3>{`Faça Login Para Continuar`}</h3>
        </div>
      </StyledDashboardHead>
      )}
    </div>
  )
}
