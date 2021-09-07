import '../App.css';
import './Projects.css';
import React, {useState} from 'react';
import Button from "../Components/Button.js";
import {useSpring, animated, useTransition} from "react-spring";
import useInterval from 'use-interval';
import { useHistory } from 'react-router-dom';
import img1 from "../Components/Images/pchess.png";
import img2 from "../Components/Images/pstars.png";
import img3 from "../Components/Images/pgitlet.png";
import Footer from "../Components/Footer.js";




function Projects() {
  const history = useHistory()
  const slides = [img1, img2, img3]
  const names = ["Chess (Python)", "World Generator (Java)", "Gitlet (Java)"]
  const addies = ["/chess", "/worldgenerator", "/gitlet"]
  const spinIn = useSpring({
    config: {duration: 300},
    from: {transform: "rotateZ(360deg)", opacity: "0"},
    to: {transform: "rotateZ(0deg)", opacity: "1"},
    delay: 500,
  });
  const fromRt = useSpring({
    config: {duration: 500},
    from: {transform: "translateX(600%)", opacity: "0"},
    to: {transform: "translateX(0)", opacity: "1"},
  });
  const fromLt = useSpring({
    config: {duration: 250},
    from: {transform: "translateX(-600%)", opacity: "0"},
    to: {transform: "translateX(0)", opacity: "1"},
  });
  const [index, set] = useState(0);
  const itemC = slides[index];
  const textC = names[index];
  const increment = () => set(state => (state+1) % slides.length);
  useInterval(increment, 3500);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "scale(0.8)"},
    enter: { opacity: 1, transform: "scale(1)"},
    config: {duration: 250}
  })

  const buttonL = () => set(state => state != 0 ? state-1 : slides.length-1);
  const buttonR = () => set(state => state != slides.length-1 ? state+1 : 0);

  const imageClick = () => {
    for (const s of document.getElementsByClassName("projects--curr")){
      s.classList.remove("projects--curr");
      s.classList.add("projects--curr--exit");
    }
    for (const s of document.getElementsByClassName("projects--header")){
        s.classList.remove("projects--header");
        s.classList.add("projects--header--exit");
    }
    for (const s of document.getElementsByClassName("button--left")){
        s.classList.remove("button--left");
        s.classList.add("button--exit");
    }
    for (const s of document.getElementsByClassName("button--right")){
        s.classList.remove("button--right");
        s.classList.add("button--exit");
    }
    for (const s of document.getElementsByClassName("footy")){
      s.classList.remove("footy");
      s.classList.add("footy--exit");
    }
    for (const s of document.getElementsByClassName("home")){
      s.classList.remove("home");
      s.classList.add("home--exit");
    }
    for (const s of document.getElementsByClassName("projects--container")){
      s.classList.remove("projects--container");
      s.classList.add("projects--container--exit");
    }

    const addy = addies[index]
    setTimeout(() => history.push(`${addy}`), 200)
  }

  const addHov = () => {
    for (const s of document.getElementsByClassName("projects--curr")){
      s.style.opacity = "0.85";
    }
  }

  const rmHov = () => {
    for (const s of document.getElementsByClassName("projects--curr")){
      s.style.opacity = "1";
    }
  }



  return (
    <div className="Projects">
      <div className="projects--top">
        <animated.div style={spinIn}>
          <Button buttonStyle="home">Home</Button>
        </animated.div>
      </div>
      {transitions((style) =>
      <animated.h1 className="projects--header" style={style}>{textC}</animated.h1>)}
      <div className="mid--box">
        <animated.div className="button--left" style={fromLt}><Button buttonStyle="incur" onClick={buttonL}>&lt;</Button></animated.div>
        <button className="projects--container" onClick={imageClick}>
          {transitions((style) => 
          <animated.img className="projects--curr" src={itemC} style={style} onMouseEnter={addHov} onMouseLeave={rmHov} alt="pic" />)}
        </button>
        <animated.div className="button--right" style={fromRt}><Button buttonStyle="incur" onClick={buttonR}>&gt;</Button></animated.div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;