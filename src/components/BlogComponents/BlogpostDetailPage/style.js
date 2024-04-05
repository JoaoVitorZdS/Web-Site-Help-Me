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
  position: relative;
  
  // display: grid;
 // grid-template-columns: repeat(3, 1fr);
 // grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  justify-content: space-between;
  align-items: center;
.backButton{
  width: fit-content;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: transparent;
  border: 0;

  &:hover{
    cursor: pointer;
    text-decoration: underline 1px ${GlobalStyleDefault.colors.textwhite};
  }
 
}
  p{
    text-indent: 10px; /* Define o espaçamento de recuo de 10 pixels */
  }
  .MainDiv{
    position: relative;
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 1%;
    gap: 1vw;
  }
  .post-render{
    width: 98%;
    background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
padding-left: 2vw;
    
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img{
      width: 96%;
      height: auto;
      border-radius: 6px;
    }
    iframe{
      width: 96%;
      height: 400px;
      border-radius: 6px;
    }
  }
  .tagsList{
    display: flex;
    flex-direction: column;
  }
  .postOwnerDiv{
    z-index: 1;
    position: sticky;
    top: 3%;
    right:15%;
    background-color: #00000066;
    padding: 1%;
    display: flex;
    flex-direction: column;
    color: ${GlobalStyleDefault.colors.text};
    gap: 3%;
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.7px);
    -webkit-backdrop-filter: blur(7.7);
    border: 1px solid rgba(255, 255, 255, 0.25);
    h5{
      margin-bottom: 1%;
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
  --text-stroke-color: ${GlobalStyleDefault.colors.text};
  --animation-color: ${GlobalStyleDefault.colors.primarystrong};
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

@media (max-width: 520px) {
  .MainDiv{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 2%;
    flex-direction: column-reverse;
  }
  .post-render{
 
    img{
      
      justify-self: center;
      width: 100%;
      height: auto;
    }
    iframe{
      width: 100%;
      height: 400px;
    }
  }
  
}

`;

