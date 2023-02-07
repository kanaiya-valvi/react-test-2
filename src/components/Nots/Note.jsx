import style from "./Note.module.scss";
const Note = ({ id, title, discription }) => {
  console.log(title);
  return (
    <>
      <div key={id} className={style.notes}>
        <h1 className={style.notes__title}>{title}</h1>
        <p className={style.notes__discription}>{discription}</p>
      </div>
    </>
  );
};
export default Note;
