import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "./../atoms";
import Todo from "./Todo";

function RenderToDo() {
  const toDoList = useRecoilValue(toDoState);
  return (
    <ul>
      {toDoList.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
}

export default RenderToDo;
