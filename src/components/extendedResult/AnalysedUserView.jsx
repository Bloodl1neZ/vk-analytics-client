import React from 'react';
import PropTypes from 'prop-types';

export const AnalysedUserView = ({user, settings, dateTime}) => {
  return (
      <div>
        <h4 className='text-center mb-4'>Проанализированный пользователь</h4>
        <div className="row">
          <div className="col-3">
            <a href={`https://vk.com/id${user.id}`}>
              <img
                  src={user.photo}
                  alt={`${user.firstName} ${user.lastName}`}
                  className={'rounded-lg w-100'}/>
            </a>
          </div>
          <div className="col-9">
            <h5 className={'mb-2'}>
              <a href={`https://vk.com/id${user.id}`}>
                {user.firstName} {user.lastName}
              </a>
            </h5>
            <p className={'mb-1'}>Дата анализа: {new Date(
                dateTime).toLocaleDateString('ru')}</p>
            <p className={'mb-1'}>Настройки: количество фото
              - {settings.photosAmount}, количество постов
              - {settings.postsAmount}</p>
          </div>
        </div>
      </div>

  );
};

AnalysedUserView.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }).isRequired,
  settings: PropTypes.shape({}).isRequired,
  dateTime: PropTypes.string.isRequired,
};
