import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/Slices/UserSlice";
import style from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(addNote(data));
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <select {...register("categoy")}>
        <option value="Story">Story</option>
        <option value="In Progress">In Progress</option>
        <option value="Testing">Testing</option>
        <option value="Done">Done</option>
      </select>
      <input
        type="text"
        defaultValue="Notes"
        {...register("note", { required: true })}
      />
      <textarea
        id="w3review"
        name="w3review"
        defaultValue="Enter Your Notes"
        {...register("discription", { required: true })}
      />
      {errors.discription && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Form;
