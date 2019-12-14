import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import LogIn from "./components/logIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyseContainer from "./components/analyse/AnalyseContainer";
import ProgressContainer from "./components/progress/ProgressContainer";
import ResultsContainer from "./components/results/ResultsContainer";
import MainPageContainer from "./components/mainPage/MainPageContainer";
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={MainPageContainer}/>
                <Route path={'/results'} component={ResultsContainer}/>
                <Route path={'/logIn'} component={LogIn}/>
                <Route path={'/analyse'} component={AnalyseContainer}/>
                <Route path={'/progress'} component={ProgressContainer}/>
            </Switch>
        </Router>
    )
}

export default App;
