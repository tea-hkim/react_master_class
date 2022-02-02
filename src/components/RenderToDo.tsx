import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./../atoms";
import Todo from "./Todo";

function RenderToDo() {
  const toDoList = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <h2>To do</h2>
      <ul>
        {toDo.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default RenderToDo;
