import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "./../atoms";

interface IForm {
  toDo: string;
}

export const FormBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  input {
    border-radius: 5px;
    min-width: 80%;
    min-height: 30px;
    border: 2px solid #55e6c1;
  }
  button {
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 0 10px;
    height: 30px;
    background-color: #55e6c1;
    &:hover {
      background-color: #79bde4;
    }
  }
`;

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
    <FormBox onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "Please write your to do list" })}
        placeholder="할 일을 적어주세요"
      />
      <button>추가하기</button>
    </FormBox>
  );
}

export default CreateToDo;
