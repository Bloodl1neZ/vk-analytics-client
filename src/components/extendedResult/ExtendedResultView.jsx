import React from 'react';
import Header from '../header/Header';
import PropTypes from 'prop-types';
import {AnalysedUserView} from './AnalysedUserView';
import ExtendedResultLikedUsersContainer
  from './ExtendedResultLikedUsersContainer';

export const ExtendedResultView = ({likedUsers, dateTime, settings, user}) => {
  return (
      <div>
        <Header progress={true}/>
        <div className={'container'}>
          <div className={'mb-5 mt-4'}>
            <AnalysedUserView
                user={user}
                dateTime={dateTime}
                settings={settings}/>
          </div>
          <ExtendedResultLikedUsersContainer likedUsers={likedUsers}/>
        </div>
      </div>
  );
};

ExtendedResultView.propTypes = {
  likedUsers: PropTypes.array.isRequired,
  dateTime: PropTypes.string.isRequired,
};

export default ExtendedResultView;
