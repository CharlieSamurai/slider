import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FooterContainer, FooterImg } from "./styled_elements";
import { setCurrentSlideAction } from "../../../../redux";

export const Footer = () => {
  const dispatch = useDispatch();

  const slides = useSelector((state) => state.slides);

  const handleClick = (idx) => dispatch(setCurrentSlideAction(idx));

  return (
    <FooterContainer>
      {slides.map((slide, idx) => (
        <FooterImg
          alt=""
          key={idx + slide}
          onClick={() => handleClick(idx)}
          src={slide}
        />
      ))}
    </FooterContainer>
  );
};
