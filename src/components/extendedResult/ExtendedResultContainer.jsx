import React from 'react';
import PropTypes from 'prop-types';
import AnalysisService from '../../service/AnalysisService';
import {compareLikedUsersDesc} from '../results/utils';
import {Redirect} from 'react-router-dom';
import LoadingPageView from '../loading/LoadingPageView';
import VkUserService from '../../service/vk/VkUserService';
import ExtendedResultView from './ExtendedResultView';

export const ExtendedResultContainer = ({match}) => {
  const [dateTime, setDateTime] = React.useState(null);
  const [settings, setSettings] = React.useState(null);
  const [likedUsers, setLikedUsers] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [isError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    AnalysisService.getAllResults().
        then((results) =>
            results.find((result) => result.id === match.params.resultId)).
        then(({dateTime, likedUsers, settings, user}) => {
          likedUsers.sort(compareLikedUsersDesc);
          setSettings(settings.friendsSettings);
          setUser(user);
          setDateTime(dateTime);
          return loadPhotosForLikedUsers(likedUsers);
        }).
        then((likedUsers) => {
          setLikedUsers(likedUsers);
          setLoading(false);
        }).
        catch((err) => {
          console.error(err);
          setError(true);
          setLoading(false);
        });
  }, []);

  React.useEffect(() => {
    if (user && !user.photo) {
      VkUserService.getUserById(user.id).then(({
                                                 id,
                                                 first_name: firstName,
                                                 last_name: lastName,
                                                 photo_400: photo,
                                               }) =>
          setUser({id, firstName, lastName, photo}));
    }
  }, [user]);

  const loadPhotosForLikedUsers = (likedUsers) => {
    const userIds = likedUsers.map((user) => user.user.id);
    return VkUserService.getUsersByIds(userIds).then((users) =>
        users.map((
            {
              id,
              first_name: firstName,
              last_name: lastName,
              photo_400: photo,
            }) => ({
              id,
              firstName,
              lastName,
              photo,
              likedPhotos: likedUsers.find(
                  (likedUser) => likedUser.user.id === id).likedPhotos,
              likedPosts: likedUsers.find(
                  (likedUser) => likedUser.user.id === id).likedPosts,
            }),
        ));
  };

  if (isError) {
    return <Redirect to={'/'}/>;
  }
  if (isLoading) {
    return <LoadingPageView/>;
  }
  return (
      <ExtendedResultView
          likedUsers={likedUsers}
          user={user}
          settings={settings}
          dateTime={dateTime}/>
  );
};

ExtendedResultContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      resultId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
