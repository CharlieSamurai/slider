import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Footer, Loader, ModalWindowSlide, Slides, StartMenu } from "./components";
import { SliderContainer } from "./styled_elements";

export const Slider = () => {
  const { currentSlide, slides } = useSelector((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSlideLast, setIsSlideLast] = useState(false);

  useEffect(() => {
    if (slides.length) {
      if (!slides[currentSlide + 1]) setIsSlideLast(true);
      if (slides[currentSlide + 1] && isSlideLast) setIsSlideLast(false);
    }
  }, [currentSlide, slides]);

  return (
    <>
      <SliderContainer>
        {isLoading && <Loader />}
        {slides.length ? (
          <Slides
            currentSlide={currentSlide}
            openModal={() => setIsModalOpen(true)}
            slides={slides}
          />
        ) : null}
        {!isLoading && !slides.length ? (
          <StartMenu setLoader={setIsLoading} />
        ) : null}
      </SliderContainer>
      {slides.length && <Footer />}
      {isModalOpen && (
        <ModalWindowSlide
          closeModal={() => setIsModalOpen(false)}
          isSlideLast={isSlideLast}
          slideUrl={slides[currentSlide]}
        />
      )}
    </>
  );
};
