import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";
import AnalysisService from "../../service/AnalysisService";
import ResultsView from "./ResultsView";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import {Redirect} from "react-router-dom";

class ResultsContainer extends Component {

    state = {
        isLoading: true,

    };

    componentDidMount() {
        AnalysisService.getAllResults()
            .then(results => {
                this.setState({
                    results: this.orderResultsByDateTimeDesc(results),
                    isLoading: false,
                });
            })
            .catch(err => {
                console.error(err);
            });
    };

    deleteResult = id => {
        // AnalysisService.delete
    }

    orderResultsByDateTimeDesc = results => {
        return results.sort((first, second) => {
            if (first.dateTime > second.dateTime) {
                return -1;
            }
            if (first.dateTime < second.dateTime) {
                return 1;

            }
            return 0;
        })
    }

    renderSpinner = () => {
        return (<div className="text-center lead absolute-center">
            <div className="m-auto">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        </div>)
    };

    render() {
        if (!LocalStorageUtils.getToken()) {
            return (<Redirect to={'/'}/>)
        }
        const {isLoading, results} = this.state;
        if (isLoading) {
            return this.renderSpinner();
        }
        console.log(results);
        return (
            <div>
                <ResultsView results={results} onDelete={this.deleteResult}/>
            </div>
        );
    }
}

export default ResultsContainer;