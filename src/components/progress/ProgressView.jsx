import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";

class ProgressView extends Component {
    render() {
        const {progress} = this.props;
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                {progress != null && (<p>{progress} %</p>)}
            </div>

        );
    }
}

export default ProgressView;