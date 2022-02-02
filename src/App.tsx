import React from "react";
import { GlobalStyle } from "./style/GlobalStyled";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
