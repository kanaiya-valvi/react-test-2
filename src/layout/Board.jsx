import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Nots/Note";
import { showModal } from "../store/Slices/UserSlice";
import Card from "../UI/card/Card";

import style from "./Board.module.scss";

const Board = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.notes);
  const story = list.filter((item) => item.categoy === "Story");
  const progress = list.filter((item) => item.categoy === "In Progress");
  const testing = list.filter((item) => item.categoy === "Testing");
  const done = list.filter((item) => item.categoy === "Done");
  console.log(story);
  return (
    <>
      <div className={style.board}>
        <Card>
          <h1 className={style.board__title}>Story</h1>
          <div className={style.board__notes}>
            {story.map((item, mov) => (
              <Note
                title={item.note}
                key={"1" + mov}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <Card>
          <h1 className={style.board__title}>progress</h1>
          <div className={style.board__notes}>
            {progress.map((item, mov) => (
              <Note
                title={item.note}
                key={"2" + mov}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <Card>
          <h1 className={style.board__title}>testing</h1>
          <div className={style.board__notes}>
            {testing.map((item, mov) => (
              <Note
                title={item.note}
                key={"3" + mov}
                discription={item.discription}
              />
            ))}
          </div>
        </Card>
        <Card>
          <h1 className={style.board__title}>Done</h1>
          <div className={style.board__notes}>
            {done.map((item, mov) => (
              <Note
                title={item.note}
                key={"4" + mov}
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
