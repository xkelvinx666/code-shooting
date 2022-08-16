import { configureStore } from '@reduxjs/toolkit';
import screenSizeSliceReducer from './screen-size';
import playerReducer from './player';

const store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
    player: playerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
