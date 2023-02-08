import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form/form";
import { hideModal } from "../../store/Slices/UserSlice";
import style from "./Modal.module.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const closeModel = () => {
    dispatch(hideModal(false));
  };
  return (
    <div className={style.modal}>
      <div className={style.modal__backdrop} onClick={closeModel}>        
      </div>
      <div className={style.modal__content}>
        <p className={style.modal__clase} onClick={closeModel}>
          &times;
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
