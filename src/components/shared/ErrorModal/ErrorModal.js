import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = ({ onModalClose }) => {
  return <div className={styles.backdrop} onClick={onModalClose} />;
};

const ModalOverlay = ({ title, message, onModalClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onModalClose}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onModalClose }) => {
  return (
    <>
      {/*  here we define React components to be PORTED(moved) to the DIVs OUTSIDE root div */}
      {ReactDOM.createPortal(
        <Backdrop onModalClose={onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onModalClose={onModalClose}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
