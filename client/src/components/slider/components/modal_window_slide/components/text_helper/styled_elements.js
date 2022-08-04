import styled from "styled-components";

export const TextHelperContainer = styled.h4`
  animation-duration: 5s;
  animation-name: text_appear;
  color: white;
  font-family: cursive;
  font-size: 25px;
  position: absolute;
  top: 0;

  @keyframes text_appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
