import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import Form from "../../components/Form/form";
import { hideModal } from "../../store/Slices/UserSlice";
import style from "./Modal.module.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const closeModel = () => {
    dispatch(hideModal(false));
  };

  const portalElement = document.getElementById("overlay");  

  const BackDrop = () => (
    <div className={style.modal__backdrop} onClick={closeModel}></div>
  );
  const ModalOverlay = () => (
    <div className={style.modal__content}>
      <p className={style.modal__clase} onClick={closeModel}>
        &times;
      </p>
      <Form />
    </div>
  );
  return (
    <>
      {createPortal(<BackDrop />, portalElement)}
      {createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Modal;
