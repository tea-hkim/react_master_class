import React from "react";
import { IToDo } from "../atoms";

function Todo({ text, category }: IToDo) {
  const handleClick = (newCategory: IToDo["category"]) => {
    console.log(newCategory);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "ToDo" && (
        <button onClick={() => handleClick("ToDo")}>To do</button>
      )}
      {category !== "Doing" && (
        <button onClick={() => handleClick("Doing")}>Doing</button>
      )}
      {category !== "Done" && (
        <button onClick={() => handleClick("Done")}>Done</button>
      )}
    </li>
  );
}

export default Todo;
