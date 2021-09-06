import '../App.css';
import { useEffect } from 'react';
import {useSpring, animated} from "react-spring";
import styled from "styled-components"
import Button from "../Components/Button.js";
import PedImg from '../Components/Images/PedImg.js';
import Glassprof from '../Components/Glassprof';
import Blogo from '../Components/Images/Blogo';
import Footer from "../Components/Footer.js";
import PR from "../Components/PedraamResume.pdf"

import GitletVid from "../Components/PortfoVids/demovidgitlet.mp4"

import {FaLinkedin, FaGithub, FaHandPaper} from "react-icons/fa";
import Homeheader from '../Components/Homeheader';
import { colorToRgba } from '@react-spring/shared';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 1%;
    margin-left: 1%;
`;

const HeaderText = styled.h1`
    margin-top: -2%;
    font-size: 35px;
    color: var(--blue);
    display: flex;
    justify-content: center;
`;

const StyledP = styled.p`
    margin-top: -1%;
    color: var(--blue);
    font-size: 19px;
    display: flex;
    justify-content: center;
    margin-left: 3%;
    margin-right: 3%;
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

function Gitlet() {
    useEffect(() => {
        document.querySelector('video').playbackRate = 2.0;
      });
    const spinIn = useSpring({
        config: {duration: 300},
        from: {transform: "rotateZ(360deg)", opacity: "0"},
        to: {transform: "rotateZ(0deg)", opacity: "1"},
        delay: 400,
    });
    const fadiIn = useSpring({
        config: {duration: 800},
        from: {opacity: "0"},
        to: {opacity: "1"},
    });
    const slideFrRt = useSpring({
        config: {duration: 300},
        from: {transform: "translateX(-500%)", opacity: "0"},
        to: {transform: "translateX(0)", opacity: "1"},
    });
  return (
    <div className="gitlet">
        <HeaderContainer>
            <animated.div style={spinIn}>
                <Button buttonStyle="home">Home</Button>
            </animated.div>
        </HeaderContainer>
        <animated.div style={fadiIn}><HeaderText>Gitlet</HeaderText></animated.div>
        <animated.div style={fadiIn}><StyledP>Gitlet is essentially a mimicked Git, written in Java. The key to creating a fast and memory efficient version control system is hashing. Similarly to Git, Gitlet stores each file in a master directory under the filename that is simply it’s contents hashed. Gitlet’s main purposes are saving contents of entire directories as snapshots in time (commits), ability to restore one or more files of entire commits (checkout), viewing history of all commits (log), tracking related sequences of commits in different branches, and merging changes from two branches into a single one. Gitlet also uses Dijkstra’s algorithm to track back through commits in order to find the latest common ancestor of two branches.</StyledP></animated.div>
        <animated.div style={slideFrRt}>
            <ContentBox>
                <StyledVid width="850" height="525" autoPlay loop muted>
                    <source src={GitletVid} type="video/mp4" />
                </StyledVid>
                <h2>Full Code on GitHub</h2>
                <animated.div className="gbutton" style={spinIn}>
                    <Button buttonStyle="projects">Projects</Button>
                </animated.div>
            </ContentBox>
        </animated.div>
        <Footer />
    </div>
  );
}

export default Gitlet;