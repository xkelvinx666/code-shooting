import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-konva';
import getMapConfig from '../../assets-configs/map';
import useImage from 'use-image';
import useImageFrame from '../../utils/hooks/image-frame';
import Map from '../../constants/environment/map';

interface IMapsProps {
  map: Map,
}

export default function Maps({ map }: IMapsProps) {
  const images = useMemo<Array<string>>(() => getMapConfig()[map], [map]);
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
