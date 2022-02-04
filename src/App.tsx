import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const Box = styled(motion.div)`
  height: 240px;
  width: 320px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  height: 70px;
  width: 70px;
  border-radius: 40px;
  background-color: white;
`;

const SwitchButton = styled(motion.button)`
  color: blue;
  width: 100px;
  height: 30px;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  margin-top: 50px;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const enlargement = {
  mouseHover: (left: boolean) => ({
    scale: 1.1,
    x: left ? -16 : 16,
    y: left ? -16 : 16,
  }),
};

export default function App() {
  const [circle, setCircle] = useState(false);
  const handleCircle = () => setCircle((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  const handleClick = (num: string) => {
    setId(num);
  };
  return (
    <Wrapper>
      <GridContainer>
        <Box
          whileHover={{ scale: 1.1, x: -16, y: -12 }}
          onClick={() => handleClick("1")}
          layoutId="1"
        />
        <Box onClick={() => handleClick("2")} layoutId="2">
          {!circle ? <Circle layoutId="Circle" /> : null}
        </Box>
        <Box onClick={() => handleClick("3")} layoutId="3">
          {circle ? <Circle layoutId="Circle" /> : null}
        </Box>
        <Box
          whileHover={{ scale: 1.1, x: 16, y: 12 }}
          onClick={() => handleClick("4")}
          layoutId="4"
        />
      </GridContainer>
      <AnimatePresence>
        <SwitchButton
          onClick={handleCircle}
          whileTap={{ color: "red", scale: 1.2 }}
        >
          switch
        </SwitchButton>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{ width: 320, height: 240, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
