import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./../atoms";

interface IForm {
  toDo: string;
  error: string;
}

function CreateToDo() {
  const category = useRecoilValue(categoryState);
  const setToDoList = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDoList((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
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
