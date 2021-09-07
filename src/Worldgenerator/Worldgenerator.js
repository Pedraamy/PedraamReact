import '../App.css';
import { useEffect } from 'react';
import {useSpring, animated} from "react-spring";
import styled from "styled-components";
import Button from "../Components/Button.js";
import Footer from "../Components/Footer.js";
import GenVid from "../Components/PortfoVids/worldsdemovid.mp4";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 1%;
    margin-left: 1%;
`;

const HeaderText = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -2%;
    font-size: 35px;
    color: var(--blue);
    display: flex;
    justify-content: center;
`;

const StyledP = styled.p`
    margin-top: -1%;
    color: var(--blue);
    font-size: 17px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    margin-left: 3%;
    margin-right: 3%;
`;

const StyledL = styled.h2`
    display: flex;
    color: var(--blue);
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    font-size: 20px;
    margin-top: -0.5%;

`;

const StyledA = styled.a`
    text-decoration: none;
    color: var(--blue);
    transition: all 0.3s ease-in-out;
    &:hover {
        color: var(--darkblue);

    }
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const StyledVid = styled.video`
    border: 5px solid var(--blue);
    border-radius: 9%;
`;

function Worldgenerator() {
    useEffect(() => {
        document.querySelector('video').playbackRate = 1.5;
      });
    const spinIn = useSpring({
        config: {duration: 300},
        from: {transform: "rotateZ(360deg)", opacity: "0"},
        to: {transform: "rotateZ(0deg)", opacity: "1"},
        delay: 400,
    });
  return (
    <div className="gitlet">
        <HeaderContainer>
            <animated.div style={spinIn}>
                <Button buttonStyle="home">Home</Button>
            </animated.div>
        </HeaderContainer>
        <HeaderText>World Generator</HeaderText>
        <StyledP>I created a world generator and then turned it into a game, aptly named "Star Worlds", where you race versus the AI to collect the most stars. The worlds are generated psuedorandomly from a seed (number) the user can manually input. Psuedorandomly is a fancy way of saying it deterministicly generates random worlds, meaning no matter how many times I enter 55 it will generate the same world each time. However, each unique seed should theoretically generate a different world.<br/>To generate the worlds, first I generate a random number of rooms with a random height and width. Then I generate a random number of hallways initialized at a room wall using DFS until it hits another room. Finally, I place all the items and characters on random squares within the confines of the rooms and hallways.<br/>You can move your character with “WASD” and throw balls in any direction with “IJKL” which will capture a star on collision. The balls only have the power to go over 3 walls, after which they perish. There are portals which only the enemy has access to as a way to compensate for your ball throwing ability. The enemy uses the A* algorithm to find the nearest star and even factors portals into its heuristic. The game also has the ability to save progress and replay last saved game from video.</StyledP>
        <StyledL><StyledA href="https://github.com/Pedraamy/Star-Worlds" target="_blank">&lt;Source Code&gt;</StyledA></StyledL>
        <ContentBox className="content--box">
            <StyledVid width="700" height="445" autoPlay loop muted>
                <source src={GenVid} type="video/mp4" />
            </StyledVid>
            <animated.div style={spinIn}>
                <Button buttonStyle="projb">Projects</Button>
            </animated.div>
        </ContentBox>
        <Footer />
    </div>
  );
}

export default Worldgenerator;