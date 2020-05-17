import React from 'react';
import PropTypes from 'prop-types';

export const LikedPhotosView = ({user, photos = []}) => {
  if (!photos.length) {
    return null;
  }
  return (
      <div>
        <h4 className={'mb-4 text-center'}>
          Лайкнутые фотографии - {user.firstName} {user.lastName}
        </h4>
        <div className={'row'}>
          {photos.map(({url, id}) =>
              (<div key={id} className="col-6 col-sm-6 col-md-4 mb-4">
                <a href={`https://vk.com/id${user.id}?z=photo${user.id}_${id}`}>
                  <img src={url} alt={`photo`}
                       className={'w-100 rounded-lg shadow'}/>
                </a>
              </div>),
          )}
        </div>
      </div>
  );
};

LikedPhotosView.propTypes = {
  photos: PropTypes.array.isRequired,
  user: PropTypes.shape({}).isRequired,
};

export default LikedPhotosView;
