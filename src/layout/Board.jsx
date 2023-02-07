import { useSelector } from "react-redux";
import Note from "../components/Nots/Note";
import Card from "../UI/card/Card";

import style from "./Board.module.scss";

const Board = () => {
  const list = useSelector((state) => state.list);
  const story = list.filter((item) => item.categoy === "Story");
  const progress = list.filter((item) => item.categoy === "In Progress");
  const testing = list.filter((item) => item.categoy === "Testing");
  const done = list.filter((item) => item.categoy === "Done");  
  return (
    <>
      <div className={style.board}>
        <Card>
          <h1>Story</h1>
          <div className={style.board__notes}>
            {story.map((item, mov) => (
              <Note title={item.note} id={mov} discription={item.discription} />
            ))}
          </div>
        </Card>
        <Card>
          <h1>Story</h1>
          <div className={style.board__notes}>
            {progress.map((item, mov) => (
              <Note title={item.note} id={mov} discription={item.discription} />
            ))}
          </div>
        </Card>
        <Card>
          <h1>progress</h1>
          <div className={style.board__notes}>
            {testing.map((item, mov) => (
              <Note title={item.note} id={mov} discription={item.discription} />
            ))}
          </div>
        </Card>
        <Card>
          <h1>Story</h1>
          <div className={style.board__notes}>
            {done.map((item, mov) => (
              <Note title={item.note} id={mov} discription={item.discription} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Board;
