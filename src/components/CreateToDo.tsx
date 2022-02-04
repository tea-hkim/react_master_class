import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "./../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const category = useRecoilValue(categoryState);
  const [toDoList, setToDoList] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDoList((prev) => {
      const newToDo = [{ text: toDo, id: Date.now(), category }, ...prev];
      localStorage.setItem("todo", JSON.stringify(newToDo));
      return newToDo;
    });
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "Please write your to do list" })}
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
