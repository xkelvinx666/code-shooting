import { useState, useEffect } from 'react';
import useImage from 'use-image';

function importImage(path: string):undefined | HTMLImageElement {
  const [image, setImage] = useState<string>('');
  const [imageDom] = useImage(image);
  useEffect(() => {
    import(path).then(({ default: img }) => {
      setImage(img);
    });
  }, [path]);
  return imageDom;
}
export default importImage;
