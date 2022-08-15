import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Status from '../../constants/characters/status';

interface Player {
  id: string;
  name: string;
  x: number;
  y: number;
  status: Status,
}

const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: [] as Array<Player>,
  },
  reducers: {
    setPlayerById(state, action: PayloadAction<Player>) {
      const { id } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.value = state.value.map((obj: Player) => {
        if (obj.id === id) {
          return action;
        }
        return obj;
      });
    },
  },
});

export const { setPlayerById } = playersSlice.actions;

export default playersSlice.reducer;
