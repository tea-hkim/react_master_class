import React from "react";
import CreateToDo from "./CreateToDo";
import RenderToDo from "./RenderToDo";

function ToDoList() {
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <RenderToDo />
    </div>
  );
}

export default ToDoList;
