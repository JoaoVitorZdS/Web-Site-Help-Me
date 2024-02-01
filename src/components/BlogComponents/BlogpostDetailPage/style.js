import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledBlogPostDetailBody = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 99vw;
  background-color: transparent;
  margin: 0;
  display: flex;
  flex-direction: column;
  
  // display: grid;
 // grid-template-columns: repeat(3, 1fr);
 // grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  
  .post-render{
    width: 90vw;
    padding: 4%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }
  .postOwnerDiv{
    position: absolute;
    right: 5%;
    top: 70%;
    background-color: #00000066;
    padding: 1%;
    color: ${GlobalStyleDefault.colors.textwhite};
    h5{
      margin-bottom: -10%;
    }

    ul{
      list-style: none;
      padding: 0;

      li{
        
        /* === removing default button style ===*/
.button {
  width: fit-content;
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  margin-bottom: 2%;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: #37FF8B;
  --fs-size: 1em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 3px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}
      }
      
    }
  }

  


  
  @keyframes zoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

`;

