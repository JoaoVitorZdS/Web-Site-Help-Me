import React, { useContext, useState} from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardBody } from "./style";
import { DashboardEventForm } from "../DashBoardEventForm";
import { DashboardOverallForm } from "../DashBoardOverallForm";


export const DashboardUserBody = () => {
  const {accessToken } = useContext(AccessTokenContext);
 

  const [activeCategory, setActiveCategory] = useState("Consultas"); // State to track active category
   
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Logic to render corresponding component based on selected category
    // Example: renderConsultasComponent(), renderPostagensComponent(), renderExtratoComponent()
  };
  const renderActiveComponent = () => {
    switch (activeCategory) {
      case "Consultas":
        return <DashboardEventForm/>;
      case "Extrato":
        return <DashboardOverallForm/>;
      default:
        return null;
    }
  };

  
 
  
  return (
    <>
      {accessToken ? (
        <>
        <StyledDashboardBody>
        <div className="userSectionsContainer">
            <div
              onClick={() => handleCategoryClick("Consultas")}
              className={activeCategory === "Consultas" ? "active" : ""}
            >
              Consultas
            </div>
            
            <div
              onClick={() => handleCategoryClick("Extrato")}
              className={activeCategory === "Extrato" ? "active" : ""}
              >
              Extrato
            </div>
            {/* Other category names */}
          </div>
          <div className="component-container">
            {renderActiveComponent()}
          </div>


</StyledDashboardBody>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
