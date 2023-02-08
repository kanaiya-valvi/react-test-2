import { useSelector } from "react-redux";
import Board from "./layout/Board";
import Modal from "./UI/Modal/Modal";

function App() {
  const modal = useSelector((state) => state.list.modal);
  return (
    <main className="constainer">
      {modal && <Modal />}
      <Board />
    </main>
  );
}

export default App;
