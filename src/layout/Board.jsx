import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Nots/Note";
import { showModal } from "../store/Slices/UserSlice";
import Card from "../UI/card/Card";

import style from "./Board.module.scss";

const Board = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.notes);

  const story = list.filter((item) => item.category === "Story");
  const progress = list.filter((item) => item.category === "In Progress");
  const testing = list.filter((item) => item.category === "Testing");
  const done = list.filter((item) => item.category === "Done");

  return (
    <>
      <div className={style.board}>
        <Card section="story">
          <h1 className={style.board__title}>Story</h1>
          <div className={style.board__notes}>
            {story.map((item,mov) => (
              <Note
              index={mov}
                title={item.note}
                key={item.id}
                id={item.id}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <Card section="progress">
          <h1 className={style.board__title}>Progress</h1>
          <div className={style.board__notes}>
            {progress.map((item,mov) => (
              <Note
              index={mov}
                title={item.note}
                key={item.id}
                id={item.id}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <Card section="testing">
          <h1 className={style.board__title}>Testing</h1>
          <div className={style.board__notes}>
            {testing.map((item,mov) => (
              <Note
              index={mov}
                title={item.note}
                key={item.id}
                id={item.id}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <Card section="done">
          <h1 className={style.board__title}>Done</h1>
          <div className={style.board__notes}>
            {done.map((item,mov) => (
              <Note
              index={mov}
                title={item.note}
                key={item.id}
                id={item.id}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <button
          className={style.addNewNote}
          onClick={() => dispatch(showModal(true))}>
          &#128394;
        </button>
      </div>
    </>
  );
};

export default Board;
