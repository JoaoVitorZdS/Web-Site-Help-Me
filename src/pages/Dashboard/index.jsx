import React from "react";
import { StyledDashboardContainer } from "./style";
import { DashboardBody } from "../../components/DashboardComponents/DashboardBody";
import { Footer } from "../../components/Footer/Footer";
const DashboardPage = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? (
        <StyledDashboardContainer>
          
          <DashboardBody />
          <Footer/>
        </StyledDashboardContainer>
      ) : (
        
        <StyledDashboardContainer>
          
          <DashboardBody />
          <Footer/>
        </StyledDashboardContainer>
       
      )}
    </div>
  );
};

export default DashboardPage;
