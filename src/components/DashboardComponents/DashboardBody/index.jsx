import React, { useContext, useState } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";

import { StyledDashboardBody } from "./style";
import { DashboardEventForm } from "../DashBoardEventForm";
import { DashboardPostForm } from "../DashBoardPostsForm";
import { DashboardOverallForm } from "../DashBoardOverallForm";
import { GiBrain } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { GiChart } from "react-icons/gi";

export const DashboardBody = () => {
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
      case "Postagens":
        return <DashboardPostForm/>;
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
              <GiBrain />
              Consultas
            </div>
            <div
              onClick={() => handleCategoryClick("Postagens")}
              className={activeCategory === "Postagens" ? "active" : ""}
              >
               <GiNotebook />
              Postagens
            </div>
            <div
              onClick={() => handleCategoryClick("Extrato")}
              className={activeCategory === "Extrato" ? "active" : ""}
              >
                <GiChart />
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
