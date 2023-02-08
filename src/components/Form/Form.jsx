import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/Slices/UserSlice";
import style from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const list = useSelector((id) => id.list.notes);
  const id = useSelector((id) => id.list.noOfList);
  const [category, setCategory] = useState("Story");
  const [note, setNote] = useState("");
  const [discription, setDiscription] = useState("");  

  const submitHandler = (event) => {
    event.preventDefault();
    if (note === "" || discription === "") {
      return <p>All files are required</p>;
    }
    const data = { id, category, note, discription };
    dispatch(addNote(data));
    setCategory("Story");
    setNote("");
    setDiscription("");
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
        type="text"
        value={note}
        placeholder="Enter Notes title"
        onChange={(event) => setNote(event.target.value)}
      />
      <textarea
        id="w3review"
        value={discription}
        placeholder="Enter your Discription"
        onChange={(event) => setDiscription(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
