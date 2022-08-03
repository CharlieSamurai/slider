import { setSlidesMiddleware } from "../../redux";
import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

export const Slider = () => {
  const dispatch = useDispatch();

  const slides = useSelector((state) => state.slides);

  useEffect(() => {
    dispatch(setSlidesMiddleware());
  }, []);

  const Smth = styled.div`
    align-items: center;
    background: black;
    display: flex;
    height: 50vh;
    justify-content: center;
    margin: 25vh 0;
  `;

  return (
    <Smth>
      <div>TEST</div>
      <button>CLICK</button>
    </Smth>
  );
};
