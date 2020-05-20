import React, {Component} from 'react';
import {Spinner} from 'react-bootstrap';
import Header from '../header/Header';

class ProgressView extends Component {
  render() {
    const {progress} = this.props;
    return (
        <>
          <Header progress={false}/>
          <div className="text-center absolute-center">
            <div className="m-auto">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
            <div><p>{progress == null ? 0 : progress} %</p></div>
          </div>
        </>
    );
  }
}

export default ProgressView;
