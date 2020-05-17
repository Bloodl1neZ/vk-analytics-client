import React, {Component} from 'react';
import AnalysisService from '../../service/AnalysisService';
import ResultListView from './ResultListView';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import {Redirect} from 'react-router-dom';
import LoadingPageView from '../loading/LoadingPageView';

class ResultListContainer extends Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        AnalysisService.getAllResults()
            .then(results => {
                this.setState({
                  results: results.sort(this.compareResultsByDateTimeDesc),
                    isLoading: false,
                });
            })
            .catch(err => {
                console.error(err);
            });
    };

  compareResultsByDateTimeDesc = (first, second) => {
    if (first.dateTime > second.dateTime) {
      return -1;
    }
    if (first.dateTime < second.dateTime) {
      return 1;
    }
    return 0;
    }

    render() {
        if (!LocalStorageUtils.getToken()) {
            return (<Redirect to={'/'}/>)
        }
        const {isLoading, results} = this.state;
        if (isLoading) {
          return <LoadingPageView/>;
        }
        return (
            <div>
              <ResultListView results={results} onDelete={this.deleteResult}/>
            </div>
        );
    }
}

export default ResultListContainer;