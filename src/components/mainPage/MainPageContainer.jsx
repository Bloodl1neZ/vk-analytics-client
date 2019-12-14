import React, {Component} from 'react';
import MainPageView from "./MainPageView";
import {Redirect} from "react-router-dom";

class MainPageContainer extends Component {

    state = {
        toAnalyse: false,
    };

    redirectToAnalyse = () => {
        this.setState({toAnalyse: true})
    };

    render() {
        if (this.state.toAnalyse) {
            return (
                <Redirect to={'/analyse'}/>
            )
        }
        return (
            <MainPageView toAnalyse={this.redirectToAnalyse}/>
        )
    }
}

export default MainPageContainer;