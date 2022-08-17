import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-konva';
import useImage from 'use-image';
import useImageFrame from '../../utils/hooks/image-frame';
import Map from '../../constants/environment/map';

const mapConfig: {[key: number]: Array<string>} = {
  [Map.DIRT]: [
    '/assets/environment/maps/game_background_1.png',
  ],
  [Map.SAND]: [
    '/assets/environment/maps/game_background_2.png',
  ],
  [Map.GRASS]: [
    '/assets/environment/maps/game_background_3.png',
  ],
  [Map.WOOD]: [
    '/assets/environment/maps/game_background_4.png',
  ],
};

interface IMapsProps {
  map: Map,
}

export default function Maps({ map }: IMapsProps) {
  const images = useMemo<Array<string>>(() => mapConfig[map], [map]);
  const image = useImageFrame(images);
  const [currentImage] = useImage(image);
  const { height, width, isHorizontal } = useSelector((state) => state.screenSize.value);

  return (
    <Image
      image={currentImage}
      height={isHorizontal ? height : width}
      width={isHorizontal ? width : height}
    />
  );
}
