import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => {
    return props.night ? "white" : "black";
  }};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.night ? "black" : "white";
  }};
`;

function App() {
  const [night, setNight] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setNight((cur) => !cur);
  };

  return (
    <Wrapper night={night}>
      <Title night={night}>Hello</Title>
      <button onClick={handleClick}>darkMode</button>
    </Wrapper>
  );
}

export default App;
