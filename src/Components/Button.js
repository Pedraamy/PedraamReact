import React from "react";
import { useHistory } from 'react-router-dom';

const bStyles = ["home", "aboutme", "projects", "resume"];

  


const Button = ({children, type, buttonStyle}) => {
    const currS = bStyles.includes(buttonStyle) ? buttonStyle : bStyles[0];
    const history = useHistory();
    const toRoute = currS === "home" ? "" : currS; 
    function expand() {
        for (const s of document.getElementsByClassName(`${currS}`)){
            s.style.color = "white";
            s.style.border = "0.5px solid #027ACB"
            s.style.borderRadius = "4%"
            s.style.position = "fixed"
            s.style.margin = "auto"
            s.style.transform = "scale(5.88, 11)";
            s.style.zIndex = "1000";
        }
        for (const s of document.getElementsByClassName("peddy")){
            s.style.opacity = "0";
        }
        for (const s of document.getElementsByClassName("footy")){
            s.classList.remove("footy");
            s.classList.add("footy--exit");
        }
        for (const s of document.getElementsByClassName("header--text")){
            s.classList.remove("header--text");
            s.classList.add("header--text--exit");
        }
        for (const s of document.getElementsByClassName("b--logo")){
            s.classList.remove("b--logo");
            s.classList.add("b--logo--exit");
        }
        for (const s of document.getElementsByClassName("gitty")){
            s.classList.remove("gitty");
            s.classList.add("gitty--exit");
        }
        for (const s of document.getElementsByClassName("linkdy")){
            s.classList.remove("linkdy");
            s.classList.add("linkdy--exit");
        }

        setTimeout(() => history.push(`/${toRoute}`), 400);
        
    }
    return (
        <button className= {`btn ${currS}`} onClick={expand} type={type}>
            {children}
        </button>
    )
}

export default Button;