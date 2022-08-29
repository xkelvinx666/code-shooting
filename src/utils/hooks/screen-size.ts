import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { throttle } from 'lodash-es';
import { setSize } from '../store/screen-size';

export interface IScreenSize {
  height: number;
  width: number;
  isHorizontal: boolean,
}

function useScreenSize(): IScreenSize {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isHorizontal = useMemo(() => height < width, [height, width]);

  const dispatch = useDispatch();

  const resizeObserver = useMemo(() => {
    return new ResizeObserver(throttle((e: Array<ResizeObserverEntry>) => {
      const [{ contentRect }] = e;
      setHeight(contentRect.height);
      setWidth(contentRect.width);
      dispatch(setSize({
        height: contentRect.height,
        width: contentRect.width,
        isHorizontal: contentRect.height < contentRect.width,
      }));
    }, 200));
  }, [setHeight, setWidth, dispatch]);

  useEffect(() => {
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
    };
  }, [resizeObserver]);

  return {
    height,
    width,
    isHorizontal,
  };
}

export default useScreenSize;
