import React from "react";
import ReactPlayer from 'react-player'

interface IYoutubePlayer {
    videoKey: string
}

export const YoutubePlayer: React.FC<IYoutubePlayer> = ({ videoKey }) => (<ReactPlayer 
    className="video-player" 
    url={`https://www.youtube.com/watch?v=${videoKey}`} 
    controls={true}
    playing={true}
    data-testid="youtube-player"
  />);
  