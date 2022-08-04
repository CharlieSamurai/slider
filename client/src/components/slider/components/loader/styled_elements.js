import styled from "styled-components";

export const Spinner = styled.div`
animation: loading 1s infinite;
  border: 10px solid white;
  border-radius: 50%;
  border-top: 10px solid black;
  height: 80px;
  width: 80px;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
