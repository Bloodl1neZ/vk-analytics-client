import React from 'react';
import {LikedPostView} from '../extendedResult/LikedPostView';

export const LikedPostsView = ({user, posts = []}) => {
  if (!posts.length) {
    return null;
  }
  return (
      <div className={'mt-4 mb-4'}>
        <h4 className={'mb-4 text-center'}>
          Лайкнутые посты - {user.firstName} {user.lastName}
        </h4>
        <div className={'row'}>
          {posts.map((post) => <LikedPostView post={post}/>)}
        </div>
      </div>
  );
};

LikedPostsView.propTypes = {};
