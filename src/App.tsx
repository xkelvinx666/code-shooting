import { useState } from 'react';
import {
  Stage, Layer, Text,
} from 'react-konva';
import Status from '@/constants/characters/status';
import Character from './characters/character';

export default function App() {
  const [status, setStatus] = useState<Status>(Status.HOLD);
  const handleClick = (nextStatus: Status): void => {
    console.log(nextStatus);
    setStatus(nextStatus);
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text x={150} text="hold" onClick={() => handleClick(Status.HOLD)} />
        <Text x={100} text="running" onClick={() => handleClick(Status.RUNNING)} />
        <Character x={50} y={100} name="player1" status={status} />
      </Layer>
    </Stage>
  );
}
