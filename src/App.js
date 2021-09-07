import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home.js"
import Aboutme from './Aboutme/Aboutme.js';
import Projects from './Projects/Projects';
import Gitlet from "./Gitlet/Gitlet";
import Chess from "./Chess/Chess";
import Worldgenerator from "./Worldgenerator/Worldgenerator";


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutme">
              <Aboutme />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/gitlet">
              <Gitlet />
            </Route>
            <Route path="/chess">
              <Chess />
            </Route>
            <Route path="/worldgenerator">
              <Worldgenerator />
            </Route>
          </Switch>
        </div>

      </Router>
  );
}

export default App;
