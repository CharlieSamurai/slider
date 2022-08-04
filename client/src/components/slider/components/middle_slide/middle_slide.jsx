import { useEffect, useState } from "react";

import { MiddleSlideContainer } from "./styled_elements";
import { SlideImg } from "../_shared";

export const MiddleSlide = ({ openModal, slideUrl }) => {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 100);
  }, [slideUrl]);

  return (
    <MiddleSlideContainer>
      {slideUrl
        ? !isChanging && <SlideImg alt="" onClick={openModal} src={slideUrl} />
        : null}
    </MiddleSlideContainer>
  );
};
