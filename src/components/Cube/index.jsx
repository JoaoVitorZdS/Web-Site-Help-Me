import React from "react";
import { StyledCubeContainer } from "./style";



export const Cube = () => {
   return (
      <StyledCubeContainer>
         <div className="cube">
            <div className="top"></div>

            <div>
               <span
                  style={{ "--i": 0 }}
               ></span>
               <span
                  style={{ "--i": 1 }}
               ></span>
               <span
                  style={{ "--i": 2 }}
               ></span>
               <span
                  style={{ "--i": 3 }}
               ></span>
            </div>
         </div>
      </StyledCubeContainer>
   );
};
