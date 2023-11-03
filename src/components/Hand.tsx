import styled from "styled-components";

interface HandProps {
  className: "hour" | "minute" | "second";
  rotation: number;
}

const rectSize = { hour: 160, minute: 180, second: 220 };
const width = { hour: 8, minute: 5, second: 3 };
const height = { hour: 80, minute: 90, second: 110 };
const background = { hour: "#2980b9", minute: "#ecf0f1", second: "#e67e22" };

export const Hand = styled.div<HandProps>`
  position: absolute;
  width: ${(props) => rectSize[props.className]}px;
  height: ${(props) => rectSize[props.className]}px;
  transform: translate(-50%, -50%) rotateZ(${(props) => props.rotation}deg);
  z-index: 12;
  top: 50%;
  left: 50%;

  &::before {
    content: "";
    width: ${(props) => width[props.className]}px;
    height: ${(props) => height[props.className]}px;
    background: ${(props) => background[props.className]};
    position: absolute;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
`;
