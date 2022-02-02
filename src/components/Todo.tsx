import React from "react";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function Todo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
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
