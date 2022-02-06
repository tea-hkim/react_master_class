import React from "react";
import { IToDo, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryListState } from "./../atoms";

const ToDoBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #55e6c1;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
  button {
    border: none;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: #479aca;
    }
  }
`;

function Todo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categoryList = useRecoilValue(categoryListState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      const newToDoList = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("todo", JSON.stringify(newToDoList));
      return newToDoList;
    });
  };
  const handleDelete = () => {
    setToDos((oldToDos) => {
      const newToDoList = oldToDos.filter((toDo) => toDo.id !== id);
      localStorage.setItem("todo", JSON.stringify(newToDoList));
      return newToDoList;
    });
  };

  return (
    <ToDoBox>
      <span>{text}</span>
      <ButtonContainer>
        {category !== "ToDo" && (
          <button name={"ToDo"} onClick={handleClick}>
            To do
          </button>
        )}
        {category !== "Doing" && (
          <button name={"Doing"} onClick={handleClick}>
            Doing
          </button>
        )}
        {category !== "Done" && (
          <button name={"Done"} onClick={handleClick}>
            Done
          </button>
        )}
        {categoryList?.map((cate: string) => {
          if (category !== cate) {
            return (
              <button name={cate} onClick={handleClick}>
                {cate}
              </button>
            );
          }
          return null;
        })}

        <button onClick={handleDelete}>삭제</button>
      </ButtonContainer>
    </ToDoBox>
  );
}

export default Todo;
