import { useMemo } from 'react';
import { Image, Text, Group } from 'react-konva';
import useImage from 'use-image';
import Job from '../../constants/characters/job';
import useImageFrame from '../../utils/hooks/image-frame';
import Status from '../../constants/characters/status';
import { useAppDispatch } from '../../utils/hooks/redux';
import { setPlayerLocation } from '../../utils/store/player';
import getPoseConfig from '../../assets-configs/character-poses';

interface ICharacterProps {
  x: number;
  y: number;
  name: string;
  job: Job;
  status: Status;
}

export default function Character({
  x,
  y,
  name,
  job,
  status,
}: ICharacterProps) {
  const images = useMemo<Array<string>>(() => getPoseConfig(job)[status], [status, job]);
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
    <Group 
      draggable
      x={x}
      y={y} 
      onDragEnd={(e) => {
        handleDrag(e.target.x(), e.target.y());
      }}>
      <Text text={name} fill="#fff" />
      <Image
        image={currentImage as CanvasImageSource}
        alt="character"
      />
    </Group>
  );
}
