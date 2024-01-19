import { useNavigate } from "react-router-dom";
import { StyledButtonContainer } from "./style";

import { GiMagnifyingGlass } from "react-icons/gi";
import { GiLotus } from "react-icons/gi";
export const TestsButtonsLandingPage = (props ) => {
    const navigate = useNavigate();

    return(
        <>
        <StyledButtonContainer onClick={() => {navigate(`/${props.destiny}`)}}>
        {props.type === "tests" ? <GiMagnifyingGlass  size={22}/> : <GiLotus  size={22}/> }
        <p id="labelStyledButton">{props.label}</p>
        </StyledButtonContainer>
        </>
    )
}