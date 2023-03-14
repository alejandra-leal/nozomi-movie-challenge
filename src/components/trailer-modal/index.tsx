import React, { useEffect, useState } from "react";
import { YoutubePlayer } from "common/youtube-player";
import { getMovieTrailer } from "api/movies";
import { IMovie } from "models/movie";
import { CustomModal } from "common/custom-modal";
import { IMovieServiceVideoResponse } from "models/movies-service-response";

export const TrailerModal: React.FC<ITrailerModalProps> = ({ closeModal, movie }) => {
  const [videoKey, setVideoKey] = useState("");
  useEffect(() => {
  
    getMovieTrailer(movie.id).then((response: IMovieServiceVideoResponse) => {
      if (response.videos && response.videos.results.length) {
        const trailer = response.videos.results.find(
          (vid) => vid.type === "Trailer"
        );
        setVideoKey(trailer ? trailer.key : response.videos.results[0].key);
      }
    });
  }, [movie.id]);

  return (
    <CustomModal data-testid="trailer-modal" title={movie.title} closeModal={closeModal}  >
      <YoutubePlayer videoKey={videoKey} />
    </CustomModal>
    
  );
};

interface ITrailerModalProps {
  movie: IMovie;
  closeModal: () => void;
}