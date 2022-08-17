import { Provider } from 'react-redux';
import { useMemo } from 'react';
import {
  Stage, Layer,
} from 'react-konva';
import store from '../utils/store';
import useScreenSize from '../utils/hooks/screen-size';
import Map from '../constants/environment/map';
import Character from './characters/character';
import Maps from './eniroment/maps';
import ChangeStatusButtons from './menu/player-status/change-status-buttons';
import { useAppSelector } from '../utils/hooks/redux';

export default function Index() {
  const { width, height, isHorizontal } = useScreenSize();
  const { players, currentPlayerId } = useAppSelector((state) => state.player.value);

  const currentPlayer = useMemo(() => players
    .find(({ id }) => id === currentPlayerId), [players, currentPlayerId]);

  return (
    <Stage
      width={isHorizontal ? width : height}
      height={isHorizontal ? height : width}
      style={{
        position: 'fixed',
        top: isHorizontal ? 0 : (height - width) / 2,
        left: isHorizontal ? 0 : 0 - (height - width) / 2,
        width: isHorizontal ? width : height,
        height: isHorizontal ? height : width,
        transformOrigin: '50% 50%',
        transform: isHorizontal ? 'none' : 'rotate(90deg)',
      }}
    >
      <Layer>
        <Provider store={store}>
          <Maps map={Map.DIRT} />
          <ChangeStatusButtons />
          {currentPlayer && (
            <Character
              x={currentPlayer.x}
              y={currentPlayer.y}
              job={currentPlayer.job}
              name={currentPlayer.name}
              status={currentPlayer.status}
            />
          )}
        </Provider>
      </Layer>
    </Stage>
  );
}
