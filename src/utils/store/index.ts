import { configureStore } from '@reduxjs/toolkit';
import screenSizeSliceReducer from './screen-size';

const store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
  },
});

export default store;
