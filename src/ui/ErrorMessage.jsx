import { useCallback, useState } from "react";
import styles from "./ErrorMessage.module.scss";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
function useToast() {
  const [toast, setToast] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const triggerToast = useCallback(
    (props) => {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setToast(props);

      const newTimeoutId = setTimeout(() => {
        setToast(null);
      }, props.duration);

      setTimeoutId(newTimeoutId);
    },
    [timeoutId]
  );

  const toastComponent = toast ? (
    <div className={`${styles["top-left"]}`}>
      <Toast {...toast} onClose={() => setToast(null)} />
    </div>
  ) : null;

  return { toastComponent, triggerToast };
}

export default useToast;

function Toast({ message, onClose = () => {} }) {
  return (
    <div className={`${styles.toast} ${styles.error}`}>
      <AiOutlineCloseCircle />
      {message}
      <AiOutlineClose
        color="white"
        onClick={onClose}
        className={`${styles.closeBtn}`}
        role="button"
      />
    </div>
  );
}
