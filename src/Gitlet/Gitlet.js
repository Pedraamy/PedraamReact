import '../App.css';
import { useEffect } from 'react';
import {useSpring, animated} from "react-spring";
import styled from "styled-components";
import Button from "../Components/Button.js";
import Footer from "../Components/Footer.js";
import GitletVid from "../Components/PortfoVids/demovidgitlet.mp4";

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
    font-family: Arial, Helvetica, sans-serif;
    margin-top: -1%;
    color: var(--blue);
    font-size: 17px;
    display: flex;
    justify-content: center;
    margin-left: 3%;
    margin-right: 3%;
`;

const StyledL = styled.h2`
    display: flex;
    color: var(--blue);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    justify-content: center;
    transition: all 0.3s ease-in-out;
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

function Gitlet() {
    useEffect(() => {
        document.querySelector('video').playbackRate = 2.0;
      });
    const spinIn = useSpring({
        config: {duration: 300},
        from: {transform: "rotateZ(360deg)", opacity: "0"},
        to: {transform: "rotateZ(0deg)", opacity: "1"},
        delay: 500,
    });
    const fadiIn = useSpring({
        config: {duration: 600},
        from: {opacity: "0"},
        to: {opacity: "1"},
        delay: 400,
    });
    const sRt = useSpring({
        config: {duration: 500},
        from: {transform: "translateX(-300%)", opacity: "0"},
        to: {transform: "translateX(0)", opacity: "1"}
    });
  return (
    <div className="gitlet">
        <HeaderContainer>
            <animated.div style={spinIn}>
                <Button buttonStyle="home">Home</Button>
            </animated.div>
        </HeaderContainer>
        <animated.div style={fadiIn}>
            <HeaderText>Gitlet</HeaderText>
            <StyledP>Gitlet is essentially a mimicked Git, written in Java. The key to creating a fast and memory efficient version control system is hashing. Similarly to Git, Gitlet stores each file in a master directory under the filename that is simply it’s contents hashed. Gitlet’s main purposes are saving contents of entire directories as snapshots in time (commits), ability to restore one or more files of entire commits (checkout), viewing history of all commits (log), tracking related sequences of commits in different branches, and merging changes from two branches into a single one. Gitlet also uses Dijkstra’s algorithm to track back through commits in order to find the latest common ancestor of two branches.</StyledP>
            <StyledL><StyledA href="https://github.com/Berkeley-CS61B-Student/su21-p205/tree/master/proj2" target="_blank">&lt;Source Code&gt;</StyledA></StyledL>
        </animated.div>
        <animated.div style={sRt}>
            <ContentBox className="content--box">
                <StyledVid width="850" height="525" autoPlay loop muted>
                    <source src={GitletVid} type="video/mp4" />
                </StyledVid>
                <Button buttonStyle="projb">Projects</Button>
            </ContentBox>
        </animated.div>
        <Footer />
    </div>
  );
}

export default Gitlet;