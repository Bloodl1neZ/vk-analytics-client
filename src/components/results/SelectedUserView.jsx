import React from 'react';
import PropTypes from 'prop-types';
import {Button, Spinner} from 'react-bootstrap';
import LikedPhotosView from './LikedPhotosView';
import {LikedPostsView} from './LikedPostsView';

export const SelectedUserView = ({user, posts, photos, isLoading, back}) => {
  if (isLoading) {
    return <div className="text-center">
      <Spinner animation="border" role="status"/>
    </div>;
  }
  return (
      <div>
        <div className={'mb-4'}>
          <Button size={'sm'} onClick={back}>
            &#8592; Назад ко всем пользователям
          </Button>
        </div>
        <div>
          <LikedPhotosView
              photos={photos}
              user={user}
          />
          <LikedPostsView
              posts={posts}
              user={user}
          />
        </div>
      </div>
  );
};

SelectedUserView.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string,
    likedPhotos: PropTypes.array.isRequired,
    likedPosts: PropTypes.array.isRequired,
  }).isRequired,
  posts: PropTypes.array,
  photos: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  back: PropTypes.func.isRequired,
};

