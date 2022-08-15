import { Image } from 'react-konva';
import useImportImage from '@/utils/hooks/import-image';

interface IImageButtonProps {
  x: number;
  y: number;
  image: string;
  onClick: () => void;
}

export default function ImageButton({
  x, y, image, onClick,
}: IImageButtonProps) {
  const currentImage = useImportImage(image);

  return (
    <Image
      image={currentImage}
      x={x}
      y={y}
      onClick={onClick}
    />
  );
}
