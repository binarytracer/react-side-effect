import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal(props) {
  const { children, open } = props;
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
      return;
    }

    dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
