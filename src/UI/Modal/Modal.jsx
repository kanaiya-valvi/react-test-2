import React from "react";
import Form from "../../components/Form/form";
import style from "./Modal.module.scss";
const Modal = () => {  
  return (
    <div className={style.modal}>
      <div className={style.modal__content}>
        <p className={style.modal__clase}>&times;</p>
        <Form/>
      </div>
    </div>
  );
};

export default Modal;
