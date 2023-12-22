import { useNavigate } from "react-router-dom";
import { StyledButtonContainer } from "./style";
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export const StyledButtonLogIn = (props ) => {
    const navigate = useNavigate();

    return(
        <>
        <StyledButtonContainer onClick={() => {navigate(`/${props.destiny}`)}}>
        {props.destiny === "login" ? <IoMdLogIn size={22}/> : <CgProfile size={22}/> }
        <p id="labelStyledButton">{props.label}</p>
        </StyledButtonContainer>
        </>
    )
}