import React, {Component} from 'react';
import AnalysisService from "../../service/AnalysisService";
import {Redirect} from "react-router-dom";
import ProgressView from "./ProgressView";

class ProgressContainer extends Component {
    state = {
        error: false,
    };

    componentDidMount() {
        AnalysisService.getCurrentProgress()
            .then(({id, resultId, progress}) => {
                this.setState({
                    id,
                    resultId,
                    progress,
                });
                setInterval(() => this.updateProgress(id), 2000)
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    error: true
                })
            })
    }

    updateProgress = (id) => {
        AnalysisService.getProgressById(id)
            .then(({id, resultId, progress}) => {
                this.setState({
                    id,
                    resultId,
                    progress,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    error: true
                })
            })

    };

    render() {
        const {progress, error, resultId} = this.state;
        if (error) {
            return (
                <Redirect to={'/'}/>
            );
        }
        if (resultId) {
            return (
                <Redirect to={'/results'}/>
            )
        }
        return (
            <ProgressView progress={progress}/>
        )
    }
}

export default ProgressContainer;