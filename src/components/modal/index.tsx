import styles from "./index.module.css";

interface ITrailerModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  title: string;
}


export const Modal: React.FC<ITrailerModalProps> = ({ closeModal, children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            X{" "}
          </button>
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const fetchMovieTrailer = async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
};
