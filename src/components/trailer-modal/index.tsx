import { IMovie } from "../../data/store";
import React, { useEffect, useState } from "react";
import { YoutubePlayer } from "components/youtube-player";
import { Modal } from "components/modal";
import { getMovieTrailer } from "api/movies";

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
    <Modal title={movie.title} closeModal={closeModal}  >
      <YoutubePlayer videoKey={videoKey} />
    </Modal>
    
  );
};