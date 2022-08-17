import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Job from '../../constants/characters/job';
import Status from '../../constants/characters/status';

interface IPlayer {
  id: string;
  job: Job,
  status: Status,
  name?: string;
  x?: number;
  y?: number;
}

const findPlayerById = (players: Array<IPlayer>, playerId: string): IPlayer | undefined => players
  .find(({ id }) => id === playerId);

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    value: {
      players: [{
        id: '111',
        name: 'test-name',
        job: Job.ADVENTURER,
        status: Status.READY,
      }] as Array<IPlayer>,
      currentPlayerId: '111',
    },
  },
  reducers: {
    setCurrentPlayerId(state, action: PayloadAction<string>) {
      state.value.currentPlayerId = action.payload;
    },
    setPlayerById(state, action: PayloadAction<IPlayer>) {
      const { id } = action.payload;
      state.value.players = state.value.players.map((obj: IPlayer) => {
        if (obj.id === id) {
          return {
            ...obj,
            ...action.payload,
          };
        }
        return obj;
      });
    },
    setPlayerStatus(state, action: PayloadAction<Status>) {
      const currentPlayer = findPlayerById(state.value.players, state.value.currentPlayerId);
      if (currentPlayer) {
        currentPlayer.status = action.payload;
      }
    },
    setPlayerName(state, action: PayloadAction<string>) {
      const currentPlayer = findPlayerById(state.value.players, state.value.currentPlayerId);
      if (currentPlayer) {
        currentPlayer.name = action.payload;
      }
    },
    setPlayerLocation(state, action: PayloadAction<{x: number; y: number}>) {
      const currentPlayer = findPlayerById(state.value.players, state.value.currentPlayerId);
      if (currentPlayer) {
        currentPlayer.x = action.payload.x;
        currentPlayer.y = action.payload.y;
      }
    },
  },
});

export const {
  setPlayerById,
  setPlayerLocation,
  setPlayerStatus,
  setPlayerName,
  setCurrentPlayerId,
} = playerSlice.actions;

export default playerSlice.reducer;
