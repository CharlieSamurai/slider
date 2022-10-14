import { useState } from "react";
import { useDispatch } from "react-redux";

import { SfwSelect, NsfwSelect } from "./components";
import { setSlidesMiddleware } from "../../../../redux";

export const StartMenu = ({ setLoader }) => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("waifu");

  const [type, setType] = useState("sfw");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleClick = () => {
    dispatch(setSlidesMiddleware(category, type, setLoader));
  };

  return (
    <div>
      <div>
        <form onChange={handleTypeChange} value={type}>
          <select>
            <option>sfw</option>
            <option>nsfw</option>
          </select>
        </form>
      </div>
      <div>
        <form onChange={handleCategoryChange} value={category}>
          {type === "sfw" ? <SfwSelect /> : <NsfwSelect />}
        </form>
      </div>
      <button onClick={handleClick}>LOAD</button>
    </div>
  );
};
