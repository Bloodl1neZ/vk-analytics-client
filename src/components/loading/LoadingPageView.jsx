import React from 'react';
import {Spinner} from 'react-bootstrap';

export const LoadingPageView = () => {
  return (<div className="text-center lead absolute-center">
    <div className="m-auto">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  </div>);
};

LoadingPageView.propTypes = {};

export default LoadingPageView;
