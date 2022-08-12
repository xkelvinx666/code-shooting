import { useMemo } from 'react';
import { Image } from 'react-konva';
import useImageFrame from '@/utils/hooks/image-frame';
import useImportImage from '@/utils/hooks/import-image';
import Type from '@/constants/environment/type';

const typeConfig: {[key: number]: Array<string>} = {
  [Type.DIRT]: [
    '../../assets/environment/race-track/tileDirt.png',
  ],
  [Type.GOO]: [
    '../../assets/environment/race-track/tileGoo.png',
  ],
};

interface ICharacterProps {
  type: Type,
}

export default function RaceTrack({ type }: ICharacterProps) {
  const images = useMemo<Array<string>>(() => typeConfig[type], [type]);
  const image = useImageFrame(images);
  const currentImage = useImportImage(image);

  return (
    <Image image={currentImage} />
  );
}
