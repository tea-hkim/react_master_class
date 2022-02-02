import React from "react";
import { IToDo } from "../atoms";

function Todo({ text, category }: IToDo) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "ToDo" && (
        <button name="ToDo" onClick={handleClick}>
          To do
        </button>
      )}
      {category !== "Doing" && (
        <button name="Doing" onClick={handleClick}>
          Doing
        </button>
      )}
      {category !== "Done" && (
        <button name="Done" onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default Todo;
