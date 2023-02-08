import React from "react";
import { useDispatch } from "react-redux";
import { dragNotes } from "../../store/Slices/UserSlice";
import style from "./Card.module.scss";

function Card({ children, section }) {
  const dispatch = useDispatch();
  const dragingOver = (e) => {
    e.preventDefault();    
  };

  const dragDropped = (e) => {
    const el=e.target;    
    let dataTransferId = e.dataTransfer.getData("noteId");
    if(el.closest("#story")){
      dispatch(dragNotes({id:dataTransferId,cat:'Story'}));
    }    
    if (el.closest("#progress")) {
      dispatch(dragNotes({ id: dataTransferId, cat: "In Progress" }));
    }    
    if (el.closest("#testing")) {
      dispatch(dragNotes({ id: dataTransferId, cat: "Testing" }));
    }    
    if (el.closest("#done")) {
      dispatch(dragNotes({ id: dataTransferId, cat: "Done" }));
    }    
  };
  return (
    <div
      className={style.card}
      droppable="true"
      onDragOver={(e) => dragingOver(e)}
      onDrop={(e) => dragDropped(e)}
      id={section}>
      {children}
    </div>
  );
}

export default Card;
