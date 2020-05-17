import React from 'react';

export const LikedPostView = ({post}) => {
  const {text, date: seconds, attachments, owner_id, id} = post;
  const date = new Date(seconds * 1000);
  const dateStr = date.toLocaleDateString('ru');
  const photo = attachments?.find((attachment) => attachment.type === 'photo')?.
      photo?.
      sizes?.
      find(({type}) => type === 'x')?.url;
  const audio = attachments?.find(
      (attachment) => attachment.type === 'audio')?.audio;
  const renderImage = () => {
    if (photo) {
      return (
          <div className={'mb-3'}>
            <img src={photo} className={'w-100 rounded-lg'}/>
          </div>);
    }
  };
  const renderAudio = () => {
    if (audio) {
      const {artist, title} = audio;
      return (
          <div>
            <p>&#127925; {artist} - {title}</p>
          </div>
      );
    }
  };

  return (
      <div className={'col-6 p-3'}>
        <a href={`https://vk.com/id${owner_id}?w=wall${owner_id}_${id}`}
           className={'text-decoration-none text-dark'}>
          <div className="shadow p-3 rounded">
            <p>{dateStr}</p>
            {text && <p>{text}</p>}
            {renderImage()}
            {renderAudio()}
          </div>
        </a>
      </div>
  );
};

LikedPostView.propTypes = {};
