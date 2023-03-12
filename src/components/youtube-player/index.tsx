import React from "react";
import ReactPlayer from 'react-player'

export const YoutubePlayer: React.FC<IYoutubePlayer> = ({ videoKey }) => (<ReactPlayer 
    className="video-player" 
    url={`https://www.youtube.com/watch?v=${videoKey}`} 
    controls={true}
    playing={true}
    data-testid="youtube-player"
  />);

  interface IYoutubePlayer {
    videoKey: string
}
  