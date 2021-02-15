import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./component/page/Home";
import About from "./component/page/About";
import Contact from "./component/page/Contact";
import Navbar from "./component/layout/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./component/page/NotFound";
import AddCar from "./component/cars/AddCar";
import EditCar from "./component/cars/EditCar";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboute" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/cars/add" component={AddCar}/>
                    <Route exact path="/cars/edit/:id" component={EditCar}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
