import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
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
      const newToDoList = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("todo", JSON.stringify(newToDoList));
      return newToDoList;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.ToDo && (
        <button name={Categories.ToDo} onClick={handleClick}>
          To do
        </button>
      )}
      {category !== Categories.Doing && (
        <button name={Categories.ToDo} onClick={handleClick}>
          Doing
        </button>
      )}
      {category !== Categories.Done && (
        <button name={Categories.Done} onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default Todo;
