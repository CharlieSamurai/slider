import { LeftSlide } from "./left_slide";
import { MiddleSlide } from "./middle_slide";
import { RightSlide } from "./right_slide";

export const Slides = ({ currentSlide, openModal, slides }) => (
  <>
    <LeftSlide slideUrl={slides[currentSlide - 1]} />
    <MiddleSlide openModal={openModal} slideUrl={slides[currentSlide]} />
    <RightSlide slideUrl={slides[currentSlide + 1]} />
  </>
);
