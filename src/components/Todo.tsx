import React from "react";
import { IToDo } from "../atoms";

function Todo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>To do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default Todo;
