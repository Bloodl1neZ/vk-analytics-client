import React from 'react';
import PropTypes from 'prop-types';

export const ResultUserListView = ({users, id}) => {
  return users.map(({user, likedPhotos, likedPosts}) => {
    const total = likedPosts.length + likedPhotos.length;
    const extendLink = `/extendedResult/${id}/${user.id}`;
    return (
        <div key={user.id}>
          <a href={extendLink}>
            {user.firstName} {user.lastName}: {total} <span
              className={'text-danger'}>&#9829;</span>
          </a>
        </div>
    );
  });
};

ResultUserListView.propTypes = {
  users: PropTypes.array.isRequired,
};
