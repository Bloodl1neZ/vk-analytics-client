import React, {Component} from 'react';
import AnalysisService from "../service/AnalysisService";

class Results extends Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        AnalysisService.getAllResults()
            .then(results => {
                this.setState({isLoading: false});
            })
            .catch(err => {
                console.error(err);
                this.setState({isError: true, isLoading: false})
            });
    }

    render() {
        const {isLoading, results, isError} = this.state;
        if (isError) {
            return (<div>
                error
            </div>);
        }
        if (isLoading) {
            return (<div>
                loading
            </div>);
        }
        // if (results.length === 0) {
        //     return (
        //         <div>
        //             no results
        //         </div>
        //     )
        // }
        return (
            <div>
                {results}
            </div>
        );
    };
}

export default Results;