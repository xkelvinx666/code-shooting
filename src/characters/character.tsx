import { FC } from 'react';
import {
  Image,
} from 'react-konva';
import useImage from 'use-image';
import femaleAdventurer0 from '../assets/kenney_tooncharacters1/Female adventurer/PNG/Poses HD/character_femaleAdventurer_run0.png';

const Character: FC = () => {
  const [charaImage] = useImage(femaleAdventurer0);
  const onClick = () => {
  };
  return (
    <Image image={charaImage} onClick={onClick} />
  );
};

export default Character;
