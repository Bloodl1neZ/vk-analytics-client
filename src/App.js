import React from 'react';
import './App.css';
import MainPage from "./components/mainPage";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Results from "./components/results";
import LogIn from "./components/logIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyseContainer from "./components/analyse/AnalyseContainer";
import ProgressContainer from "./components/progress/ProgressContainer";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route path={'/results'} component={Results}/>
                <Route path={'/logIn'} component={LogIn}/>
                <Route path={'/analyse'} component={AnalyseContainer}/>
                <Route path={'/progress'} component={ProgressContainer}/>
            </Switch>
        </Router>
    )
}

export default App;
