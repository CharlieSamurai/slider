import { useEffect, useState } from "react";

import { SlideImg } from "../../_shared";
import { SlideContainer } from "../_shared";

export const MiddleSlide = ({ openModal, slideUrl }) => {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 100);
  }, [slideUrl]);

  return (
    <SlideContainer position={"middle"}>
      {slideUrl
        ? !isChanging && <SlideImg alt="" onClick={openModal} src={slideUrl} />
        : null}
    </SlideContainer>
  );
};
