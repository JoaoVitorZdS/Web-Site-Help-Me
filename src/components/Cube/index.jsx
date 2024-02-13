import React from "react";
import { StyledCubeContainer } from "./style";
import "./index.css"
import logo from "../../assets/imgs/LogoVetor3.png"


export const Cube = () => {
   return (
      <StyledCubeContainer>
         <div className="cube">
            <div className="top">
               <img src={logo} alt="" />
            </div>

            <div>
               <span
                  style={{ "--i": 0 }}
               >
                  <h1>ERRO 404 -  Página não encontrada</h1>
               </span>
               <span
                  style={{ "--i": 1 }}
               >
                  <h1>ERRO 404 -  Página não encontrada</h1>
               </span>
               <span
                  style={{ "--i": 2 }}
               >
                <h1>ERRO 404 -  Página não encontrada</h1>
               </span>
               <span
                  style={{ "--i": 3 }}
               >
                <h1>ERRO 404 -  Página não encontrada</h1>
               </span>
            </div>
         </div>
      </StyledCubeContainer>
   );
};
