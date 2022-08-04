import styled from "styled-components";

export const SideSlideContainer = styled.div`
  align-items: center;
  display: flex;
  height: 90%;
  width: 25%;
`;

export const SlideImg = styled.img`
  animation-duration: 2s;
  animation-name: image_appear;
  height: 100%;
  object-fit: contain;
  width: 100%;

  @keyframes image_appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
