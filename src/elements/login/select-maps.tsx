import { useState } from 'react';
import Image from 'next/image';

export default function SelectMaps() {
  const [map, setMap] = useState<string>('');
  return (
    <>
      <Image src={map} />
    </>
  );
}