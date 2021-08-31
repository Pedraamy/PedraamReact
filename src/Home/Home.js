import '../App.css';
import Button from "../Components/Button.js";
import PedImg from '../Components/Images/PedImg.js';
import Glassprof from '../Components/Glassprof';
import Blogo from '../Components/Images/Blogo';
import Footer from "../Components/Footer.js";
import PR from "../Components/PedraamResume.pdf"

import {FaLinkedin, FaGithub, FaHandPaper} from "react-icons/fa";
import Homeheader from '../Components/Homeheader';
import "./Home.css";


function Home() {
  const openPDF = () => {
    window.open(PR,'_blank');
  }
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
        <Button buttonStyle="incur" onClick={openPDF}>Resume</Button>
      </div>
      <div className="home--logos">
        <Blogo />
        <a href="https://github.com/Pedraamy" target="_blank"><FaGithub className="gitty" /></a>
        <a href="https://www.linkedin.com/in/pedraam-nikzad-046302138/" target="_blank"><FaLinkedin className="linkdy"/></a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;