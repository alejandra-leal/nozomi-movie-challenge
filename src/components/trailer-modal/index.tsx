import React, { useEffect, useState } from "react";
import { YoutubePlayer } from "components/youtube-player";
import { getMovieTrailer } from "api/movies";
import { IMovie } from "models/movie";
import { CustomModal } from "common/custom-modal";

export const TrailerModal: React.FC<ITrailerModalProps> = ({ closeModal, movie }) => {
  const [videoKey, setVideoKey] = useState("");
  useEffect(() => {
    

    getMovieTrailer(movie.id).then((response: IVideoMovieResponse) => {
      if (response.videos && response.videos.results.length) {
        const trailer = response.videos.results.find(
          (vid) => vid.type === "Trailer"
        );
        setVideoKey(trailer ? trailer.key : response.videos.results[0].key);
      }
    });
  }, [movie.id]);

  return (
    <CustomModal title={movie.title} closeModal={closeModal}  >
      <YoutubePlayer data-testid="youtube-player" videoKey={videoKey} />
    </CustomModal>
    
  );
};

interface ITrailerModalProps {
  movie: IMovie;
  closeModal: () => void;
}
interface IVideoMovieResponse {
  videos: IVideoResults;
}
interface IVideoResults {
  results: IVideoResult[];
}

interface IVideoResult {
  type: string;
  key: string;
}