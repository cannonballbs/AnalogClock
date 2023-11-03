import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div.attrs({ "data-tooltip-id": "my-tooltip" })`
  position: relative;
  clip-path: circle(53%);
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #292a2e;
  background-repeat: no-repeat;
  background-size: cover;
  border: 4px solid #2c3e50;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 2555, 0.05),
    inset 0 -15px 15px rgba(255, 255, 2555, 0.05),
    0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);
  &::before {
    content: "";
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    z-index: 999;
  }
`;

export default function ClockBoard(props: Props) {
  return <Container>{props.children}</Container>;
}
