import { Image } from 'react-konva';
import useImage from 'use-image';

interface IImageButtonProps {
  x: number;
  y: number;
  height: number;
  width: number;
  image: string;
  onClick: () => void;
}

export default function ImageButton({
  x,
  y,
  height,
  width,
  image,
  onClick,
}: IImageButtonProps) {
  const [currentImage] = useImage(image);

  return (
    <Image
      image={currentImage as CanvasImageSource}
      x={x}
      y={y}
      height={height}
      width={width}
      alt="button"
      onClick={onClick}
    />
  );
}
