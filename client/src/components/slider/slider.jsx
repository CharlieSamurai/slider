import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Footer,
  LeftSlide,
  Loader,
  MiddleSlide,
  ModalWindowSlide,
  RightSlide,
} from "./components";
import { SliderContainer } from "./styled_elements";
import { setSlidesMiddleware } from "../../redux";

export const Slider = () => {
  const dispatch = useDispatch();

  const { currentSlide, slides } = useSelector((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSlideLast, setIsSlideLast] = useState(false);

  useEffect(() => {
    dispatch(setSlidesMiddleware());
  }, [dispatch]);

  useEffect(() => {
    if (slides.length) {
      if (!slides[currentSlide + 1]) setIsSlideLast(true);
      if (slides[currentSlide + 1] && isSlideLast) setIsSlideLast(false);
    }
  }, [currentSlide, slides]);

  return (
    <>
      <SliderContainer>
        {isModalOpen && (
          <ModalWindowSlide
            closeModal={() => setIsModalOpen(false)}
            isSlideLast={isSlideLast}
            slideUrl={slides[currentSlide]}
          />
        )}
        {slides.length ? (
          <>
            <LeftSlide slideUrl={slides[currentSlide - 1]} />
            <MiddleSlide
              openModal={() => setIsModalOpen(true)}
              slideUrl={slides[currentSlide]}
            />
            <RightSlide slideUrl={slides[currentSlide + 1]} />
          </>
        ) : (
          <Loader />
        )}
      </SliderContainer>
      {slides.length && <Footer />}
    </>
  );
};
