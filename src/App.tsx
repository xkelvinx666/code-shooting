import { useState } from 'react';
import { Provider } from 'react-redux';
import {
  Stage, Layer, Text,
} from 'react-konva';
import store from './utils/store';
import useScreenSize from './utils/hooks/screen-size';
import Status from './constants/characters/status';
import Map from './constants/environment/map';
import Character from './characters/character';
import Maps from './eniroment/maps';

export default function App() {
  const [status, setStatus] = useState<Status>(Status.HOLD);
  const { width, height, isHorizontal } = useScreenSize();
  const handleClick = (nextStatus: Status): void => {
    setStatus(nextStatus);
  };

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
          <Text x={150} text="hold" onClick={() => handleClick(Status.HOLD)} />
          <Text x={100} text="running" onClick={() => handleClick(Status.RUNNING)} />
          <Character x={50} y={100} name="player1" status={status} />
        </Provider>
      </Layer>
    </Stage>
  );
}
