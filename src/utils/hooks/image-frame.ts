import {
  useState, useMemo, useEffect, useRef,
} from 'react';

function useImageFrame(images: Array<string>): undefined | string {
  if (!Array.isArray(images) || images.length === 0) return;
  const maxLen = images.length;
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [lastRenderTimestamp, setLastRenderTimestamp] = useState<number>(0);
  const currentImage = useMemo<string>(() => images[imageIndex], [images, imageIndex]);
  const requestRef = useRef<number>();
  const renderFPS = (1 / maxLen) * 300;

  const nextImage = () => {
    setImageIndex((preIndex) => (preIndex + 1) % maxLen);
  };

  useEffect(() => {
    const playImage = (timestamp: number) => {
      if (timestamp - lastRenderTimestamp > renderFPS) {
        setLastRenderTimestamp(timestamp);
        nextImage();
      }
      requestRef.current = requestAnimationFrame(playImage);
    };
    requestRef.current = requestAnimationFrame(playImage);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [imageIndex, requestRef]);

  return currentImage;
}

export default useImageFrame;
