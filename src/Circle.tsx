import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
const Container = styled.div<ContainerProps>`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 5px solid ${(props) => props.borderColor};
  box-sizing: border-box;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
