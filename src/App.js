import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogIn from './components/logIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyseContainer from './components/analyse/AnalyseContainer';
import ProgressContainer from './components/progress/ProgressContainer';
import ResultListContainer from './components/results/ResultListContainer';
import MainPageContainer from './components/mainPage/MainPageContainer';
import './App.css';
import {ExtendedResultContainer} from './components/extendedResult/ExtendedResultContainer.jsx';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainPageContainer}/>
          <Route path={'/results'} component={ResultListContainer}/>
          <Route path={'/logIn'} component={LogIn}/>
          <Route path={'/analyse'} component={AnalyseContainer}/>
          <Route path={'/progress'} component={ProgressContainer}/>
          <Route path={'/extendedResult/:resultId'}
                 component={ExtendedResultContainer}/>
        </Switch>
      </Router>
  );
}

export default App;
