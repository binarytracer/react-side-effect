import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const duration = 3000;

export default function DeleteConfirmation(props) {
  const { onConfirm, onCancel } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar duration={duration} />
    </div>
  );
}
