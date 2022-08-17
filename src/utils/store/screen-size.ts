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
      height: 0,
      width: 0,
      isHorizontal: true,
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
