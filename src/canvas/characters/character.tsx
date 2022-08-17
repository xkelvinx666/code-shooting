import { useMemo } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import useImageFrame from '../../utils/hooks/image-frame';
import Status from '../../constants/characters/status';
import { useAppDispatch } from '../../utils/hooks/redux';
import { setPlayerLocation } from '../../utils/store/player';

const posesConfig: {[key: number]: Array<string>} = {
  [Status.READY]: [
    '/assets/character/adventurer/Poses/adventurer_hold1.png',
    '/assets/character/adventurer/Poses/adventurer_hold2.png',
  ],
  [Status.WALK]: [
    '/assets/character/adventurer/Poses/adventurer_walk1.png',
    '/assets/character/adventurer/Poses/adventurer_walk2.png',
  ],
  [Status.WIN]: [
    '/assets/character/adventurer/Poses/adventurer_cheer1.png',
    '/assets/character/adventurer/Poses/adventurer_cheer2.png',
  ],
};

interface ICharacterProps {
  x: number;
  y: number;
  name: string;
  status: Status;
}

export default function Character({
  x,
  y,
  name,
  status,
}: ICharacterProps) {
  const images = useMemo<Array<string>>(() => posesConfig[status], [status]);
  const image = useImageFrame(images);
  const [currentImage] = useImage(image);
  const dispatch = useAppDispatch();
  const handleDrag = (_x: number, _y: number) => {
    dispatch(setPlayerLocation({
      x: _x,
      y: _y,
    }));
  };

  return (
    <Image
      image={currentImage}
      draggable
      x={x}
      y={y}
      onDragEnd={(e) => {
        handleDrag(e.target.x(), e.target.y());
      }}
    />
  );
}
