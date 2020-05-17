import {ResultView} from './ResultView.jsx';
import {VIEW_TYPES} from '../chart/utils';
import React from 'react';
import PropTypes from 'prop-types';

export const ResultContainer = ({users, id}) => {
  const [viewType, setViewType] = React.useState(VIEW_TYPES.HORIZONTAL_BAR);
  return <ResultView
      viewType={viewType}
      handleViewTypeChange={setViewType}
      users={users}
      id={id}/>;
};

ResultContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  index: PropTypes.number.isRequired,
};

export default ResultContainer;
