import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export const FixedButtons = () => {
    const navigate = useNavigate();

    return(
        <div style={{width: "100%", position: "relative"}}>
        <div onClick={() => navigate("/FAQ")} style={{position: "fixed", bottom: 0, left: 0}} ><FaQuestionCircle size={22}/></div>
        <div onClick={() => navigate("/blog")}  style={{position: "fixed", bottom: 0, right: 15}}><FaWhatsapp size={22} /></div>
        </div>
    )
}