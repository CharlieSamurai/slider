import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  preloadedState: {
    currentSlide: 0,
    slides: [],
  },
  reducer: rootReducer,
});
