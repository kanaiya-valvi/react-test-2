import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, showModal } from "../../store/Slices/UserSlice";
import style from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const id = useSelector((id) => id.list.noOfList);
  const [category, setCategory] = useState("Story");
  const [note, setNote] = useState("");
  const [discription, setDiscription] = useState("");
  const [noteTheme, setNoteTheme] = useState("");


  useEffect(() => {
    const classList = ["note_1", "note_2", "note_3", "note_4"];
    const index = Math.trunc(Math.random() * 4);
    const setClass = classList[index];    
    setNoteTheme(setClass);
  }, [noteTheme]);
  const submitHandler = (event) => {
    event.preventDefault();

    if (note === "" || discription === "") {
      return <p>All files are required</p>;
    }
    const data = { id, category, note, discription, noteTheme };
    dispatch(addNote(data));
    setCategory("Story");
    setNote("");
    setDiscription("");
    dispatch(showModal(false));
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}>
        <option value="Story">Story</option>
        <option value="In Progress">In Progress</option>
        <option value="Testing">Testing</option>
        <option value="Done">Done</option>
      </select>
      <input
        maxLength="40"
        type="text"
        value={note}
        placeholder="Enter Notes title"
        onChange={(event) => setNote(event.target.value)}
      />
      <textarea
        id="w3review"
        maxLength="150"
        value={discription}
        placeholder="Enter your Discription"
        onChange={(event) => setDiscription(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
