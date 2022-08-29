import {
  useState, useMemo, useEffect, useRef,
} from 'react';

function useImageFrame(images: Array<string>): string {
  const maxLen = useMemo(() => images.length, [images]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [lastRenderTimestamp, setLastRenderTimestamp] = useState<number>(0);
  const currentImage = useMemo<string>(() => images[imageIndex], [images, imageIndex]);
  const requestRef = useRef<number>();
  const renderFPS = (1 / maxLen) * 300;

  useEffect(() => {
    const playImage = (timestamp: number) => {
      if (timestamp - lastRenderTimestamp > renderFPS) {
        setLastRenderTimestamp(timestamp);
        setImageIndex((preIndex) => (preIndex + 1) % maxLen);
      }
      requestRef.current = requestAnimationFrame(playImage);
    };
    requestRef.current = requestAnimationFrame(playImage);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [imageIndex, requestRef, lastRenderTimestamp, renderFPS, maxLen]);

  return currentImage;
}

export default useImageFrame;
