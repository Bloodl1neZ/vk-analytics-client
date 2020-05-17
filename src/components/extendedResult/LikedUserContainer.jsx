import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

export const LikedUserContainer = ({user, makeUserActive}) => {
  return (
      <div className={'col-12 col-sm-6 col-md-6 col-lg-4 mb-3'}>
        <div className="row">
          <div className="col-4">
            <a href={`https://vk.com/id${user.id}`}>
              <img src={user.photo} alt={user.firstName}
                   className={'rounded-lg w-100'}/>
            </a>
          </div>
          <div className="col-8">
            <h6 className={'mb-1'}>
              <a href={`https://vk.com/id${user.id}`}>{user.firstName} {user.lastName}</a>
            </h6>
            <p className={'mb-2 '}>
              {user.likedPhotos.length + user.likedPosts.length} &#x2764;
            </p>
            <Button onClick={() => makeUserActive(user)} variant={'primary'}
                    size={'sm'}>
              Подробнее
            </Button>
          </div>
        </div>
      </div>
  );
};

LikedUserContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    likedPhotos: PropTypes.array.isRequired,
    likedPosts: PropTypes.array.isRequired,
  }).isRequired,
};
