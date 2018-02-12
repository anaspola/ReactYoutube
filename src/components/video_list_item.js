import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="thumbnail" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
