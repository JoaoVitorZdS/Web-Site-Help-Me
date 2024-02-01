import { useNavigate } from "react-router-dom";
import { StyledButtonContainer } from "./style";
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ButtonSeeMore from "./SeeMoreAnimatedButton";
import { FaArrowRightToCity } from "react-icons/fa6";

export const StyledButtonLogIn = (props ) => {
    const navigate = useNavigate();
    
    return(
        <>
        <ButtonSeeMore destiny={props.destiny} text={props.label} icon={props.icon}>
        <p id="labelStyledButton">{props.label}</p>
        </ButtonSeeMore>
        </>
    )
}