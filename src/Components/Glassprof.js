import React from "react";
import img1 from "./Images/peddyface.png";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const MasterContainer = styled(animated.div)`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 1em;
    border-radius: 10%;
    justify-content: center;
    align-items: center;
    background: #c7d2fe66;
    backdrop-filter: blur(45px);
    background-clip: border-box;
    cursor: pointer;

`;

const ImgContainer = styled.div`
    display: flex;
    width: 210px;
    height: 210px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #027ACB;
    border-radius: 50%;
    border: 3px solid white;
`;

const TextContainer = styled.div`
    display: flex;
    width: 300px;
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledImg = styled.img`
    width: 110px;
    height: auto;
    border: none;

`;

const Styledh2 = styled.h2`
    color: var(--blue);
`;

const Styledh3 = styled.h3`
    color: var(--blue);
    margin-top: -5%;
`;

const calc = (x, y) => {
    var rect = document.getElementById("glassed")
    return [-(y - rect.offsetHeight / 2)/5, (x - rect.offsetWidth / 2)/5, 1.1]
}
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



const Glassprof = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 50 } }))
    

    return (
        <MasterContainer id="glassed"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y)})}
        onMouseLeave={() => set({xys: [0, 0, 1]})}
        style={{ transform: props.xys.to(trans)}}>
            <ImgContainer>
                <StyledImg src={img1} />
            </ImgContainer>
            <Styledh2>Pedraam Nikzad</Styledh2>
            <Styledh3>CS + Bio @ UC Berkeley</Styledh3>
        </MasterContainer>
    )
}

export default Glassprof;