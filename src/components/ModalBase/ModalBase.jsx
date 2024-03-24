import { useEffect } from "react";

import { Backdrop, CloseBtn, CloseIcon, Modal } from "./ModalBase.styled";
import sprite from "../../assets/sprite.svg";

export const ModalBase = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleOverlayClick}>
      <Modal>
        <CloseBtn type="button" onClick={onClose}>
          <CloseIcon>
            <use href={sprite + "#icon-close"}></use>
          </CloseIcon>
        </CloseBtn>
        {children}
      </Modal>
    </Backdrop>
  );
};
