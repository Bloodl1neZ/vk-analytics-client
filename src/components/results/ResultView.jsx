import {isChartViewType, prepareLikedUsersForChart} from './utils';
import ChartContainer from '../chart/chartContainer';
import React from 'react';
import PropTypes from 'prop-types';
import {ResultUserListView} from './ResultUserListView.jsx';

export const ResultView = ({viewType, handleViewTypeChange, users, id}) => {

  const isChart = isChartViewType(viewType);
  if (!users.length) {
    return (<div>
      <p>Пользователь не проявлял активность в виле лайков :(</p>
    </div>);
  }

  const renderContent = () => {
    if (isChart) {
      return <ChartContainer
          id={id}
          data={prepareLikedUsersForChart(users.slice(0, 10))}
          type={viewType}/>;
    }
    return <ResultUserListView users={users} id={id}/>;
  };

  return (
      <div>
        <div className={'text-center mb-3'}>
          <a href={`/extendedResult/${id}`}>Посмотреть детальный результат</a>
        </div>
        {renderContent()}
      </div>
  );
};

ResultView.propTypes = {
  viewType: PropTypes.string.isRequired,
  handleViewTypeChange: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

