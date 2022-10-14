export const rootReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_SLIDE":
      return {
        ...state,
        currentSlide: state.currentSlide + 1,
      };

    case "PREVIOUS_SLIDE":
      return {
        ...state,
        currentSlide: state.currentSlide - 1,
      };

    case "SET_CURRENT_SLIDE":
      return {
        ...state,
        currentSlide: action.payload,
      };

    case "SET_SLIDES":
      return {
        ...state,
        slides: action.payload,
      };

    default:
      return state;
  }
};
