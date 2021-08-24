import '../App.css';
import './Aboutme.css';
import Button from "../Components/Button.js";
import PedImg from '../Components/Images/PedImg.js';
import Footer from "../Components/Footer.js"
import AboutmeText from '../Components/AboutmeText';
import PeddyBerk from '../Components/Images/PeddyBerk';


function Aboutme() {
  return (
    <div className="Aboutme">
      <div className="aboutme--top">
        <Button buttonStyle="home">Home</Button>
      </div>
      <h1 className="aboutme--header">About Me</h1>
      <div className="parent--container">
        <PeddyBerk />
        <AboutmeText />
      </div>
      <div className="footer--aboutme">
        <Footer />
      </div>
    </div>
  );
}

export default Aboutme;