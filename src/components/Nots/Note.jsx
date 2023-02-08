import style from "./Note.module.scss";
const Note = ({ id, title, discription, index }) => {
  const dragStart = (e, ids) => {
    console.log(`dragStart started `);
    e.dataTransfer.setData("noteId", ids);
  };
  // const drafEnter = (e, mov) => {
  //   console.log(`dragEnter`, mov);
  // };
  return (
    <>
      <div
        className={style.notes}
        draggable
        // onDragEnter={(e) => drafEnter(e, index)}
        onDragStart={(e) => dragStart(e, id)}
        droppable="true">
        <h1 className={style.notes__title}>{title}</h1>
        <p className={style.notes__discription}>{discription}</p>
      </div>
    </>
  );
};
export default Note;
