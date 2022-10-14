import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducer";

export const store = configureStore({
  preloadedState: {
    currentSlide: 0,
    slides: [],
  },
  reducer: rootReducer,
});
