import { IMovie } from "../../data/store";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { ENDPOINT, API_KEY } from "../../constants";
import { YoutubePlayer } from "components/youtube-player";

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
    const url = `${ENDPOINT}/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`;

    fetchMovieTrailer(url).then((response: IVideoMovieResponse) => {
      if (response.videos && response.videos.results.length) {
        const trailer = response.videos.results.find(
          (vid) => vid.type === "Trailer"
        );
        setVideoKey(trailer ? trailer.key : response.videos.results[0].key);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className={styles.title}>
          <h1>{movie.title}</h1>
        </div>
        <div className={styles.body}>
          <YoutubePlayer videoKey={videoKey} />
        </div>
      </div>
    </div>
  );
};

export const fetchMovieTrailer = async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
};
