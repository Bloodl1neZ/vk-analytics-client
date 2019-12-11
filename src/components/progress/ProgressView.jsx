import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

class ProgressView extends Component {
  render() {
    const { progress } = this.props;
    return (
      <div className="text-center lead absolute-center">
        <div className="m-auto">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
        <div>{progress != null && <p>{progress} %</p>}</div>
      </div>
    );
  }
}

export default ProgressView;
