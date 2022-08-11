import { FC } from 'react';
import {
  Stage, Layer, Text,
} from 'react-konva';
import Character from './characters/character';

const App: FC = () => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <Text text="Try click on rect" />
      <Character />
    </Layer>
  </Stage>
);

export default App;
