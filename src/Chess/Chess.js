import '../App.css';
import { useEffect } from 'react';
import {useSpring, animated} from "react-spring";
import styled from "styled-components";
import Button from "../Components/Button.js";
import Footer from "../Components/Footer.js";
import ChessVid from "../Components/PortfoVids/chessviddemo.mp4";

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

function Chess() {
    useEffect(() => {
        document.querySelector('video').playbackRate = 1.5;
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
    })
  return (
    <div className="gitlet">
        <HeaderContainer>
            <animated.div style={spinIn}>
                <Button buttonStyle="home">Home</Button>
            </animated.div>
        </HeaderContainer>
        <animated.div style={fadiIn}>
            <HeaderText>Chess</HeaderText>
            <StyledP>Chess is my favorite game, so I wanted to try and recreate it using my Python skills. The Chess board is backed by a Python dictionary where each piece has a unique numerical representation. In the dictionary, the key is the square of the board and the value is the piece. The pieces are represented by objects whose methods dictate they way the can move. Every time a valid move is made, the dictionary is updated and PyGame redraws the entire board based on the current dictionary representation.<br/> You can either play against a friend locally or use the AI. The AI works by finding the evaluating each position based on certain conditions I gave it (like material balance, king safety, etc.) and then from that position finds the best move of the opponent (Minimax) and so on. Since it has to check every move, the runtime of my AI is [(2 *(# of valid moves))^depth]. I used alpha-beta pruning to improve the runtime a bit. Every time it finds a position where the best move valuation is already less than the current best move in its storage it will no longer go down that tree (prune it).</StyledP>
            <StyledL><StyledA href="https://github.com/Pedraamy/PyChess" target="_blank">&lt;Source Code&gt;</StyledA></StyledL>
        </animated.div>
        <animated.div style={sRt}>    
            <ContentBox className="content--box">
                <StyledVid width="700" height="465" autoPlay loop muted>
                    <source src={ChessVid} type="video/mp4" />
                </StyledVid>
                <Button buttonStyle="projb">Projects</Button>
            </ContentBox>
        </animated.div>
        <Footer />
    </div>
  );
}

export default Chess;