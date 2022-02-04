import React, { useEffect } from "react";
import CreateToDo from "./CreateToDo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Todo from "./Todo";
import Category from "./Category";
import { toDoState, toDoSelector, categoryListState } from "./../atoms";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryListState);
  const setToDoList = useSetRecoilState(toDoState);
  useEffect(() => {
    const toDoList = localStorage.getItem("todo");
    if (toDoList) {
      console.log(toDoList);
      const parsedTodoList = JSON.parse(toDoList);
      setToDoList(parsedTodoList);
    }
  }, []);
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Category />
      <CreateToDo />
      {toDos.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
