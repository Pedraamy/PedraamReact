import '../App.css';
import './Aboutme.css';
import Button from "../Components/Button.js";
import {useSpring, animated} from "react-spring";
import Footer from "../Components/Footer.js"
import AboutmeText from '../Components/AboutmeText';
import PeddyBerk from '../Components/Images/PeddyBerk';


function Aboutme() {
  const slideRight = useSpring({
    from: {transform: "translateX(1800px)"},
    to: {transform: "translateX(0)"},
    config: {duration: 400}
  })
  const spinIn = useSpring({
    config: {duration: 300},
    from: {transform: "rotateZ(360deg)", opacity: "0"},
    to: {transform: "rotateZ(0deg)", opacity: "1"},
    delay: 800
  })
  const fadiIn = useSpring({
    config: {duration: 700},
    from: {opacity: "0"},
    to: {opacity: "1"},
    delay: 600,
  })
  return (
    <div className="Aboutme">
      <div className="aboutme--top">
        <animated.div style={spinIn}>
          <Button buttonStyle="home">Home</Button>
        </animated.div>
      </div>
      <h1 className="aboutme--header">About Me</h1>
      <div className="parent--container">
        <PeddyBerk />
        <animated.div style={fadiIn}>
          <AboutmeText />
        </animated.div>
      </div>
      <animated.div style={fadiIn} className="footer--aboutme">
        <Footer />
      </animated.div>
    </div>
  );
}

export default Aboutme;