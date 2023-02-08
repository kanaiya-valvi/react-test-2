import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/Slices/UserSlice";
import style from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const [categoy, setCategoy] = useState("Story");
  const [note, setNote] = useState("");
  const [discription, setDiscription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (note === "" || discription === "") {
      return <p>All files are required</p>;
    }
    const data = { categoy, note, discription };
    dispatch(addNote(data));
    setCategoy("");
    setNote("");
    setDiscription("");
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <select
        value={categoy}
        onChange={(event) => setCategoy(event.target.value)}>
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
