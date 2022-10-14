import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TextHelper } from "./components";
import { ModalWindowContainer, ModalWindow } from "./styled_elements";
import { SlideImg } from "../_shared";
import { nextSlideAction } from "../../../../redux";

export const ModalWindowSlide = ({ closeModal, slideUrl, isSlideLast }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(nextSlideAction());
  };

  useEffect(() => {
    window.addEventListener("keypress", (event) => {
      if (event.code === "Space") closeModal();
    });
    return window.removeEventListener("keypress", (event) => {
      if (event.code === "Space") closeModal();
    });
  }, []);

  return slideUrl ? (
    <ModalWindowContainer>
      <TextHelper />
      <ModalWindow>
        <SlideImg
          alt=""
          onClick={isSlideLast ? undefined : handleClick}
          src={slideUrl}
        />
      </ModalWindow>
    </ModalWindowContainer>
  ) : null;
};
