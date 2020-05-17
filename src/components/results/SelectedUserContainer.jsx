import React from 'react';
import PropTypes from 'prop-types';
import VkUserService from '../../service/vk/VkUserService';
import {SelectedUserView} from './SelectedUserView';

export const SelectedUserContainer = ({user, cancel}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [photos, setPhotos] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const photoIds = user.likedPhotos.map(({photoId}) => photoId);
    VkUserService.getUserPhotosByIds(user.id, photoIds).
        then((res) =>
            res?.items?.map(({id, sizes}) => ({
              id,
              url: sizes?.find((size) => size.type === 'x')?.url,
            }))).
        then(setPhotos).
        then(() => VkUserService.getPosts(user.likedPosts)).
        then((res) => {
          setPosts(res);
        }).
        then(() => setIsLoading(false));
  }, [user]);
  return (
      <SelectedUserView
          isLoading={isLoading}
          posts={posts}
          photos={photos}
          back={cancel}
          user={user}/>
  );
};

SelectedUserContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string,
    likedPhotos: PropTypes.array.isRequired,
    likedPosts: PropTypes.array.isRequired,
  }).isRequired,
  cancel: PropTypes.func.isRequired,
};

export default SelectedUserContainer;
