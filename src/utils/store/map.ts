import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Map from '../../constants/environment/map';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    value: Map.DIRT
  },
  reducers: {
    setMap(state, action: PayloadAction<Map>) {
      state.value = action.payload;
    }
  }
});

export const { setMap } = mapSlice.actions;

export default mapSlice.reducer;