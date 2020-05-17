import React from 'react';
import {LikedUserContainer} from './LikedUserContainer';
import PropTypes from 'prop-types';
import SelectedUserContainer from '../results/SelectedUserContainer';

export const ExtendedResultLikedUsersContainer = ({likedUsers}) => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const renderLikedUsers = () =>
      likedUsers.map((user) =>
          <LikedUserContainer user={user} key={user.id}
                              makeUserActive={setSelectedUser}/>);
  if (!selectedUser) {
    return (
        <div>
          <h4 className={'text-center mb-4'}>Лайкнутые пользователи</h4>
          <div className={'row'}>
            {renderLikedUsers()}
          </div>
        </div>
    );
  }
  return <SelectedUserContainer cancel={() => setSelectedUser(null)}
                                user={selectedUser}/>;
};

ExtendedResultLikedUsersContainer.propTypes = {
  likedUsers: PropTypes.array.isRequired,
};

export default ExtendedResultLikedUsersContainer;
