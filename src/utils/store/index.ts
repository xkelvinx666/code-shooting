import { configureStore } from '@reduxjs/toolkit';
import screenSizeSliceReducer from './screen-size';
import playersReducer from './players';

const store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
    players: playersReducer,
  },
});

export default store;
