import styled from "styled-components";

interface Props {
  value: number;
}

const Wrapper = styled.div<Props>`
  color: #b6b1a6;
  --rotation: 0;
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 12px;
  text-align: center;
  transform: rotate(${(props) => props.value * 30 + "deg"});
  p {
    transform: rotate(-${(props) => props.value * 30 + "deg"});
  }
`;

export default function NumberLabel(props: Props) {
  return (
    <Wrapper value={props.value}>
      <p>{props.value}</p>
    </Wrapper>
  );
}
