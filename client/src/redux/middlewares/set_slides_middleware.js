import { setSlidesAction } from "..";

export const setSlidesMiddleware =
  (category, type, setLoader) => async (dispatch) => {
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.waifu.pics/many/${type}/${category}`,
        {
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      const smth = await response.json();

      if (response.status === 200) {
        dispatch(setSlidesAction(smth.files));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoader(false);
    }
  };
