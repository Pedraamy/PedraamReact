import '../App.css';
import Button from "../Components/Button.js";
import Glassprof from '../Components/Glassprof';
import Blogo from '../Components/Images/Blogo';
import Footer from "../Components/Footer.js";
import PR from "../Components/PedraamResume.pdf";

import {FaLinkedin, FaGithub} from "react-icons/fa";
import Homeheader from '../Components/Homeheader';
import "./Home.css";


function Home() {
  const openPDF = () => {
    window.open(PR,'_blank');
  }
  return (
    <div className="home">
      <div className="home--header">
        <div className="glassy">
          <Glassprof />
        </div>
        <div className="header--items">
          <Homeheader />
        </div>
      </div>
      <div className="buttons">
        <Button buttonStyle="aboutme">About Me</Button>
        <Button buttonStyle="projects">Projects</Button>
        <Button buttonStyle="resume" onClick={openPDF}>Resume</Button>
      </div>
      <div className="home--logos">
        <Blogo />
        <a href="https://github.com/Pedraamy" target="_blank"><FaGithub className="gitty" /></a>
        <a href="https://www.linkedin.com/in/pedraam/" target="_blank"><FaLinkedin className="linkdy"/></a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;