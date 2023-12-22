import { StyledButtonContainer } from "./style";
import { IoIosBook } from "react-icons/io";

export const StyledButtonBanner = (props ) => {

    const scrollToFirstElementWithClass = () => {
        const elements = document.getElementsByClassName(props.destinyClass);
        if (elements.length > 0) {
          elements[0].scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        <StyledButtonContainer onClick={scrollToFirstElementWithClass}>
        <IoIosBook size={22}/>
        <p id="labelStyledButton">{props.label}</p>
        </StyledButtonContainer>
        </>
    )
}