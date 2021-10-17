import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Main/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path="/detalle/:legajo" component={Detalle}/> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;