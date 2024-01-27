import { StyledButtonContainer } from "./style";
import { IoIosBook } from "react-icons/io";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiLotus } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const StyledButtonBanner = (props ) => {
      const navigate = useNavigate();
      const scrollToFirstElementWithClass = () => {
      const elements = document.getElementsByClassName(props.destinyClass);

        if (elements.length > 0) {
          elements[0].scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        {props.type 
        ? 
        <div style={{width: "100%", alignSelf: "flex-end", justifySelf: "center", justifyContent: "center", display: "flex", paddingBottom: "10%"}}>
        <StyledButtonContainer onClick={() => {navigate(`/${props.destiny}`)}}>
        {props.type === "tests" 
        ? 
        <GiMagnifyingGlass  size={22}/> 
        :
         <GiLotus  size={22}/> 
        }
        <p id="labelStyledButton">{props.label}</p>
        </StyledButtonContainer> 
        </div>
        : 
        <div style={{width: "100%", alignSelf: "flex-end", justifySelf: "center", justifyContent: "center", display: "flex", paddingBottom: "10%"}}>
        <StyledButtonContainer onClick={scrollToFirstElementWithClass}>
        <IoIosBook size={22}/>
        <p id="labelStyledButton">{props.label}</p>
        </StyledButtonContainer>
        </div>}
        
        </>
        
    )
}