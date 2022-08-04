import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { previousSlideAction } from "../../../../redux";
import { SideSlideContainer, SlideImg } from "../_shared";

export const LeftSlide = ({ slideUrl }) => {
  const dispatch = useDispatch();

  const [isChanging, setIsChanging] = useState(false);

  const handleClick = () => dispatch(previousSlideAction());

  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 100);
  }, [slideUrl]);

  return (
    <SideSlideContainer>
      {slideUrl
        ? !isChanging && (
            <SlideImg alt="" onClick={handleClick} src={slideUrl} />
          )
        : null}
    </SideSlideContainer>
  );
};
