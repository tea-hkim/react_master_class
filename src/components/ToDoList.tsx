import React, { useEffect } from "react";
import CreateToDo from "./CreateToDo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Todo from "./Todo";
import Category from "./Category";
import { toDoState, toDoSelector, categoryListState } from "./../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 480px;
  margin: 5vh auto 0;
  padding: 0 10px;
  border-radius: 10px;
  h1 {
    font-size: 40px;
    font-weight: 800;
    margin: 10px 0 15px;
  }
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const setToDoList = useSetRecoilState(toDoState);
  const setCategoryList = useSetRecoilState(categoryListState);
  useEffect(() => {
    const toDoList = localStorage.getItem("todo");
    const categoryList = localStorage.getItem("category");
    if (toDoList) {
      const parsedTodoList = JSON.parse(toDoList);
      setToDoList(parsedTodoList);
    }
    if (categoryList) {
      const parsedCategoryList = JSON.parse(categoryList);
      setCategoryList(parsedCategoryList);
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
