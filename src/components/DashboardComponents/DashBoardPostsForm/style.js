import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledDashboardEventForm = styled.div`
  height: 100%;
  background-color: transparent;
  margin: 0;
  width: 50vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: start;
  align-items: center;
  background-color: ${GlobalStyleDefault.colors.offwhite};

  .edit-post-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
input{width: 100%}

.edit-post-modal {
  background: white;
  width: 100%;
  height: 70%;
  padding: 10px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 5;

}

  .active{
    box-shadow: ${GlobalStyleDefault.shadows.card};
  }
  .component-container{
    width: 50%;
    height: 50%;
  }
  .userSectionsContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 33%;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    color: #ffffff;
  }
 
  
  
`;
