import React from "react";

import { Cube } from "../../components/Cube";
import { useNavigate } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";



const CubePage = () => {
  const navigate = useNavigate()
  return (
    <div style={{margin: "0 auto", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div onClick={() => navigate("/")} style={{cursor: "pointer", position: "fixed", left: "10px",}}>
    
    <h1  style={{ textDecoration: "underline", alignItems: "center", display: "flex"}}><CgArrowLeft/> Volte à Navegação!</h1>
    </div>
    <Cube/>
    </div>
  );
};

export default CubePage;
