import styles from "./index.module.css";

export const CustomModal: React.FC<IModalProps> = ({
  closeModal,
  children,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

interface IModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  title: string;
}
