import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { SlideContainer } from "../_shared";
import { SlideImg } from "../../_shared";
import { nextSlideAction } from "../../../../../redux";

export const RightSlide = ({ slideUrl }) => {
  const dispatch = useDispatch();

  const [isChanging, setIsChanging] = useState(false);

  const handleClick = () => dispatch(nextSlideAction());

  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 100);
  }, [slideUrl]);

  return (
    <SlideContainer>
      {slideUrl
        ? !isChanging && (
            <SlideImg alt="" onClick={handleClick} src={slideUrl} />
          )
        : null}
    </SlideContainer>
  );
};
