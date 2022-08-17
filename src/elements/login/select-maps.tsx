import Image from 'next/image';
import { useMemo } from 'react';
import Map from '../../constants/environment/map';
import getMapConfig from '../../assets-configs/map';

interface ISelectMapsProps {
  map: Map;
  setMap: (map: Map) => void;
}

export default function SelectMaps({map, setMap}: ISelectMapsProps) {
  const mapSelections = Object.keys(Map).map((name) => <div>{name}</div>);
  const mapImage = useMemo(() => {
    return getMapConfig()[map];
  }, [map]);
  console.log(mapSelections);
  return (
    <>
      <Image src={mapImage} />
      <div>
        {mapSelections}
      </div>
    </>
  );
}