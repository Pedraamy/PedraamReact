import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home.js"
import Aboutme from './Aboutme/Aboutme.js';


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
          </Switch>
        </div>

      </Router>
  );
}

export default App;
