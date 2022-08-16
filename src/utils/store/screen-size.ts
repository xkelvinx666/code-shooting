import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IScreenSize {
  height: number;
  width: number;
  isHorizontal: boolean;
}

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState: {
    value: {
      height: window.innerHeight,
      width: window.innerWidth,
      isHorizontal: window.innerHeight < window.innerWidth,
    } as IScreenSize,
  },
  reducers: {
    setSize: (state, action: PayloadAction<IScreenSize>) => {
      const { height, width, isHorizontal } = action.payload;
      state.value = {
        height,
        width,
        isHorizontal,
      };
    },
  },
});

export const { setSize } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
