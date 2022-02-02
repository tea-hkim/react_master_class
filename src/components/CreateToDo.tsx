import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./../atoms";

interface IForm {
  toDo: string;
  error: string;
}

function CreateToDo() {
  const setToDoList = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDoList((prev) => [
      { text: toDo, id: Date.now(), category: "ToDo" },
      ...prev,
    ]);
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
