import style from "./Note.module.scss";
const Note = ({  title, discription }) => {  
  return (
    <>
      <div className={style.notes}>
        <h1 className={style.notes__title}>{title}</h1>
        <p className={style.notes__discription}>{discription}</p>
      </div>
    </>
  );
};
export default Note;
