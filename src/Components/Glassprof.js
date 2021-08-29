import React from "react";
import img1 from "./Images/peddyface.png";
import styled from "styled-components";

const MasterContainer = styled.div`
    background: #e5d7db;
`;

const Container = styled.div`
    display: flex;
    width: 600px;
    height: 600px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background: #027ACB;
    border-radius: 50%;
`;

const TextContainer = styled.div`
    display: flex;
    width: 300px;
    height: 200px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: -10%;
`

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: none;

`;

const Styledh1 = styled.h1`
    color: white;
`;

const Styledh2 = styled.h2`
    color: white;
    margin-top: -5%;
`;


const Glassprof = () => {
    return (
        <Container>
            <StyledImg src={img1} />
            <TextContainer>
                <Styledh1>Pedraam Nikzad</Styledh1>
                <Styledh2>CS + Bio @ UC Berkeley</Styledh2>
            </TextContainer>
        </Container>
    )
}

export default Glassprof;