import { useMemo } from 'react';
import { Image } from 'react-konva';
import useImageFrame from '@/utils/hooks/image-frame';
import useImportImage from '@/utils/hooks/import-image';
import Type from '@/constants/environment/type';

const typeConfig: {[key: number]: Array<string>} = {
  [Type.DIRT]: [
    '../../assets/environment/maps/game_background_1.png',
  ],
  [Type.GOO]: [
    '../../assets/environment/race-track/tileGoo.png',
  ],
};

interface IMapsProps {
  type: Type,
}

export default function Maps({ type }: IMapsProps) {
  const images = useMemo<Array<string>>(() => typeConfig[type], [type]);
  const image = useImageFrame(images);
  const currentImage = useImportImage(image);

  return (
    <Image image={currentImage} />
  );
}
