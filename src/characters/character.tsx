import { useMemo } from 'react';
import { Image } from 'react-konva';
import useImageFrame from '@/utils/hooks/image-frame';
import useImportImage from '@/utils/hooks/import-image';
import Status from '@/constants/characters/status';

const posesConfig: {[key: number]: Array<string>} = {
  [Status.HOLD]: [
    '../../assets/character/adventurer/Poses/adventurer_action1.png',
    '../../assets/character/adventurer/Poses/adventurer_action2.png',
  ],
  [Status.RUNNING]: [
    '../../assets/character/adventurer/Poses/adventurer_walk1.png',
    '../../assets/character/adventurer/Poses/adventurer_walk2.png',
  ],
};

interface ICharacterProps {
  name: string;
  status: Status;
}

export default function Character({ name, status }: ICharacterProps) {
  const images = useMemo<Array<string>>(() => posesConfig[status], [status]);
  const image = useImageFrame(images);
  const currentImage = useImportImage(image);

  return (
    <Image image={currentImage} />
  );
}
