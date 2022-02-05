import React, { useEffect } from "react";
import CreateToDo from "./CreateToDo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Todo from "./Todo";
import Category from "./Category";
import { toDoState, toDoSelector } from "./../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const setToDoList = useSetRecoilState(toDoState);
  useEffect(() => {
    const toDoList = localStorage.getItem("todo");
    if (toDoList) {
      const parsedTodoList = JSON.parse(toDoList);
      setToDoList(parsedTodoList);
    }
  }, []);
  return (
    <Wrapper>
      <h1>To Dos</h1>
      <Category />
      <CreateToDo />
      {toDos.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </Wrapper>
  );
}

export default ToDoList;
