import '../App.css';
import Button from "../Components/Button.js";
import PedImg from '../Components/Images/PedImg.js';
import Blogo from '../Components/Images/Blogo';
import Footer from "../Components/Footer.js";

import {FaLinkedin, FaGithub, FaHandPaper} from "react-icons/fa";
import Homeheader from '../Components/Homeheader';
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <div className="home--header">
        <PedImg />
        <div className="header--items">
          <FaHandPaper id="ped--hand" className="header--hand"/>
          <Homeheader />
        </div>
      </div>
      <div className="buttons">
        <Button buttonStyle="aboutme">About Me</Button>
        <Button buttonStyle="projects">Projects</Button>
        <Button buttonStyle="resume">Resume</Button>
      </div>
      <div className="home--logos">
        <Blogo />
        <FaGithub className="gitty"/>
        <FaLinkedin className="linkdy"/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;