import { useDispatch } from "react-redux";
import { deleteNote } from "../../store/Slices/UserSlice";
import style from "./Note.module.scss";
const Note = ({ id, title, discription, index, theme }) => {
  const dragStart = (e, ids) => {    
    e.dataTransfer.setData("noteId", ids);
  };
  const dispatch= useDispatch()

  // const drafEnter = (e, mov) => {
  //   console.log(`dragEnter`, mov);
  // };
  return (
    <>
      <div
        className={`${style.notes} ${style[theme]}`}
        draggable
        // onDragEnter={(e) => drafEnter(e, index)}
        onDragStart={(e) => dragStart(e, id)}
        droppable="true">
        <h1 className={`${style.notes__title} ${style.title}`}>{title}</h1>
        <p className={`${style.notes__discription} ${style.discription}`}>
          {discription}
        <button className={style.notes__delate} onClick={() => dispatch(deleteNote(id))}>Delete</button>
        </p>
      </div>
    </>
  );
};
export default Note;
