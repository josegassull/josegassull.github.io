import {HashRouter as Router, Route, Link} from "react-router-dom";
import Home from "./components/Main/Home";

function App() {
    return (
        <Router basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <Route exact path="/josegassull.github.io" component={Home} />
        </div>
      </Router>
    );
}

export default App;