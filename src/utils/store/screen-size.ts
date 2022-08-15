import { createSlice } from '@reduxjs/toolkit';

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState: {
    value: {
      height: window.innerHeight,
      width: window.innerWidth,
      isHorizontal: window.innerHeight < window.innerWidth,
    },
  },
  reducers: {
    setSize: (state, action) => {
      const { height, width, isHorizontal } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.value = {
        height,
        width,
        isHorizontal,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSize } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;
