import styled from "styled-components";

export const SlideContainer = styled.div`
  align-items: center;
  display: flex;
  height: 90%;
  width: ${(props) => (props.position === "middle" ? "40%" : "25%")};
`;
