import React from "react";
import img1 from "./peddy.jpeg"


const PedImg = () => {
    function hiIn(){
        const s = document.getElementById("ped--hand");
        s.style.opacity = 1;
    }
    function hiOut(){
        const s = document.getElementById("ped--hand");
        s.style.opacity = 0;
    }
    return (
        <img className="peddy" src={img1} alt="pic" onMouseEnter={hiIn} onMouseLeave={hiOut}/>
    )
}

export default PedImg;